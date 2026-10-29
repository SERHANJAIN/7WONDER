// Wonders Atlas uses Leaflet + OpenStreetMap, so no API key is required.
const wonders = [
  {
    id: 1, name: "Great Wall of China", country: "China", location: "Northern China",
    coords: [40.4319, 116.5704], era: "7th century BCE onward",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1100&q=85",
    summary: "Built and rebuilt by successive Chinese states and dynasties, the Great Wall is a vast network of walls, watchtowers and natural barriers. It helped defend borders, manage movement and send signals across rugged terrain. Rather than one wall built at a single moment, it is a layered record of centuries of Chinese history.",
    fact: "Its many sections together extend for more than 21,000 kilometres."
  },
  {
    id: 2, name: "Petra", country: "Jordan", location: "Ma'an Governorate, Jordan",
    coords: [30.3285, 35.4444], era: "Peak: 1st century BCE–1st century CE",
    image: "https://images.unsplash.com/photo-1579606032821-4e6161c81c6a?auto=format&fit=crop&w=1100&q=85",
    summary: "Petra was the capital of the Nabataean kingdom, flourishing along trading routes that connected Arabia, Egypt and the Mediterranean. Its grand façades were carved into rose-coloured sandstone cliffs, while channels and reservoirs helped residents manage scarce water in a dry landscape.",
    fact: "The narrow Siq gorge forms a dramatic approach to Petra's famous Treasury."
  },
  {
    id: 3, name: "Christ the Redeemer", country: "Brazil", location: "Corcovado Mountain, Rio de Janeiro",
    coords: [-22.9519, -43.2105], era: "Completed in 1931",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1100&q=85",
    summary: "Standing high above Rio de Janeiro, Christ the Redeemer is an Art Deco statue made from reinforced concrete and clad in soapstone. Designed through a collaboration of engineers and artists, its open arms overlook the city, mountains and bay, becoming one of Brazil's best-known symbols.",
    fact: "The statue itself is about 30 metres tall, not including its pedestal."
  },
  {
    id: 4, name: "Machu Picchu", country: "Peru", location: "Cusco Region, Andes Mountains",
    coords: [-13.1631, -72.5450], era: "15th century CE",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1100&q=85",
    summary: "This Inca citadel sits on a steep Andean ridge above the Urubamba River. Its carefully fitted stone buildings, terraces and drainage systems show remarkable adaptation to a mountainous environment. Often associated with the ruler Pachacuti, the site may have served royal, ceremonial and administrative purposes.",
    fact: "Machu Picchu stands about 2,430 metres above sea level."
  },
  {
    id: 5, name: "Chichén Itzá", country: "Mexico", location: "Yucatán Peninsula, Mexico",
    coords: [20.6843, -88.5678], era: "Major flourishing: c. 800–1200 CE",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1100&q=85",
    summary: "Chichén Itzá was a major Maya city and ceremonial centre. Its famous stepped pyramid, El Castillo, stands among temples, a large ball court and a sacred cenote. The site reflects sophisticated architecture and astronomical observation, as well as connections across the wider Mesoamerican world.",
    fact: "The pyramid's four stairways each have 91 steps; with the top platform, the total is often linked to 365."
  },
  {
    id: 6, name: "Colosseum", country: "Italy", location: "Rome, Italy",
    coords: [41.8902, 12.4922], era: "Opened around 80 CE",
    image: "https://images.unsplash.com/photo-1552432552-06c0b6b9e5c9?auto=format&fit=crop&w=1100&q=85",
    summary: "Commissioned by the Flavian emperors, Rome's Colosseum was the largest amphitheatre of its time. Its tiered seating, corridors and arched structure helped manage huge crowds attending public spectacles, including gladiatorial contests. Earthquakes and centuries of stone reuse changed the building, but much remains standing.",
    fact: "The amphitheatre could accommodate tens of thousands of spectators."
  },
  {
    id: 7, name: "Taj Mahal", country: "India", location: "Agra, Uttar Pradesh, India",
    coords: [27.1751, 78.0421], era: "Built c. 1632–1653",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1100&q=85",
    summary: "Commissioned by Mughal emperor Shah Jahan as a mausoleum for Mumtaz Mahal, the Taj Mahal combines a white-marble tomb, formal gardens, water channels and surrounding buildings. Its symmetry, carved calligraphy and intricate stone inlay make it one of the finest examples of Mughal architecture.",
    fact: "The white marble subtly changes tone with the light throughout the day."
  }
];

const map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: true,
  worldCopyJump: true
}).setView([20, 12], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>'
}).addTo(map);
L.control.zoom({ position: "bottomright" }).addTo(map);

const modal = document.getElementById("wonderModal");
let activeIndex = 0;

function previewHTML(wonder) {
  return `<div class="preview-tooltip">
    <img src="${wonder.image}" alt="${wonder.name}" loading="lazy" onerror="this.style.display='none'">
    <div class="preview-copy">
      <span>${wonder.country}</span>
      <strong>${wonder.name}</strong>
    </div>
  </div>`;
}

function openWonder(index) {
  activeIndex = index;
  const wonder = wonders[index];
  document.getElementById("modalImage").src = wonder.image;
  document.getElementById("modalImage").alt = wonder.name;
  document.getElementById("modalKicker").textContent = `${String(wonder.id).padStart(2, "0")}  /  ${wonder.country}  /  ${wonder.era}`;
  document.getElementById("modalTitle").textContent = wonder.name;
  document.getElementById("modalSummary").textContent = wonder.summary;
  document.getElementById("modalFact").textContent = wonder.fact;
  document.getElementById("modalLocation").textContent = wonder.location;
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
    html: `<div class="wonder-marker">${String(wonder.id).padStart(2, "0")}</div>`,
    iconSize: [27, 27],
    iconAnchor: [13, 13]
  });
  const marker = L.marker(wonder.coords, { icon, title: wonder.name, keyboard: true })
    .addTo(map)
    .bindTooltip(previewHTML(wonder), {
      direction: "top",
      offset: [0, -10],
      opacity: 1,
      className: "wonder-tooltip"
    });
  marker.on("mouseover", () => marker.openTooltip());
  marker.on("click", () => openWonder(index));
  marker.on("keypress", event => {
    if (event.originalEvent && event.originalEvent.key === "Enter") openWonder(index);
  });
});

document.getElementById("resetMap").addEventListener("click", () => map.setView([20, 12], 2));
document.getElementById("closeModal").addEventListener("click", closeWonder);
modal.addEventListener("click", event => {
  if (event.target.dataset.close === "true") closeWonder();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeWonder();
});
document.getElementById("nextWonder").addEventListener("click", () => {
  const next = (activeIndex + 1) % wonders.length;
  openWonder(next);
  map.flyTo(wonders[next].coords, 5, { duration: 0.8 });
});
