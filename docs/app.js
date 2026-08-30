const markdownFiles = [
  "current/squalus-acanthias.md",
  "current/mustelus-asterias.md",
  "current/scyliorhinus-stellaris.md",
  "current/scyliorhinus-canicula.md",
  "current/centrophorus-granulosus.md",
  "current/galeus-melastomus.md",
  "extinct/otodus-megalodon.md",
  "current/apristurus-stenseni.md",
  "current/squaliolus-laticaudus.md",
  "current/pristiophorus-nudipinnis.md",
  "current/pristiophorus-cirratus.md",
  "current/pristiophorus-schroederi.md",
  "current/pliotrema-warreni.md",
  "current/pristiophorus-japonicus.md",
  "current/pristiophorus-nancyae.md",
  "current/eucrossorhinus-dasypogon.md",
  "current/eridacnis-radcliffei.md",
  "current/etmopterus-brachyurus.md",
  "current/etmopterus-polli.md",
  "current/etmopterus-perryi.md",
  "current/etmopterus-virens.md",
  "current/dalatias-licha.md",
  "current/euprotomicrus-bispinatus.md",
  "extinct/dunkleosteus-spp.md",
  "extinct/aquilolamna-milarcae.md",
  "extinct/cladoselache-spp.md",
  "extinct/stethacanthus-spp.md",
  "extinct/bandringa-rayi.md",
  "extinct/orthacanthus-spp.md",
  "extinct/hybodus-spp.md",
  "extinct/scapanorhynchus-spp.md",
  "related/chimaeriformes.md",
  "current/squatina-squatina.md",
  "current/carcharodon-carcharias.md",
  "current/sphyrna-mokarran.md",
  "extinct/helicoprion-spp.md",
  "fictional/klaus.md",
  "fictional/lusca.md",
  "fictional/gible.md",
  "fictional/gabite.md",
  "fictional/garchomp.md",
  "fictional/sharpedo.md",
  "fictional/veluza.md",
  "current/rhincodon-typus.md",
  "current/carcharhinus-limbatus.md",
  "current/carcharhinus-leucas.md",
  "current/carcharhinus-perezii.md",
  "current/negaprion-brevirostris.md",
  "current/triaenodon-obesus.md",
  "current/carcharhinus-brachyurus.md",
  "current/carcharhinus-galapagensis.md",
  "current/somniosus-microcephalus.md",
  "current/somniosus-pacificus.md",
  "current/odontaspis-ferox.md",
  "current/megachasma-pelagios.md",
  "current/carcharhinus-plumbeus.md",
  "current/carcharhinus-amblyrhynchos.md",
  "current/hexanchus-griseus.md",
  "current/galeorhinus-galeus.md",
  "current/stegostoma-tigrinum.md",
  "current/chlamydoselachus-anguineus.md",
  "current/negaprion-acutidens.md",
  "current/mitsukurina-owstoni.md",
  "current/sphyrna-zygaena.md",
  "current/sphyrna-lewini.md",
  "current/sphyrna-tiburo.md",
  "current/ginglymostoma-cirratum.md",
  "current/nebrius-ferrugineus.md",
  "current/carcharhinus-longimanus.md",
  "current/prionace-glauca.md",
  "current/cetorhinus-maximus.md",
  "current/carcharhinus-albimarginatus.md",
  "current/carcharhinus-melanopterus.md",
  "current/alopias-vulpinus.md",
  "current/carcharhinus-obscurus.md",
  "current/isurus-oxyrinchus.md",
  "current/lamna-nasus.md",
  "current/carcharias-taurus.md",
  "current/galeocerdo-cuvier.md",
  "current/isistius-brasiliensis.md",
  "current/heterodontus-portusjacksoni.md",
  "current/atelomycterus-marmoratus.md",
  "current/carcharhinus-falciformis.md",
  "current/cephaloscyllium-ventriosum.md",
  "current/lamna-ditropis.md",
  "current/poroderma-africanum.md",
  "current/hemiscyllium-ocellatum.md",
  "current/notorynchus-cepedianus.md",
  "current/triakis-semifasciata.md",
  "current/triakis-scyllium.md",
  "current/carcharhinus-brevipinna.md",
  "current/rhizoprionodon-longurio.md",
  "current/echinorhinus-brucus.md",
  "current/pseudocarcharias-kamoharai.md",
  "current/carcharhinus-acronotus.md",
  "current/alopias-superciliosus.md",
  "current/heterodontus-francisci.md",
  "current/chiloscyllium-plagiosum.md",
  "current/carcharhinus-oxyrhynchus.md",
  "current/haploblepharus-fuscus.md",
  "current/orectolobus-maculatus.md",
  "current/orectolobus-ornatus.md",
];

const lang = document.documentElement.lang === "en" ? "en" : "fr";
const messages = {
  fr: { all: "Tous", allFeminine: "Toutes", current: "Requins actuels", extinct: "Espèces disparues", related: "Groupes apparentés", fictional: "Requins fictifs", shark: "requin", sharks: "requins", game: "Jeu vidéo", movie: "Film", series: "Série", fictionalBadge: "Fictif", extinctBadge: "Disparu", relatedBadge: "Groupe apparenté", source: "Source", sources: "Sources", loadError: "Le catalogue n'a pas pu être chargé.", viewMarkdown: "Consulter les fichiers Markdown sur GitHub." },
  en: { all: "All", allFeminine: "All", current: "Living sharks", extinct: "Extinct species", related: "Related groups", fictional: "Fictional sharks", shark: "shark", sharks: "sharks", game: "Video game", movie: "Movie", series: "TV series", fictionalBadge: "Fictional", extinctBadge: "Extinct", relatedBadge: "Related group", source: "Source", sources: "Sources", loadError: "The catalog could not be loaded.", viewMarkdown: "Browse the Markdown files on GitHub." },
}[lang];
const oceanNames = {
  arctic: { fr: "Océan Arctique", en: "Arctic Ocean" }, atlantic: { fr: "Océan Atlantique", en: "Atlantic Ocean" },
  indian: { fr: "Océan Indien", en: "Indian Ocean" }, pacific: { fr: "Océan Pacifique", en: "Pacific Ocean" },
};
const seaNames = {
  caribbean: { fr: "Mer des Caraïbes", en: "Caribbean Sea" }, greenland: { fr: "Mer du Groenland", en: "Greenland Sea" },
  mediterranean: { fr: "Mer Méditerranée", en: "Mediterranean Sea" }, black: { fr: "Mer Noire", en: "Black Sea" }, red: { fr: "Mer Rouge", en: "Red Sea" },
};
const zoneNames = {
  epipelagic: { fr: "Épipélagique", en: "Epipelagic" }, mesopelagic: { fr: "Mésopélagique", en: "Mesopelagic" },
  bathypelagic: { fr: "Bathypélagique", en: "Bathypelagic" }, abyssopelagic: { fr: "Abyssopélagique", en: "Abyssopelagic" },
  hadalpelagic: { fr: "Hadopélagique", en: "Hadalpelagic" }, "fictional universe": { fr: "Univers fictif", en: "Fictional universe" },
};

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
  arctic: "oceans/arctique.html", atlantic: "oceans/atlantique.html", indian: "oceans/indien.html", pacific: "oceans/pacifique.html",
  caribbean: "mers/caraibes.html", greenland: "mers/groenland.html", mediterranean: "mers/mediterranee.html", black: "mers/noire.html", red: "mers/rouge.html",
};
function renderPlaces(element, shark) {
  const places = [...shark.oceans.map((id) => ({ id, label: oceanNames[id]?.[lang] || id })), ...shark.seas.map((id) => ({ id, label: seaNames[id]?.[lang] || id })), ...shark.locations.map((label) => ({ label }))];
  places.forEach((place, index) => {
    if (index) element.append(document.createTextNode(" · "));
    if (!placePages[place.id]) { element.append(document.createTextNode(place.label)); return; }
    const link = document.createElement("a"); link.href = placePages[place.id]; link.textContent = place.label; link.className = "place-link"; element.append(link);
  });
}
function universeItems(value, category) {
  return list(value).map((item) => { const separator = item.indexOf("::"); return { category, name: separator < 0 ? item : item.slice(0, separator), url: separator < 0 ? "" : item.slice(separator + 2) }; });
}
function renderUniverses(element, shark) {
  const items = [...universeItems(shark.universe_games, messages.game), ...universeItems(shark.universe_movies, messages.movie), ...universeItems(shark.universe_series, messages.series)];
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
    if (zone === "fictional universe") { element.append(document.createTextNode(zoneNames[zone][lang])); return; }
    const link = document.createElement("a");
    link.href = `zones.html#${zone}`;
    link.textContent = zoneNames[zone]?.[lang] || zone;
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
  return { ...data, file, name: data[`name_${lang}`] || data.name_fr, altnames: list(data[`altname_${lang}`] || data.altname_fr), oceans: list(data.oceans), seas: list(data.seas), locations: list(data[`locations_${lang}`] || data.locations_fr), size: data[`size_${lang}`] || data.size_fr, weight: data[`weight_${lang}`] || data.weight_fr, dietItems: list(data[`diet_${lang}`] || data.diet_fr), waterColumn: list(data.water_column), depth: data[`depth_${lang}`] || data.depth_fr };
}

async function copyPlainText(text, button) {
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else {
      const field = document.createElement("textarea");
      field.value = text; field.setAttribute("readonly", ""); field.style.position = "fixed"; field.style.opacity = "0";
      document.body.append(field); field.select(); document.execCommand("copy"); field.remove();
    }
    button.classList.add("copied"); window.setTimeout(() => button.classList.remove("copied"), 1200);
  } catch {}
}

function createCard(shark) {
  const fragment = elements.template.content.cloneNode(true);
  const card = fragment.querySelector(".shark-card");
  const nameButton = fragment.querySelector(".common-name");
  const scientificButton = fragment.querySelector(".scientific-name");
  nameButton.textContent = shark.name;
  const scientificName = shark.type === "fictional" && shark.scientific_name === "Créature fictive" ? (lang === "fr" ? "Créature fictive" : "Fictional creature") : shark.scientific_name;
  scientificButton.textContent = scientificName;
  nameButton.setAttribute("aria-label", `${lang === "fr" ? "Copier" : "Copy"} ${shark.name}`);
  scientificButton.setAttribute("aria-label", `${lang === "fr" ? "Copier" : "Copy"} ${scientificName}`);
  nameButton.dataset.copyFeedback = lang === "fr" ? "Copié" : "Copied";
  scientificButton.dataset.copyFeedback = lang === "fr" ? "Copié" : "Copied";
  nameButton.addEventListener("click", () => copyPlainText(shark.name, nameButton));
  scientificButton.addEventListener("click", () => copyPlainText(scientificName, scientificButton));
  const badge = fragment.querySelector(".status-badge");
  if (shark.type === "fictional") { card.classList.add("fictional"); badge.textContent = messages.fictionalBadge; badge.hidden = false; }
  if (shark.type === "extinct") { card.classList.add("extinct"); badge.textContent = lang === "fr" ? `${messages.extinctBadge} - ${shark.extinct_million_years.replace(".", ",")} millions d'années` : `${messages.extinctBadge} - ${shark.extinct_million_years} million years`; badge.hidden = false; }
  if (shark.type === "related") { card.classList.add("related"); badge.textContent = messages.relatedBadge; badge.hidden = false; }
  renderPlaces(fragment.querySelector(".places"), shark);
  const altnameRow = fragment.querySelector(".altname-row");
  altnameRow.hidden = shark.altnames.length === 0;
  fragment.querySelector(".altnames").textContent = shark.altnames.join(" · ");
  fragment.querySelector(".size").textContent = shark.size;
  fragment.querySelector(".weight").textContent = shark.weight;
  fragment.querySelector(".food").textContent = shark.dietItems.join(" · ");
  renderZoneLinks(fragment.querySelector(".water-column"), shark.waterColumn);
  fragment.querySelector(".depth").textContent = shark.depth;
  const universeRow = fragment.querySelector(".universe-row");
  universeRow.hidden = renderUniverses(fragment.querySelector(".universes"), shark) === 0;
  if (shark.source_doris) fragment.querySelector(".doris").href = shark.source_doris; else fragment.querySelector(".doris").remove();
  if (shark.source_wikipedia_fr) fragment.querySelector(".wikipedia-fr").href = shark.source_wikipedia_fr; else fragment.querySelector(".wikipedia-fr").remove();
  if (shark.source_wikipedia_en) fragment.querySelector(".wikipedia-en").href = shark.source_wikipedia_en; else fragment.querySelector(".wikipedia-en").remove();
  if (shark.source_worms) fragment.querySelector(".worms").href = shark.source_worms; else fragment.querySelector(".worms").remove();
  if (shark.source_inpn) fragment.querySelector(".inpn").href = shark.source_inpn; else fragment.querySelector(".inpn").remove();
  if (shark.source_fishbase) fragment.querySelector(".fishbase").href = shark.source_fishbase; else fragment.querySelector(".fishbase").remove();
  if (shark.source_scientific) fragment.querySelector(".scientific-source").href = shark.source_scientific; else fragment.querySelector(".scientific-source").remove();
  fragment.querySelector(".markdown").href = `https://github.com/rockyluke/ce-requin/edit/main/${shark.file}`;
  const sourceCount = fragment.querySelectorAll(".sources a").length;
  if (!sourceCount) fragment.querySelector(".source-row").remove(); else fragment.querySelector(".source-label").textContent = sourceCount === 1 ? messages.source : messages.sources;
  shark.searchText = normalize([shark.name, ...shark.altnames, shark.scientific_name, shark.genus, shark.family, ...shark.oceans.map((id) => oceanNames[id]?.[lang] || id), ...shark.seas.map((id) => seaNames[id]?.[lang] || id), ...shark.locations].join(" "));
  card.id = shark.slug;
  return card;
}

function render() {
  const query = normalize(state.query.trim());
  const visible = state.sharks.filter((shark) => (!query || shark.searchText.includes(query)) && (state.ocean === "all" || shark.oceans.includes(state.ocean)) && (state.sea === "all" || shark.seas.includes(state.sea)) && (state.type === "all" || shark.type === state.type));
  elements.grid.replaceChildren(...visible.map((shark) => shark.card));
  elements.grid.hidden = visible.length === 0; elements.empty.hidden = visible.length !== 0;
  elements.grid.setAttribute("aria-busy", "false"); elements.count.textContent = visible.length;
  elements.countLabel.textContent = visible.length === 1 ? messages.shark : messages.sharks;
  document.querySelectorAll(".filter-button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.ocean === state.ocean)));
  document.querySelectorAll(".sea-button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.sea === state.sea)));
  document.querySelectorAll(".type-button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.type === state.type)));
}

function renderFilters() {
  const oceans = [...new Set(state.sharks.flatMap((shark) => shark.oceans))].sort((a, b) => a.localeCompare(b, "fr"));
  const options = [{ label: messages.all, value: "all" }, ...oceans.map((ocean) => ({ label: oceanNames[ocean]?.[lang] || ocean, value: ocean }))];
  elements.filters.replaceChildren(...options.map(({ label, value }) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "filter-button";
    button.dataset.ocean = value; button.textContent = label; button.setAttribute("aria-pressed", String(value === state.ocean));
    button.addEventListener("click", () => { state.ocean = value; render(); }); return button;
  }));
  const seas = [...new Set(state.sharks.flatMap((shark) => shark.seas))].sort((a, b) => a.localeCompare(b, "fr"));
  const seaOptions = [{ label: messages.allFeminine, value: "all" }, ...seas.map((sea) => ({ label: seaNames[sea]?.[lang] || sea, value: sea }))];
  elements.seaFilters.replaceChildren(...seaOptions.map(({ label, value }) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "filter-button sea-button";
    button.dataset.sea = value; button.textContent = label; button.setAttribute("aria-pressed", String(value === state.sea));
    button.addEventListener("click", () => { state.sea = value; render(); }); return button;
  }));
  const types = [{ label: messages.all, value: "all" }, { label: messages.current, value: "current" }, { label: messages.extinct, value: "extinct" }, { label: messages.related, value: "related" }, { label: messages.fictional, value: "fictional" }];
  elements.typeFilters.replaceChildren(...types.map(({ label, value }) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "filter-button type-button";
    button.dataset.type = value; button.textContent = label; button.setAttribute("aria-pressed", String(value === state.type));
    button.addEventListener("click", () => { state.type = value; render(); }); return button;
  }));
}

async function loadMarkdown(file) {
  const local = `../../${file}`;
  const remote = `https://raw.githubusercontent.com/rockyluke/ce-requin/main/${file}`;
  try { const response = await fetch(local, { cache: "no-store" }); if (response.ok) return response.text(); } catch {}
  const response = await fetch(remote, { cache: "no-store" }); if (!response.ok) throw new Error(file); return response.text();
}

async function init() {
  try {
    const documents = await Promise.all(markdownFiles.map(async (file) => parseMarkdown(await loadMarkdown(file), file)));
    state.sharks = documents.filter(Boolean).sort((a, b) => a.name.localeCompare(b.name, lang));
    state.sharks.forEach((shark) => { shark.card = createCard(shark); }); renderFilters(); render();
  } catch {
    elements.grid.innerHTML = `<p>${messages.loadError} <a href="https://github.com/rockyluke/ce-requin">${messages.viewMarkdown}</a></p>`;
  }
}

try { localStorage.setItem("ce-requin-language", lang); } catch {}
elements.form.addEventListener("submit", (event) => event.preventDefault());
elements.input.addEventListener("input", (event) => { state.query = event.target.value; render(); });
elements.reset.addEventListener("click", () => { state.query = ""; state.ocean = "all"; state.sea = "all"; state.type = "all"; elements.input.value = ""; render(); elements.input.focus(); });
document.addEventListener("keydown", (event) => { if (event.key === "/" && document.activeElement !== elements.input) { event.preventDefault(); elements.input.focus(); } });
init();
