import { Catalogue } from "./Catalogue";
import { requins } from "../lib/catalogue";

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="/" aria-label="Ce requin — accueil"><span>CE</span> REQUIN</a>
        <nav aria-label="Navigation principale"><a href="#requins">Le catalogue</a></nav>
      </header>
      <section className="hero">
        <p className="eyebrow">Le catalogue des squales, en français</p>
        <h1>Quel est<br /><em>ce requin&nbsp;?</em></h1>
        <p className="intro">Un catalogue simple pour identifier les requins et comparer leur taille, leur poids, leur alimentation et leur habitat.</p>
        <a className="cta" href="#requins">Explorer les espèces <span>↓</span></a>
        <div className="fin" aria-hidden="true" />
      </section>
      <section className="catalogue" id="requins">
        <div className="section-head"><div><p className="eyebrow">Première sélection</p><h2>Les requins</h2></div><p>Un catalogue factuel en français, organisé pour retrouver et comparer rapidement les espèces.</p></div>
        <Catalogue requins={requins} />
      </section>
      <footer><p>Le catalogue français des requins © 2026 Antoine &amp; Marika MILLET-HADDAD</p></footer>
    </main>
  );
}
