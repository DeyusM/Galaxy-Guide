// random tip
const tipBox = document.getElementById("tip");
if (tipBox) {
  tipBox.textContent = tips[Math.floor(Math.random() * tips.length)];
}

// Planet of the Day
const planetDayBox = document.getElementById("planetOfDay");
if (planetDayBox) {
  const p = planets[Math.floor(Math.random() * planets.length)];
  planetDayBox.innerHTML = `
    <h2>🌟 Planet of the Day: ${p.name}</h2>
    <img src="${p.image}" alt="${p.name}" />
    <p>${p.desc.substring(0, 120)}...</p>
  `;
}

// card builder
const grid = document.getElementById("planets");
function renderCards(list) {
  if (!grid) return;
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";

    const img = document.createElement("img");
    img.src = p.image;
    img.alt = p.name;

    const body = document.createElement("div");
    body.className = "card-body";

    const h3 = document.createElement("h3");
    h3.className = "card-title";
    h3.textContent = p.name;

    const meta = document.createElement("div");
    meta.className = "card-meta";
    meta.textContent = `${p.type} • Gravity: ${p.gravity} • ${p.distFromSun}`;

    const desc = document.createElement("div");
    desc.className = "card-desc";
    desc.textContent = p.desc;

    body.appendChild(h3);
    body.appendChild(meta);
    body.appendChild(desc);
    card.appendChild(img);
    card.appendChild(body);
    grid.appendChild(card);
  });
}

if (grid) {
  renderCards(planets);
}

// search filter
const search = document.getElementById("search");
if (search) {
  search.addEventListener("input", () => {
    const q = search.value.toLowerCase().trim();
    const filtered = planets.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
    renderCards(filtered);
  });
}

// theme switch
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("theme-b");
    document.body.classList.toggle("theme-a");
  });
}

// Fun Facts Page logic
const factDisplay = document.getElementById("factDisplay");
const newFactBtn = document.getElementById("newFactBtn");

if (factDisplay && newFactBtn) {
  function showRandomFact() {
    factDisplay.textContent = funFacts[Math.floor(Math.random() * funFacts.length)];
  }
  showRandomFact();
  newFactBtn.addEventListener("click", showRandomFact);
}
