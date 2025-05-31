# 😂 Meme Generator - Smooth & Responsive

A simple and elegant meme generator web app featuring a clean, modern UI with smooth CSS animations.  
Generate random memes with a single click and enjoy an immersive full-width meme preview 🖼️✨

## ✨ Features

- 🎨 Clean and minimal design with smooth hover effects  
- 📱 Responsive layout with large meme image display  
- 🧈 Stylish buttons with soft shadows and transitions  
- 🔧 Easy to customize and extend  

## 🚀 Getting Started

1. Clone this repo  
2. Open `index.html` in your browser  
3. Enjoy endless random memes!

## 🧩 How to Use as a Chrome Extension

You can run this app as a local Chrome extension:

1. Open **Google Chrome**
2. Go to `chrome://extensions/`
3. Enable **Developer mode** (top right corner)
4. Click **"Load unpacked"**
5. Select the folder of your project (make sure it contains `manifest.json`)
6. The extension will appear in your toolbar 🧠

> 📦 You’ll need to create a `manifest.json` file. Example:

```json
{
  "manifest_version": 3,
  "name": "Meme Generator",
  "version": "1.0",
  "description": "Generate random memes in one click",
  "action": {
    "default_popup": "index.html",
    "default_icon": "src/images/icon.png"
  }
}
```
## 📁 Folder Structure
```
src/
├── images/       # Profile pics and social icons
├── videos/       # Background video files
├── css/
│   └── style.css # Main stylesheet with smooth effects
└── index.html    # Main HTML file to edit
```
## 🛠️ Technologies Used

- 🧾 HTML5
- 🎨 CSS3 with transitions and shadows
- ⚙️ JavaScript (for API/random memes)
