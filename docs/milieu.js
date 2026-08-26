const milieux = {
  "ocean-arctique": {
    nom: "Océan Arctique", type: "Océan",
    description: "Centré autour du pôle Nord, il est bordé par l'Amérique du Nord, l'Asie et l'Europe. C'est le plus petit des océans et une grande partie de sa surface est couverte par la banquise selon les saisons.",
    facts: [["5,2 millions de km²", "Superficie de l'océan proprement dit"], ["1 038 m", "Profondeur moyenne"], ["Environ 4 000 m", "Profondeur maximale"]],
    wiki: "https://fr.wikipedia.org/wiki/Oc%C3%A9an_Arctique", map: "https://upload.wikimedia.org/wikipedia/commons/d/de/LocationArcticOcean.png", mapPage: "https://commons.wikimedia.org/wiki/File:LocationArcticOcean.png",
  },
  "ocean-atlantique": {
    nom: "Océan Atlantique", type: "Océan",
    description: "Situé entre les Amériques à l'ouest et l'Europe et l'Afrique à l'est, l'Atlantique est le deuxième plus vaste océan de la planète.",
    facts: [["82,4 millions de km²", "Superficie"], ["3 332 m", "Profondeur moyenne"], ["8 376 m", "Profondeur maximale"], ["34 à 37 g/L", "Salinité"]],
    wiki: "https://fr.wikipedia.org/wiki/Oc%C3%A9an_Atlantique", map: "https://upload.wikimedia.org/wikipedia/commons/6/65/Oc%C3%A9an_Atlantique.png", mapPage: "https://commons.wikimedia.org/wiki/File:Oc%C3%A9an_Atlantique.png",
  },
  "ocean-indien": {
    nom: "Océan Indien", type: "Océan",
    description: "Il s'étend entre l'Afrique, l'Asie, l'Australie et l'Antarctique. Il représente environ un cinquième de la surface océanique mondiale.",
    facts: [["70,56 millions de km²", "Superficie"], ["4 210 m", "Profondeur moyenne"], ["7 450 m", "Profondeur maximale"], ["34,5 g/L", "Salinité"]],
    wiki: "https://fr.wikipedia.org/wiki/Oc%C3%A9an_Indien", map: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Oc%C3%A9an_Indien.png", mapPage: "https://commons.wikimedia.org/wiki/File:Oc%C3%A9an_Indien.png",
  },
  "ocean-pacifique": {
    nom: "Océan Pacifique", type: "Océan",
    description: "Entre les Amériques et l'Asie-Océanie, le Pacifique est le plus grand et le plus profond océan de la planète.",
    facts: [["165,25 millions de km²", "Superficie"], ["4 300 m", "Profondeur moyenne"], ["10 984 m", "Profondeur maximale"]],
    wiki: "https://fr.wikipedia.org/wiki/Oc%C3%A9an_Pacifique", map: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Oc%C3%A9an_Pacifique_d%C3%A9tour%C3%A9e.png", mapPage: "https://commons.wikimedia.org/wiki/File:Oc%C3%A9an_Pacifique_d%C3%A9tour%C3%A9e.png",
  },
  "mer-caraibes": {
    nom: "Mer des Caraïbes", type: "Mer",
    description: "Cette mer bordière de l'Atlantique se trouve à l'est de l'Amérique centrale, au nord de l'Amérique du Sud et au sud des Grandes Antilles.",
    facts: [["2,64 millions de km²", "Superficie"], ["3 020 km", "Longueur"], ["7 686 m", "Profondeur maximale"]],
    wiki: "https://fr.wikipedia.org/wiki/Mer_des_Cara%C3%AFbes", map: "https://upload.wikimedia.org/wikipedia/commons/9/91/La2-demis-caribbean.png", mapPage: "https://commons.wikimedia.org/wiki/File:La2-demis-caribbean.png",
  },
  "mer-groenland": {
    nom: "Mer du Groenland", type: "Mer",
    description: "Mer bordière de l'océan Arctique, elle se situe entre la côte orientale du Groenland, l'Islande, Jan Mayen et le Spitzberg.",
    facts: [["1,205 million de km²", "Superficie"], ["1 450 m", "Profondeur moyenne"], ["4 800 m", "Profondeur maximale"]],
    wiki: "https://fr.wikipedia.org/wiki/Mer_du_Groenland", map: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Fram_Strait_map.png", mapPage: "https://commons.wikimedia.org/wiki/File:Fram_Strait_map.png",
  },
  "mer-mediterranee": {
    nom: "Mer Méditerranée", type: "Mer",
    description: "Presque entièrement fermée, elle se trouve entre l'Europe, l'Afrique et l'Asie occidentale. Le détroit de Gibraltar la relie à l'océan Atlantique.",
    facts: [["2,51 millions de km²", "Superficie"], ["1 500 m", "Profondeur moyenne"], ["5 369 m", "Profondeur maximale"], ["38 g/L", "Salinité"]],
    wiki: "https://fr.wikipedia.org/wiki/Mer_M%C3%A9diterran%C3%A9e", map: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Carte_Mediterranee_03.jpg", mapPage: "https://commons.wikimedia.org/wiki/File:Carte_Mediterranee_03.jpg",
  },
  "mer-noire": {
    nom: "Mer Noire", type: "Mer",
    description: "Située entre l'Europe, le Caucase et l'Anatolie, elle communique avec la Méditerranée par le Bosphore, la mer de Marmara et les Dardanelles. Ses eaux profondes sont pauvres en oxygène.",
    facts: [["Environ 436 000 km²", "Superficie"], ["2 206 m", "Profondeur maximale"]],
    wiki: "https://fr.wikipedia.org/wiki/Mer_Noire", map: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Mer_Noire_%28carte%29.png", mapPage: "https://commons.wikimedia.org/wiki/File:Mer_Noire_(carte).png",
  },
  "mer-rouge": {
    nom: "Mer Rouge", type: "Mer",
    description: "Mer bordière de l'océan Indien, elle sépare l'Afrique du Nord de l'Asie de l'Ouest. Le canal de Suez la relie à la Méditerranée.",
    facts: [["450 000 km²", "Superficie"], ["500 m", "Profondeur moyenne"], ["Environ 2 500 m", "Profondeur maximale"], ["42 USP", "Salinité"]],
    wiki: "https://fr.wikipedia.org/wiki/Mer_Rouge", map: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Red_Sea_topographic_map-fr.svg", mapPage: "https://commons.wikimedia.org/wiki/File:Red_Sea_topographic_map-fr.svg",
  },
};

const milieu = milieux[document.body.dataset.milieu];
if (milieu) {
  document.title = `${milieu.nom} - Ce requin`;
  document.querySelector(".milieu-kind").textContent = milieu.type;
  document.querySelector("h1").textContent = milieu.nom;
  document.querySelector(".milieu-copy").textContent = milieu.description;
  document.querySelector(".milieu-facts").replaceChildren(...milieu.facts.map(([value, label]) => {
    const item = document.createElement("div"); item.className = "milieu-fact";
    const strong = document.createElement("strong"); strong.textContent = value;
    const span = document.createElement("span"); span.textContent = label;
    item.append(strong, span); return item;
  }));
  const image = document.querySelector(".milieu-map img"); image.src = milieu.map; image.alt = `Carte de situation de ${milieu.nom}`;
  const mapLink = document.querySelector(".map-source"); mapLink.href = milieu.mapPage;
  const wikiLink = document.querySelector(".wiki-source"); wikiLink.href = milieu.wiki;
}
