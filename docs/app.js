const markdownFiles = [
  "CENTROPHORE.md",
  "CHIEN-ESPAGNOL.md",
  "MEGALODON.md",
  "REQUIN-CHAT-FANTOME-DU-PANAMA.md",
  "REQUIN-PYGMEE.md",
  "REQUIN-SCIE-A-NEZ-COURT.md",
  "REQUIN-SCIE-COMMUN.md",
  "REQUIN-SCIE-DES-BAHAMAS.md",
  "REQUIN-SCIE-FLUTIAN.md",
  "REQUIN-SCIE-JAPONAIS.md",
  "REQUIN-SCIE-NAIN-D-AFRIQUE.md",
  "REQUIN-TAPIS-BARBICHU.md",
  "ROUSSETTE-A-RUBANS.md",
  "SAGRE-A-QUEUE-COURTE.md",
  "SAGRE-AFRICAIN.md",
  "SAGRE-ELFE.md",
  "SAGRE-LUISANT.md",
  "SQUALE-LICHE.md",
  "SQUALELET-ROCHEUX.md",
  "DUNKLEOSTEUS.md",
  "ANGE-DE-MER-COMMUN.md",
  "GRAND-REQUIN-BLANC.md",
  "GRAND-REQUIN-MARTEAU.md",
  "HELICOPRION.md",
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
  "REQUIN-LUTIN.md",
  "REQUIN-MARTEAU-COMMUN.md",
  "REQUIN-MARTEAU-HALICORNE.md",
  "REQUIN-BONNET.md",
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
const placePages = {
  "Océan Arctique": "oceans/arctique.html", "Océan Atlantique": "oceans/atlantique.html",
  "Océan Indien": "oceans/indien.html", "Océan Pacifique": "oceans/pacifique.html",
  "Mer des Caraïbes": "mers/caraibes.html", "Mer du Groenland": "mers/groenland.html",
  "Mer Méditerranée": "mers/mediterranee.html", "Mer Noire": "mers/noire.html", "Mer Rouge": "mers/rouge.html",
};
function renderPlaces(element, shark) {
  [...shark.oceans, ...shark.mers, ...shark.lieux].forEach((place, index) => {
    if (index) element.append(document.createTextNode(" · "));
    if (!placePages[place]) { element.append(document.createTextNode(place)); return; }
    const link = document.createElement("a"); link.href = placePages[place]; link.textContent = place; link.className = "place-link"; element.append(link);
  });
}
function universeItems(value, category) {
  return list(value).map((item) => { const separator = item.indexOf("::"); return { category, name: separator < 0 ? item : item.slice(0, separator), url: separator < 0 ? "" : item.slice(separator + 2) }; });
}
function renderUniverses(element, shark) {
  const items = [...universeItems(shark.univers_jeux, "Jeu vidéo"), ...universeItems(shark.univers_films, "Film"), ...universeItems(shark.univers_series, "Série")];
  items.forEach((item, index) => {
    if (index) element.append(document.createTextNode(" · "));
    const label = `${item.category} : ${item.name}`;
    if (!item.url) { element.append(document.createTextNode(label)); return; }
    const link = document.createElement("a"); link.href = item.url; link.target = "_blank"; link.rel = "noreferrer"; link.textContent = `${label} ↗`; element.append(link);
  });
  return items.length;
}
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
  const badge = fragment.querySelector(".status-badge");
  if (shark.type === "fictif") { card.classList.add("fictional"); badge.textContent = "Fictif"; badge.hidden = false; }
  if (shark.type === "disparu") { card.classList.add("extinct"); badge.textContent = `Disparu${shark.periode ? ` · ${shark.periode}` : ""}`; badge.hidden = false; }
  renderPlaces(fragment.querySelector(".places"), shark);
  fragment.querySelector(".size").textContent = shark.taille;
  fragment.querySelector(".weight").textContent = shark.poids;
  fragment.querySelector(".food").textContent = shark.nourriture.join(" · ");
  renderZoneLinks(fragment.querySelector(".water-column"), shark.colonne);
  fragment.querySelector(".depth").textContent = shark.profondeur;
  const universeRow = fragment.querySelector(".universe-row");
  universeRow.hidden = renderUniverses(fragment.querySelector(".universes"), shark) === 0;
  fragment.querySelector(".doris").href = shark.source_doris;
  fragment.querySelector(".wikipedia").href = shark.source_wikipedia;
  if (shark.source_doris) fragment.querySelector(".doris").href = shark.source_doris; else fragment.querySelector(".doris").remove();
  if (shark.source_wikipedia) fragment.querySelector(".wikipedia").href = shark.source_wikipedia; else fragment.querySelector(".wikipedia").remove();
  if (shark.source_worms) fragment.querySelector(".worms").href = shark.source_worms; else fragment.querySelector(".worms").remove();
  if (shark.source_inpn) fragment.querySelector(".inpn").href = shark.source_inpn; else fragment.querySelector(".inpn").remove();
  if (shark.source_fishbase) fragment.querySelector(".fishbase").href = shark.source_fishbase; else fragment.querySelector(".fishbase").remove();
  if (shark.source_scientifique) fragment.querySelector(".scientific-source").href = shark.source_scientifique; else fragment.querySelector(".scientific-source").remove();
  fragment.querySelector(".markdown").href = `https://github.com/rockyluke/ce-requin/edit/main/${shark.file}`;
  const sourceCount = fragment.querySelectorAll(".sources a").length;
  if (!sourceCount) fragment.querySelector(".source-row").remove(); else fragment.querySelector(".source-label").textContent = sourceCount === 1 ? "Source" : "Sources";
  shark.searchText = normalize([shark.nom, shark.alias, shark.scientifique, ...shark.oceans, ...shark.mers, ...shark.lieux].join(" "));
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
  const types = [{ label: "Tous", value: "all" }, { label: "Requins actuels", value: "reel" }, { label: "Espèces disparues", value: "disparu" }, { label: "Requins fictifs", value: "fictif" }];
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
    elements.grid.innerHTML = '<p>Le catalogue n\'a pas pu être chargé. <a href="https://github.com/rockyluke/ce-requin">Consulter les fichiers Markdown sur GitHub.</a></p>';
  }
}

elements.form.addEventListener("submit", (event) => event.preventDefault());
elements.input.addEventListener("input", (event) => { state.query = event.target.value; render(); });
elements.reset.addEventListener("click", () => { state.query = ""; state.ocean = "all"; state.sea = "all"; state.type = "all"; elements.input.value = ""; render(); elements.input.focus(); });
document.addEventListener("keydown", (event) => { if (event.key === "/" && document.activeElement !== elements.input) { event.preventDefault(); elements.input.focus(); } });
init();
