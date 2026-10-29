const wonders = [
  {
    id: 1, name: "Great Wall of China", country: "China", region: "Huairou District, northern China",
    coords: [40.4319, 116.5704], era: "7th century BCE onward", built: "Defensive fortifications", fact: "Over 21,000 km of sections",
    subtitle: "A monumental frontier winding across mountains and valleys.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=85",
    description: "The Great Wall is a vast network of walls, watchtowers and natural barriers built and rebuilt by successive Chinese states and dynasties. Early walls appeared centuries before the Qin dynasty, while later rulers connected and strengthened sections to defend borders, control trade routes and communicate across the landscape.",
    significance: "Its scale reflects generations of engineering, labour and strategic planning. Rather than one continuous wall built at one time, it is a layered record of China's changing frontiers and political history."
  },
  {
    id: 2, name: "Petra", country: "Jordan", region: "Ma'an Governorate, southern Jordan",
    coords: [30.3285, 35.4444], era: "Peak: 1st century BCE–1st century CE", built: "Nabataean city", fact: "Famous for rock-cut architecture",
    subtitle: "A rose-red city shaped directly from sandstone cliffs.",
    image: "https://images.unsplash.com/photo-1579606032821-4e6161c81c6a?auto=format&fit=crop&w=1200&q=85",
    description: "Petra was the capital of the Nabataean kingdom, a trading culture that prospered at the crossroads of routes linking Arabia, Egypt and the Mediterranean. Its dramatic entrance runs through the narrow Siq gorge before opening onto the celebrated Al-Khazneh, often called the Treasury.",
    significance: "Petra's carved façades, tombs, temples, water channels and reservoirs show how its people adapted to an arid environment while building a prosperous cosmopolitan city. It became a UNESCO World Heritage Site in 1985."
  },
  {
    id: 3, name: "Christ the Redeemer", country: "Brazil", region: "Corcovado Mountain, Rio de Janeiro",
    coords: [-22.9519, -43.2105], era: "Completed in 1931", built: "Art Deco statue", fact: "30 m statue, plus pedestal",
    subtitle: "An open-armed landmark overlooking Rio de Janeiro.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=85",
    description: "Christ the Redeemer stands atop Corcovado Mountain in Tijuca National Park, looking out over Rio de Janeiro. The reinforced-concrete and soapstone statue was designed by engineer Heitor da Silva Costa, with contributions from artist Carlos Oswald and sculptor Paul Landowski.",
    significance: "Completed in 1931, the statue has become a powerful symbol of Rio and Brazil. Its location above the city makes it both a religious monument and an unmistakable part of the surrounding mountain-and-bay landscape."
  },
  {
    id: 4, name: "Machu Picchu", country: "Peru", region: "Andes Mountains, Cusco Region",
    coords: [-13.1631, -72.5450], era: "15th century CE", built: "Inca royal estate and ceremonial site", fact: "About 2,430 m above sea level",
    subtitle: "An Inca citadel set high among cloud-wrapped peaks.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=85",
    description: "Machu Picchu was built during the 15th century, commonly associated with the reign of the Inca ruler Pachacuti. Its terraces, plazas, finely fitted stone buildings and sophisticated drainage systems sit on a steep ridge between Andean peaks above the Urubamba River.",
    significance: "The site offers insight into Inca architecture, landscape design and the relationship between settlement and sacred geography. It was brought to broad international attention in 1911 and is now protected as both a UNESCO World Heritage Site and part of a major conservation area."
  },
  {
    id: 5, name: "Chichén Itzá", country: "Mexico", region: "Yucatán Peninsula, Mexico",
    coords: [20.6843, -88.5678], era: "Major flourishing: c. 800–1200 CE", built: "Maya city and ceremonial centre", fact: "El Castillo has 365-day symbolism",
    subtitle: "A Maya city where architecture, astronomy and ritual meet.",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=85",
    description: "Chichén Itzá was one of the most influential cities of the Maya world. Its monumental centre includes the stepped pyramid known as El Castillo, the Great Ball Court, temples and the Sacred Cenote. The city reflects a rich mix of Maya traditions and wider Mesoamerican influences.",
    significance: "The site's buildings reveal sophisticated knowledge of geometry, observation of the sky and ceremonial planning. The pyramid's calendar associations are especially famous, though the city’s importance extends well beyond a single monument."
  },
  {
    id: 6, name: "Colosseum", country: "Italy", region: "Rome, Italy",
    coords: [41.8902, 12.4922], era: "Opened around 80 CE", built: "Roman amphitheatre", fact: "Could hold tens of thousands",
    subtitle: "Rome's colossal arena and enduring feat of engineering.",
    image: "https://images.unsplash.com/photo-1552432552-06c0b6b9e5c9?auto=format&fit=crop&w=1200&q=85",
    description: "Commissioned under the Flavian emperors and inaugurated under Titus, the Colosseum was the largest amphitheatre of the Roman world. Its layered arches, corridors and seating system helped organise huge crowds for public spectacles, including gladiatorial contests and animal hunts.",
    significance: "The structure demonstrates Roman skill in concrete construction, vaulting and crowd movement. Although earthquakes, stone reuse and centuries of change damaged it, the Colosseum remains one of the most recognisable monuments of ancient Rome."
  },
  {
    id: 7, name: "Taj Mahal", country: "India", region: "Agra, Uttar Pradesh, India",
    coords: [27.1751, 78.0421], era: "Built c. 1632–1653", built: "Mausoleum commissioned by Shah Jahan", fact: "White marble with inlay work",
    subtitle: "A marble monument to love, symmetry and craftsmanship.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85",
    description: "The Mughal emperor Shah Jahan commissioned the Taj Mahal as a mausoleum for his wife Mumtaz Mahal. Built on the banks of the Yamuna River, the complex brings together a white-marble tomb, a formal garden, a mosque, a guest pavilion and carefully aligned water features.",
    significance: "Its balanced composition, calligraphy, pietra dura stone inlay and changing light on the marble make it a landmark of Mughal architecture. Completed in the 17th century, it is a UNESCO World Heritage Site and a lasting symbol of remembrance."
  }
];

const map = L.map("map", { zoomControl: false, scrollWheelZoom: true, worldCopyJump: true }).setView([22, 13], 2);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>'
}).addTo(map);
L.control.zoom({ position: "bottomright" }).addTo(map);

const markers = [];
const previewCard = document.getElementById("previewCard");
const modal = document.getElementById("wonderModal");
let activeWonderIndex = 0;
let previewTimer;

function tooltipHTML(wonder) {
  return `<div class="preview-tooltip">
    <img src="${wonder.image}" alt="${wonder.name}" loading="lazy" onerror="this.style.display='none'">
    <div class="preview-tooltip-copy">
      <span>${String(wonder.id).padStart(2, "0")} / ${wonder.country}</span>
      <strong>${wonder.name}</strong>
      <small>CLICK MARKER TO EXPLORE ↗</small>
    </div>
  </div>`;
}

function openWonder(index) {
  activeWonderIndex = index;
  const w = wonders[index];
  document.getElementById("modalImage").src = w.image;
  document.getElementById("modalImage").alt = w.name;
  document.getElementById("modalNumber").textContent = String(w.id).padStart(2, "0");
  document.getElementById("modalCountry").textContent = `${w.country}  /  ${w.region}`;
  document.getElementById("modalTitle").textContent = w.name;
  document.getElementById("modalSubtitle").textContent = w.subtitle;
  document.getElementById("modalDescription").textContent = w.description;
  document.getElementById("modalSignificance").textContent = w.significance;
  document.getElementById("modalCoordinates").textContent = `${Math.abs(w.coords[0]).toFixed(2)}° ${w.coords[0] >= 0 ? "N" : "S"} · ${Math.abs(w.coords[1]).toFixed(2)}° ${w.coords[1] >= 0 ? "E" : "W"}`;
  document.getElementById("modalFacts").innerHTML = `
    <div class="fact"><span>Era</span><strong>${w.era}</strong></div>
    <div class="fact"><span>Type</span><strong>${w.built}</strong></div>
    <div class="fact"><span>Location</span><strong>${w.region}</strong></div>
    <div class="fact"><span>Did you know?</span><strong>${w.fact}</strong></div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("closeModal").focus();
}

function closeWonder() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

wonders.forEach((wonder, index) => {
  const icon = L.divIcon({
    className: "",
    html: `<div class="wonder-marker" aria-label="${wonder.name}">${String(wonder.id).padStart(2, "0")}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13]
  });
  const marker = L.marker(wonder.coords, { icon, keyboard: true, title: wonder.name })
    .addTo(map)
    .bindTooltip(tooltipHTML(wonder), { direction: "top", offset: [0, -12], opacity: 1, className: "wonder-tooltip", sticky: false });
  marker.on("mouseover", () => marker.openTooltip());
  marker.on("mouseout", () => {
    // Let the map tooltip close naturally; its content remains interactive-looking.
  });
  marker.on("click", () => openWonder(index));
  marker.on("keypress", event => { if (event.originalEvent.key === "Enter") openWonder(index); });
  markers.push(marker);
});

document.getElementById("resetMap").addEventListener("click", () => map.setView([22, 13], 2));
document.getElementById("closeModal").addEventListener("click", closeWonder);
modal.addEventListener("click", event => { if (event.target.dataset.close === "true") closeWonder(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeWonder(); });
document.getElementById("nextWonder").addEventListener("click", () => {
  const next = (activeWonderIndex + 1) % wonders.length;
  openWonder(next);
  map.flyTo(wonders[next].coords, 5, { duration: 1.1 });
});
