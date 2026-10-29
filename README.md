# Wonders Atlas — The New Seven Wonders of the World

A premium, responsive, static website featuring an interactive world map. Hover over a numbered map marker to preview the wonder's photo and name, then click the marker to open an educational story panel.

## Files
- `index.html` — page structure and map/modal markup
- `style.css` — responsive visual design
- `script.js` — wonder data, map markers, hover previews and story modal

## Run locally
Open `index.html` in a modern browser. An internet connection is required for the map tiles, Leaflet library, web fonts and remote photos.

## Publish with GitHub Pages
1. Create a new repository on GitHub.
2. Upload all three website files (`index.html`, `style.css`, `script.js`) and this README.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish, then open the URL shown in the Pages section.

No build step, package manager, or backend is required.

## Notes
- The map uses Leaflet and OpenStreetMap tiles.
- Photos are loaded from Unsplash image URLs; an internet connection is required.
- This site presents the **New Seven Wonders of the World** list announced in 2007. The Great Pyramid of Giza is commonly treated as an honorary candidate because it is the sole surviving Ancient Wonder, rather than one of the seven selected in 2007.
- For a production/public project, review image licensing and replace any image URLs with photos you have permission to use. OpenStreetMap tile usage is subject to its tile usage policy.
