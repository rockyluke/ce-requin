const markdownFiles = [
  "ANGE-DE-MER-COMMUN.md",
  "GRAND-REQUIN-BLANC.md",
  "GRAND-REQUIN-MARTEAU.md",
  "KLAUS.md",
  "LUSCA.md",
  "REQUIN-BALEINE.md",
  "REQUIN-BORDE.md",
  "REQUIN-BOULEDOGUE.md",
  "REQUIN-CARAIBE.md",
  "REQUIN-CITRON.md",
  "REQUIN-CORAIL.md",
  "REQUIN-CUIVRE.md",
  "REQUIN-DES-GALAPAGOS.md",
  "REQUIN-DU-GROENLAND.md",
  "REQUIN-FEROCE.md",
  "REQUIN-GRANDE-GUEULE.md",
  "REQUIN-GRIS.md",
  "REQUIN-GRIS-DE-RECIF.md",
  "REQUIN-GRISET.md",
  "REQUIN-HA.md",
  "REQUIN-LEOPARD.md",
  "REQUIN-LEZARD.md",
  "REQUIN-LIMON-FAUCILLE.md",
  "REQUIN-MARTEAU-COMMUN.md",
  "REQUIN-MARTEAU-HALICORNE.md",
  "REQUIN-NOURRICE-ATLANTIQUE.md",
  "REQUIN-NOURRICE-FAUVE.md",
  "REQUIN-OCEANIQUE.md",
  "REQUIN-PEAU-BLEUE.md",
  "REQUIN-PELERIN.md",
  "REQUIN-POINTES-BLANCHES-DE-RECIF.md",
  "REQUIN-POINTES-NOIRES.md",
  "REQUIN-RENARD-COMMUN.md",
  "REQUIN-SOMBRE.md",
  "REQUIN-TAUPE-BLEU.md",
  "REQUIN-TAUPE-COMMUN.md",
  "REQUIN-TAUREAU.md",
  "REQUIN-TIGRE.md",
  "SQUALELET-FEROCE.md",
];

const state = { sharks: [], query: "", ocean: "all", sea: "all", type: "all" };
const elements = {
  form: document.querySelector("#search-form"), input: document.querySelector("#search-input"),
  grid: document.querySelector("#shark-grid"), filters: document.querySelector("#ocean-filters"), seaFilters: document.querySelector("#sea-filters"), typeFilters: document.querySelector("#type-filters"),
  count: document.querySelector("#shark-count"), countLabel: document.querySelector("#shark-count-label"),
  empty: document.querySelector("#empty-state"), reset: document.querySelector("#reset-search"),
  template: document.querySelector("#shark-card-template"),
};

function normalize(value) { return value.toLocaleLowerCase("fr").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
function list(value = "") { return value.split("|").map((item) => item.trim()).filter(Boolean); }
function zoneId(value) { return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function renderZoneLinks(element, zones) {
  zones.forEach((zone, index) => {
    if (index) element.append(document.createTextNode(" · "));
    const link = document.createElement("a");
    link.href = `zones.html#${zoneId(zone)}`;
    link.textContent = zone;
    link.className = "zone-link";
    element.append(link);
  });
}
function parseMarkdown(markdown, file) {
  const block = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!block) return null;
  const data = Object.fromEntries(block[1].split("\n").map((line) => {
    const index = line.indexOf(":"); return index < 0 ? [line, ""] : [line.slice(0, index).trim(), line.slice(index + 1).trim()];
  }));
  return { ...data, file, oceans: list(data.oceans), mers: list(data.mers), lieux: list(data.lieux), nourriture: list(data.nourriture), colonne: list(data.colonne_eau) };
}

function createCard(shark) {
  const fragment = elements.template.content.cloneNode(true);
  const card = fragment.querySelector(".shark-card");
  fragment.querySelector("h2").textContent = shark.nom;
  fragment.querySelector(".scientific").textContent = shark.scientifique;
  if (shark.type === "fictif") { card.classList.add("fictional"); fragment.querySelector(".fiction-badge").hidden = false; }
  fragment.querySelector(".places").textContent = [...shark.oceans, ...shark.mers, ...shark.lieux].join(" · ");
  fragment.querySelector(".size").textContent = shark.taille;
  fragment.querySelector(".weight").textContent = shark.poids;
  fragment.querySelector(".food").textContent = shark.nourriture.join(" · ");
  renderZoneLinks(fragment.querySelector(".water-column"), shark.colonne);
  fragment.querySelector(".depth").textContent = shark.profondeur;
  fragment.querySelector(".doris").href = shark.source_doris;
  fragment.querySelector(".wikipedia").href = shark.source_wikipedia;
  if (shark.source_doris) fragment.querySelector(".doris").href = shark.source_doris; else fragment.querySelector(".doris").remove();
  if (shark.source_wikipedia) fragment.querySelector(".wikipedia").href = shark.source_wikipedia; else fragment.querySelector(".wikipedia").remove();
  if (shark.source_dave) fragment.querySelector(".dave").href = shark.source_dave; else fragment.querySelector(".dave").remove();
  fragment.querySelector(".markdown").href = `https://github.com/rockyluke/ce-requin/edit/main/${shark.file}`;
  const sourceCount = fragment.querySelectorAll(".sources a:not(.markdown)").length;
  fragment.querySelector(".source-label").textContent = sourceCount === 1 ? "Source" : "Sources";
  shark.searchText = normalize([shark.nom, shark.scientifique, ...shark.oceans, ...shark.mers, ...shark.lieux].join(" "));
  card.id = shark.slug;
  return card;
}

function render() {
  const query = normalize(state.query.trim());
  const visible = state.sharks.filter((shark) => (!query || shark.searchText.includes(query)) && (state.ocean === "all" || shark.oceans.includes(state.ocean)) && (state.sea === "all" || shark.mers.includes(state.sea)) && (state.type === "all" || shark.type === state.type));
  elements.grid.replaceChildren(...visible.map((shark) => shark.card));
  elements.grid.hidden = visible.length === 0; elements.empty.hidden = visible.length !== 0;
  elements.grid.setAttribute("aria-busy", "false"); elements.count.textContent = visible.length;
  elements.countLabel.textContent = visible.length === 1 ? "requin" : "requins";
  document.querySelectorAll(".filter-button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.ocean === state.ocean)));
  document.querySelectorAll(".sea-button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.sea === state.sea)));
  document.querySelectorAll(".type-button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.type === state.type)));
}

function renderFilters() {
  const oceans = [...new Set(state.sharks.flatMap((shark) => shark.oceans))].sort((a, b) => a.localeCompare(b, "fr"));
  const options = [{ label: "Tous", value: "all" }, ...oceans.map((ocean) => ({ label: ocean.replace("Océan ", ""), value: ocean }))];
  elements.filters.replaceChildren(...options.map(({ label, value }) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "filter-button";
    button.dataset.ocean = value; button.textContent = label; button.setAttribute("aria-pressed", String(value === state.ocean));
    button.addEventListener("click", () => { state.ocean = value; render(); }); return button;
  }));
  const seas = [...new Set(state.sharks.flatMap((shark) => shark.mers))].sort((a, b) => a.localeCompare(b, "fr"));
  const seaOptions = [{ label: "Toutes", value: "all" }, ...seas.map((sea) => ({ label: sea.replace("Mer ", ""), value: sea }))];
  elements.seaFilters.replaceChildren(...seaOptions.map(({ label, value }) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "filter-button sea-button";
    button.dataset.sea = value; button.textContent = label; button.setAttribute("aria-pressed", String(value === state.sea));
    button.addEventListener("click", () => { state.sea = value; render(); }); return button;
  }));
  const types = [{ label: "Tous", value: "all" }, { label: "Requins réels", value: "reel" }, { label: "Requins fictifs", value: "fictif" }];
  elements.typeFilters.replaceChildren(...types.map(({ label, value }) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "filter-button type-button";
    button.dataset.type = value; button.textContent = label; button.setAttribute("aria-pressed", String(value === state.type));
    button.addEventListener("click", () => { state.type = value; render(); }); return button;
  }));
}

async function loadMarkdown(file) {
  const local = `../${file}`;
  const remote = `https://raw.githubusercontent.com/rockyluke/ce-requin/main/${file}`;
  try { const response = await fetch(local, { cache: "no-store" }); if (response.ok) return response.text(); } catch {}
  const response = await fetch(remote, { cache: "no-store" }); if (!response.ok) throw new Error(file); return response.text();
}

async function init() {
  try {
    const documents = await Promise.all(markdownFiles.map(async (file) => parseMarkdown(await loadMarkdown(file), file)));
    state.sharks = documents.filter(Boolean).sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
    state.sharks.forEach((shark) => { shark.card = createCard(shark); }); renderFilters(); render();
  } catch {
    elements.grid.innerHTML = '<p>Le catalogue n’a pas pu être chargé. <a href="https://github.com/rockyluke/ce-requin">Consulter les fichiers Markdown sur GitHub.</a></p>';
  }
}

elements.form.addEventListener("submit", (event) => event.preventDefault());
elements.input.addEventListener("input", (event) => { state.query = event.target.value; render(); });
elements.reset.addEventListener("click", () => { state.query = ""; state.ocean = "all"; state.sea = "all"; state.type = "all"; elements.input.value = ""; render(); elements.input.focus(); });
document.addEventListener("keydown", (event) => { if (event.key === "/" && document.activeElement !== elements.input) { event.preventDefault(); elements.input.focus(); } });
init();
