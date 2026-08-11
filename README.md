# 🎵 TuneHub Music Player

A clean, responsive, and dynamic music player built with **HTML, CSS, and  JavaScript**.

TuneHub automatically detects albums from the `songs` directory, loads playlists dynamically, and provides a smooth music listening experience without requiring any code changes when adding new albums.

---

# 🌟 Features

- 🎵 Dynamic album detection
- 🎧 Play & Pause music
- ⏮ Previous / Next controls
- 📂 Dynamic playlist loading
- 🎚 Interactive seek bar
- 🔊 Volume control
- 🔇 Mute / Unmute
- 📱 Responsive design
- ⚡ Built using pure HTML, CSS & JavaScript
- 🎨 Clean Spotify-inspired interface

---

# 📁 Project Structure

```
TuneHub/
│
├── img/
│   ├── image1
│   ├── image2
│   └── ...
│ 
├── songs/
│   ├── Artist Name/
│   │   ├── cover.jpg
│   │   ├── info.json
│   │   ├── Song 1.mp3
│   │   ├── Song 2.mp3
│   │   └── ...
│   │
│   ├── Another Artist/
│   │   ├── cover.jpg
│   │   ├── info.json
│   │   └── ...
│   │
│   └── ...
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── utility.css
│
├── script/
│   ├── script.js
│
├── favicon.svg
└── README.md
```

---

# 🎼 How to Add More Albums

Adding a new album to TuneHub is very simple.

### Step 1

Open the `songs` folder.

### Step 2

Create a new folder with the **Artist Name** or **Album Name**.

Example:

```
songs/
    Imagine Dragons/
```

### Step 3

Inside that folder, add the following files:

```
cover.jpg
```

Album cover image.

```
info.json
```

Example:

```json
{
    "title": "Imagine Dragons",
    "description": "Best Hits Collection"
}
```

### Step 4

Add all your music files (`.mp3`) inside the same folder.

Example:

```
songs/
    Imagine Dragons/
        cover.jpg
        info.json
        Believer.mp3
        Demons.mp3
        Thunder.mp3
        Bones.mp3
```

✅ That's it!

No JavaScript modifications are required.

TuneHub will automatically detect the new album and display it on the homepage.

---

# ⚙️ How TuneHub Works

When the application starts, TuneHub automatically scans the `songs` directory.

For every folder inside `songs`, it looks for:

- `cover.jpg`
- `info.json`
- `.mp3` files

Using this information, TuneHub automatically creates an album card.

When a user clicks on an album:

- The playlist is generated automatically.
- Songs are loaded into the player.
- The first song is ready to play.
- Users can control playback using the Play, Pause, Previous, Next, Volume, Mute, and Seek controls.

Because everything is loaded dynamically, adding new albums never requires editing the JavaScript code.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
https://github.com/muhammadali1512/TuneHub-Music-Player.git
```

---

## 2. Open the Project

```bash
cd TuneHub
```

---

## 3. Open in Visual Studio Code

```bash
code .
```

Or simply open the project folder manually.

---

## 4. Run the Project

This project uses JavaScript `fetch()`, so it should be run using a local server.

### Using VS Code

1. Install the **Live Server** extension.
2. Open the project.
3. Right-click **index.html**.
4. Click **Open with Live Server**.

Your browser will automatically open TuneHub.

---

# 💻 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts

---

# 🤝 Want to Contribute?

Contributions are always welcome.

You can contribute by:

- Adding new albums
- Improving the UI
- Fixing bugs
- Improving responsiveness
- Optimizing JavaScript
- Adding new features

Fork the repository, make your changes, and submit a Pull Request.

---

# 📜 Copyright Notice

The songs included in this repository belong to their respective artists and copyright holders.

This project is created **only for educational and learning purposes** and is intended to demonstrate front-end web development techniques.

If you are an artist, copyright owner, or authorized representative and would like any music included in this repository to be removed, please contact me by email.

📧 **Email:** muhammadali1512147255@gmail.com

After receiving a valid request, I will remove the requested content from this repository as soon as possible.

---

# 👨‍💻 Developer

**Muhammad Ali**

GitHub:  
https://github.com/muhammadali1512

---

# ⭐ Support the Project

If you enjoyed this project or found it helpful, please consider giving it a **⭐ Star** on GitHub.

Your support helps others discover the project and motivates future improvements.

---

## ❤️ Thank You

Thank you for visiting **TuneHub Music Player**.

Enjoy your favorite music and happy coding! 🎵
