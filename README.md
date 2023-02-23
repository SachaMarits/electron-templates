# Electron avec React
## Introduction et tutoriels

Template réalisé avec [ce tutoriel sur Medium](https://medium.com/folkdevelopers/the-ultimate-guide-to-electron-with-react-8df8d73f4c97).<br/>
Qui reprends également pas mal d'informations sur comment utiliser les fonctions natives d'electron (windows) donc par exemple ouvrir une fenêtre flottante, ouvrir un fichier, etc

Ressources intéressantes en plus:
- [Tutoriel similaire avec celui de Medium avec d'autres informations, surtout pour la différentiation du fonctionnement dev et prod](https://www.section.io/engineering-education/desktop-application-with-react/)
- [Tutoriel le plus récent](https://blog.codemagic.io/building-electron-desktop-apps-with-react/)
- [Tutoriel notamment sur le déploiement](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3)
- [Boilerplate pour Vite incluant Electron Builder](https://github.com/cawa-93/vite-electron-builder)

## Développement

Pour un premier lancement on utilise `npm i` pour installer les packages du projet.

Ensuite pour lancer le projet on peut juste lancer `npm run start`. <br/>
Ca va lancer le site react en port 3333 (afin d'éviter le port 3000 potentielement utilisé) sans pour autant le lancer dans un navigateur puis ensuite le charger dans une fenêtre principale via electron.

La fenêtre sera maximisée et ouvrira directement les DevTools. <br/>
Le comportement des fenêtres est décrit dans le fichier `public/electron.js`:

## Déploiement

Pour déployer l'application il faut tout d'abord build le site React et ensuite build l'exe ou l'installeur. <br/>
Pour se faire un script permet de faire les deux actions d'un coup: `npm run build`.
Le résultat se trouvera dans le dossier dist.