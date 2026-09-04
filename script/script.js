// For Heading Changes after every 3 Seconds
const messages = [
    "🎵 TUNEHUB Playlists 🎶",
    "Enjoy TuneHub Music 🎵",
    "Keep Enjoying Every Beat 🎧",
    "Discover New Songs Daily 🔥",
    "Your Music, Your Vibe 🎶",
    "Listen Anywhere, Anytime 🚀"
];

let songs;
let currFolder;
let index = 0;
const title = document.getElementById("playlist-title");

setInterval(() => {
    index = (index + 1) % messages.length;
    title.textContent = messages[index];
}, 2000);

// Seconds to minuteSeconds
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainningSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainningSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

// getSongs Logic Function
async function getSongs(folder) {
    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:5500/${folder}/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li> 
                            <img class="invert" src="img/music.svg" alt="Music">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div></div>
                            </div>
                            <div class="playNow">
                                <span>Play Now</span>
                                <img class="invert" src="img/play.svg" alt="Play">
                            </div> </li>`;
    }

    // Attaching the eventListener to Each Song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        })
    })

    return songs;
}

let currentSong = new Audio();
// Play Music Function 
const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track;
    if (!pause) {
        currentSong.play();
        play.src = "img/pause.svg";
    }
    document.querySelector(".songInfo").innerHTML = decodeURI(track);
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00";
}

async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:5500/songs/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let cardContainer = document.querySelector(".cardContainer");
    let array = Array.from(anchors);
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (e.href.includes("/songs/")) {
            let parts = e.href.split("/");
            let folder = parts[parts.length - 1];

            if (folder === "" || folder === "songs") {
                continue;
            }
            // Get the metaData of the folder 
            let a = await fetch(`http://127.0.0.1:5500/songs/${folder}/info.json`);
            let response = await a.json();
            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
                        <div class="play">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">

                                <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" stroke-width="1.5"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <img src="/songs/${folder}/cover.jpg" alt="Happy-Hits">
                        <h2>${response.title}</h2>
                        <p>${response.description}</p>
                    </div>`
        }

    }

    // Load the playList whenEver the Card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
            playMusic(songs[0]);
        })
    })
}

// Main Function of the Program
async function main() {
    // Get List of Songs
    await getSongs("songs/cs");
    playMusic(songs[0], true);

    // Display all the albums on the page
    displayAlbums()

    // Attach an Event listener to play,previous and next
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "img/pause.svg";
        } else {
            currentSong.pause();
            play.src = "img/play.svg";
        }
    })

    // Listen for timeUpdate Event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songTime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)
            }`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    // Add an Event Listener to seekBar
    document.querySelector(".seekBar").addEventListener("click", (e) => {
        let percent = e.offsetX / e.target.getBoundingClientRect().width * 100;
        document.querySelector(".circle").style.left = `${percent}%`;
        currentSong.currentTime = ((currentSong.duration) * percent) / 100;
    })

    const hamburger = document.querySelector(".hamburger2");
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    hamburger.addEventListener("click", () => {
        left.style.left = "0";

    });

    document.querySelector(".close").addEventListener("click", () => {
        left.style.left = "-120%";
    });

    // Add an Event Listener for Previous Next buttons
    previous.addEventListener("click", () => {
        currentSong.pause()
        console.log("Previous clicked")
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })

    // Add an Event Listener for  Next buttons
    next.addEventListener("click", () => {
        currentSong.pause()
        console.log("Next clicked")

        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })

    // Add an Event to Volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to : ", e.target.value, "/100");
        currentSong.volume = parseInt(e.target.value) / 100;
        if (currentSong.volume > 0) {
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg");
        }
    })

    // Add an Event Listener to Mute
    document.querySelector(".volume>img").addEventListener("click", (e) => {
        if (e.target.src.includes("volume.svg")) {
            e.target.src = e.target.src.replace("volume.svg", "mute.svg");
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        } else {
            e.target.src = e.target.src.replace("mute.svg", "volume.svg");
            currentSong.volume = .20;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 20;
        }
    })

}

main();  