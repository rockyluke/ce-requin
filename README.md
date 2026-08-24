# CE REQUIN ?

Le catalogue français des requins, disponible sur [ce-requin.fr](https://ce-requin.fr/).

Les fiches Markdown sont conservées directement à la racine du dépôt. Le site
statique destiné à GitHub Pages se trouve dans [`docs/`](docs/).

## Catalogue

Le dépôt contient 38 requins actuels, deux poissons préhistoriques disparus et
deux personnages fictifs de *Dave the Diver*. Chaque fichier `.md` en lettres
capitales correspond à une fiche. Les espèces présentes dans le jeu comportent
un lien direct vers leur page *Dave the Diver*.

Les fiches réelles utilisent WoRMS comme référence taxonomique et l'INPN
comme référence française lorsqu'une fiche correspondante est disponible.

Le marsouin commun proposé dans la liste source n'est pas intégré : il s'agit
d'un mammifère marin et non d'un requin.

Une nouvelle espèce se crée à partir de [`MODELE.md`](MODELE.md). Son nom de
fichier doit ensuite être ajouté à `markdownFiles` dans [`docs/app.js`](docs/app.js).
