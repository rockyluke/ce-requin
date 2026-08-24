"use client";

import { useMemo, useState } from "react";
import type { Requin } from "../lib/catalogue";

function normaliser(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function Catalogue({ requins }: { requins: Requin[] }) {
  const [recherche, setRecherche] = useState("");
  const resultats = useMemo(() => {
    const terme = normaliser(recherche.trim());
    if (!terme) return requins;
    return requins.filter((requin) => normaliser(`${requin.nom} ${requin.scientifique}`).includes(terme));
  }, [recherche, requins]);

  return (
    <>
      <div className="search-wrap">
        <label htmlFor="recherche">Rechercher dans le catalogue</label>
        <div className="search-line">
          <span aria-hidden="true">⌕</span>
          <input id="recherche" type="search" value={recherche} onChange={(event) => setRecherche(event.target.value)} placeholder="Nom français ou scientifique…" autoComplete="off" />
          <output>{resultats.length} {resultats.length > 1 ? "requins" : "requin"}</output>
        </div>
      </div>
      <div className="grid">
        {resultats.map((requin, index) => (
          <article className="card" key={requin.slug}>
            <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="silhouette" aria-hidden="true"><span /></div>
            <p className="latin">{requin.scientifique}</p>
            <h3>{requin.nom}</h3>
            <div className="facts"><span>{requin.taille}</span><span>{requin.oceans[0]}</span></div>
          </article>
        ))}
      </div>
      {resultats.length === 0 && <p className="empty">Aucun requin ne correspond à « {recherche} ».</p>}
    </>
  );
}
