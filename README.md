# I CANT FIND THE TEXT! 🔍

A chaotic browser extension that forces a **500%** layout scale onto every single website, transforming your regular web browsing into an extreme, omnidirectional scrolling maze.

## How it Works
Instead of using standard page zoom, this extension forcefully overrides the HTML canvas scaling, forcing full desktop-responsive sites to expand far past the screen boundaries on both the horizontal and vertical axes.

## Folder Structure
* `manifest.json` - Extension configuration & content script rules
* `popup.html` - The UI to activate or deactivate chaos mode
* `popup.js` - Logic for managing extension storage and page reloads
* `content.js` - The payload script injecting the custom viewport rules

## Installation (Desktop or Lemur Browser)
1. Download or clone this project folder.
2. Open your browser's Extension page (e.g., `chrome://extensions/` or the puzzle piece icon in Lemur Browser).
3. Enable **Developer Mode**.
4. Click **Load Unpacked** and select this directory.
5. Open the popup, click **ACTIVATE CHAOS**, and start hunting for your text.
