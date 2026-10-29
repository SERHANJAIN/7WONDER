# ✦ Seven Wonders of the World | Interactive Cartographic Atlas

A premium, interactive world map web application showcasing the Seven Wonders of the World. Built with pure HTML5, CSS3 (Glassmorphism & Obsidian-Gold Luxury design), and Vanilla JavaScript utilizing Leaflet.js.

Designed to be hosted effortlessly on **GitHub Pages** with zero build steps, zero npm dependencies, and instant global CDN delivery.

---

## 🏛️ Live Experience & Features

1. **Interactive Cartography:**
   - Dark luxury obsidian map aesthetic with glowing radial-pulse gold markers.
   - Smooth camera flight animations (`flyTo`) between global monuments.
   - 4 Cartographic View Modes: **Midnight Obsidian**, **Orbital Satellite**, **Antique Cartography**, and **Daylight Explorer**.

2. **Hover Previews (As Requested):**
   - Hovering over any marker on the world map reveals an instant, elegant glassmorphic preview card with:
     - High-definition photography
     - Monument name & historical era
     - Country flag & location badge
     - Direct call-to-action prompt

3. **In-Depth Educational Modal Window:**
   - Clicking any wonder opens a comprehensive, museum-grade educational window featuring:
     - **Overview & Historical Archives**: Origins, civilization context, and significance.
     - **Architectural Marvels**: Construction techniques (e.g. sticky rice mortar, ashlar masonry, acoustic chirps, hypogeum mechanics).
     - **Mysteries & Curiosities**: Debunked myths vs. historical facts.
     - **Travel & Virtual Explorer**: GPS coordinates, best travel seasons, and one-click 3D Google Satellite exploration links.

4. **Bonus Capabilities:**
   - **New 7 Wonders & Ancient 7 Wonders Toggle**: Explore both the modern 7 Wonders (plus the Great Pyramid of Giza) and the classical Ancient Wonders of Antiquity.
   - **Grand Tour Autopilot**: Automated cinematic drone-flight touring around the globe from wonder to wonder.
   - **Bottom Monument Drawer**: Quick horizontal carousel to jump straight to any monument.
   - **Spatial Audio Experience**: Subtle harmonic feedback synthesized dynamically with the Web Audio API (no external mp3 files required!).
   - **100% Mobile Responsive**: Seamlessly scales across phones, tablets, and 4K desktop screens.

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

You can host this website on GitHub completely free in under 2 minutes:

### Option A: Using the GitHub Website (No Git Terminal Required)

1. Go to [github.com](https://github.com) and create a **New Repository** (e.g., `seven-wonders-atlas`). Make sure it is set to **Public**.
2. Click **"uploading an existing file"**.
3. Drag and drop the following files from this project:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
4. Click **"Commit changes"**.
5. In your repository, click **Settings** (gear icon) along the top menu.
6. In the left sidebar, click **Pages** (under the "Code and automation" section).
7. Under **Build and deployment > Branch**:
   - Change branch from `None` to **`main`** (or `master`).
   - Leave the folder set to **`/(root)`**.
   - Click **Save**.
8. Wait ~30-60 seconds and refresh the page. GitHub will provide your live URL:
   ```
   https://<your-username>.github.io/<repository-name>/
   ```

---

### Option B: Using the Command Line (Git Terminal)

If you have Git installed, simply run these commands inside the project directory:

```bash
# 1. Initialize Git repository
git init

# 2. Stage and commit files
git add .
git commit -m "Initial commit: Seven Wonders of the World Interactive Atlas"

# 3. Rename branch to main
git branch -M main

# 4. Link to your new GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 5. Push files to GitHub
git push -u origin main
```

Then enable GitHub Pages under **Repository Settings > Pages > Source: Deploy from branch (`main` / root)**.

---

## 💻 Local Testing & Preview

To run or preview the website on your local machine:

### Method 1: Open Directly
Double-click `index.html` to open it in your preferred web browser (Chrome, Safari, Firefox, Edge).

### Method 2: Local HTTP Server (Python)
In your terminal, navigate to the folder and run:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 📁 Project Structure

```
seven-wonders-map/
├── index.html        # Semantic HTML5 markup, Leaflet structure, and modal dialogues
├── style.css         # Luxury obsidian/gold theme, glassmorphic UI, animations
├── script.js         # Leaflet map logic, wonder archives database, tour autopilot
└── README.md         # Documentation and GitHub Pages hosting instructions
```

---

## 📜 Covered Monuments

### The New 7 Wonders:
1. 🇨🇳 **Great Wall of China** (China)
2. 🇯🇴 **Petra** (Jordan)
3. 🇮🇹 **The Colosseum** (Italy)
4. 🇮🇳 **Taj Mahal** (India)
5. 🇵🇪 **Machu Picchu** (Peru)
6. 🇲🇽 **Chichén Itzá** (Mexico)
7. 🇧🇷 **Christ the Redeemer** (Brazil)
8. 🇪🇬 **Great Pyramid of Giza** (Egypt - *Honorary Candidate & Sole Standing Ancient Wonder*)

### The Ancient 7 Wonders:
1. 🇪🇬 Great Pyramid of Giza
2. 🇮🇶 Hanging Gardens of Babylon
3. 🇬🇷 Statue of Zeus at Olympia
4. 🇹🇷 Temple of Artemis at Ephesus
5. 🇹🇷 Mausoleum at Halicarnassus
6. 🇬🇷 Colossus of Rhodes
7. 🇪🇬 Lighthouse of Alexandria

---

*Crafted with precision for explorers, historians, and lovers of timeless architecture.*
