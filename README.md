# CE REQUIN ?

Le catalogue bilingue des requins, disponible en
[français](https://ce-requin.fr/fr/) et en [anglais](https://ce-requin.fr/en/).

Les fiches Markdown sont rangées par type dans les dossiers [`current/`](current/),
[`extinct/`](extinct/), [`fictional/`](fictional/) et [`related/`](related/). Le
site statique destiné à GitHub Pages se trouve dans [`docs/`](docs/).

## Catalogue

Le dépôt contient 84 requins actuels, dix poissons préhistoriques disparus,
un groupe apparenté et sept personnages fictifs issus de *Dave the Diver* et
de *Pokémon*. Chaque
fiche utilise un nom de fichier scientifique en minuscules, au format
`genre-espece.md` lorsque ce nom existe. Les apparitions
dans les jeux vidéo, films et séries sont présentées dans une section distincte
des sources scientifiques.

Les fiches réelles utilisent WoRMS comme référence taxonomique, l'INPN et
DORIS comme références françaises lorsqu'une fiche correspondante est
disponible, ainsi que FishBase comme source scientifique complémentaire. Les
articles Wikipédia en français et en anglais sont référencés séparément afin de
faciliter la vérification et l'approfondissement de chaque fiche.

Les clés des fiches sont en anglais. Les champs éditoriaux portent un suffixe
`_fr` ou `_en`, tandis que la taxonomie et les sources restent communes. Les
champs `altname_fr` et `altname_en` rassemblent les noms alternatifs séparés
par `|`. Les océans, mers et zones utilisent des identifiants neutres traduits
par le site. Pour une espèce disparue, `type` vaut `extinct` et
`extinct_million_years` contient un nombre affiché sous la forme
« Disparu - N millions d'années ».

Le marsouin commun proposé dans la liste source n'est pas intégré : il s'agit
d'un mammifère marin et non d'un requin.

Une nouvelle espèce se crée à partir de [`template.md`](template.md). Sa fiche doit
être placée dans le dossier correspondant à son champ `type`, puis son chemin
doit être ajouté à `markdownFiles` dans [`docs/app.js`](docs/app.js).
