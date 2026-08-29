# CE REQUIN ?

Le catalogue français des requins, disponible sur [ce-requin.fr](https://ce-requin.fr/).

Les fiches Markdown sont conservées directement à la racine du dépôt. Le site
statique destiné à GitHub Pages se trouve dans [`docs/`](docs/).

## Catalogue

Le dépôt contient 61 requins actuels, quatre poissons préhistoriques disparus et
deux personnages fictifs de *Dave the Diver*. Chaque fiche utilise un nom de
fichier scientifique en minuscules, au format `genre-espece.md`. Les apparitions
dans les jeux vidéo, films et séries sont présentées dans une section distincte
des sources scientifiques.

Les fiches réelles utilisent WoRMS comme référence taxonomique, l'INPN et
DORIS comme références françaises lorsqu'une fiche correspondante est
disponible, ainsi que FishBase comme source scientifique complémentaire. Les
articles Wikipédia en français et en anglais sont référencés séparément afin de
faciliter la vérification et l'approfondissement de chaque fiche.

Le marsouin commun proposé dans la liste source n'est pas intégré : il s'agit
d'un mammifère marin et non d'un requin.

Une nouvelle espèce se crée à partir de [`MODELE.md`](MODELE.md). Son nom de
fichier doit ensuite être ajouté à `markdownFiles` dans [`docs/app.js`](docs/app.js).
