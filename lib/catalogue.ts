export type Requin = {
  nom: string;
  scientifique: string;
  slug: string;
  oceans: string[];
  mers: string[];
  lieux: string[];
  taille: string;
  poids: string;
  nourriture: string[];
  colonne_eau: string[];
  profondeur: string;
  source_doris: string;
  source_wikipedia: string;
};

const fichiers = import.meta.glob<string>("../content/requins/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function liste(value = "") {
  return value.split("|").map((item) => item.trim()).filter(Boolean);
}

function lireMarkdown(source: string): Requin | null {
  const bloc = source.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!bloc) return null;
  const data = Object.fromEntries(
    bloc[1].split("\n").map((line) => {
      const index = line.indexOf(":");
      return index < 0 ? [line, ""] : [line.slice(0, index).trim(), line.slice(index + 1).trim()];
    }),
  );
  if (!data.slug || data.slug === "nom-francais") return null;
  return {
    nom: data.nom,
    scientifique: data.scientifique,
    slug: data.slug,
    oceans: liste(data.oceans),
    mers: liste(data.mers),
    lieux: liste(data.lieux),
    taille: data.taille,
    poids: data.poids,
    nourriture: liste(data.nourriture),
    colonne_eau: liste(data.colonne_eau),
    profondeur: data.profondeur,
    source_doris: data.source_doris,
    source_wikipedia: data.source_wikipedia,
  };
}

export const requins = Object.values(fichiers)
  .map(lireMarkdown)
  .filter((requin): requin is Requin => requin !== null)
  .sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
