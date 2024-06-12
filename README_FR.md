<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="React Portfolio" />

&#xa0;

  <!-- <a href="https://virginiegrolleau.com">Site</a> -->
</div>

<h1 align="center">React Portfolio</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/VGrolleau/react-portfolio?label=JavaScript&color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/VGrolleau/react-portfolio?label=Langages&color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/VGrolleau/react-portfolio?label=Taille%20Repo&color=56BEB8">

  <!-- <img alt="License" src="https://img.shields.io/github/license/VGrolleau/react-portfolio?color=56BEB8"> -->

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/VGrolleau/react-portfolio?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/VGrolleau/react-portfolio?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/VGrolleau/react-portfolio?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  React Portfolio 🚀 En construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="./README.md">Version anglaise</a> &#xa0; | &#xa0;
  <a href="#dart-à-propos">À Propos</a> &#xa0; | &#xa0;
  <a href="#sparkles-fonctionnalités">Fonctionnalités</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-prérequis">Prérequis</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-démarrage-du-projet">Démarrage du Projet</a> &#xa0; | &#xa0;
  <a href="#pushpin-scripts-disponibles">Scripts Disponibles</a> &#xa0; | &#xa0;
  <!-- <a href="#memo-license">License</a> &#xa0; | &#xa0; -->
  <a href="https://github.com/VGrolleau" target="_blank">Auteur</a>
</p>

<br>

## :dart: À Propos

Ce projet est un portfolio interactif et multilingue de VGrolleau. Le site présente les compétences, les projets et les coordonnées de VGrolleau. Conçu pour être intuitif et accessible, il permet aux utilisateurs de naviguer facilement et de consulter les informations dans leur langue préférée, soit en français, soit en anglais.

## :sparkles: Fonctionnalités

:heavy_check_mark: **Multilingue :** Le site est disponible en français et en anglais, avec gestion des traductions grâce à `react-i18next`;\
:heavy_check_mark: **Accueil :** Une introduction avec navigation vers les autres sections;\
:heavy_check_mark: **À propos :** Informations personnelles et professionnelles détaillées;\
:heavy_check_mark: **Compétences :** Affichage dynamique des compétences sous forme de nuage de mots;\
:heavy_check_mark: **Projets :** Présentation des projets réalisés avec descriptions et liens;\
:heavy_check_mark: **Contact :** Formulaire de contact avec validation en temps réel et envoi des messages via EmailJS;\
:heavy_check_mark: **Cartographie :** Carte interactive intégrée via `react-leaflet` pour afficher la localisation;

## :rocket: Technologies

Les outils suivants ont été utilisés dans ce projet :

-   **Front-end:** [React](https://fr.legacy.reactjs.org/), [Sass](https://sass-lang.com/), [Styled-components](https://styled-components.com/)
-   **Internationalisation :** [react-i18next](https://react.i18next.com/)
-   **Formulaires et Validation :** [EmailJS](https://www.emailjs.com/), [API FormData](https://developer.mozilla.org/fr/docs/Web/API/FormData)
-   **Cartographie :** [react-leaflet](https://react-leaflet.js.org/), [OpenStreetMap](https://www.openstreetmap.fr/)
-   **Icônes :** [FontAwesome](https://fontawesome.com/)
-   **Animations:** [Animations CSS](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_animations/Using_CSS_animations)

## :white_check_mark: Prérequis

Avant de démarrer :checkered_flag:, vous devez avoir installé [Git](https://git-scm.com) et [Node](https://nodejs.org/en/).

## :checkered_flag: Démarrage du Projet

### :hammer_and_wrench: Installation

1.  Cloner le repo:

```bash
# Cloner ce projet
$ git clone https://github.com/VGrolleau/react-portfolio

# Y accéder
$ cd react-portfolio
```

2.  Installer les dépendances :

```bash
npm install
```

ou

```bash
yarn install
```

### :gear: Configuration

1.  :email: **Configuration de EmailJS :**

-   Créer un compte sur [EmailJS](https://www.emailjs.com/)
-   Configurez votre service, votre modèle de courrier électronique et obtenez votre identifiant utilisateur.
-   Créez un fichier `.env` à la racine du projet et ajoutez vos informations d'identification :

```env
REACT_APP_EMAILJS_CONTACT_SERVICE=votre_service
REACT_APP_EMAILJS_CONTACT_FORM=votre_template
REACT_APP_EMAILJS_PUBLIC_KEY=votre_clé_publique
```

2. :us: **Internationalisation :**

-   Les traductions sont gérées dans des fichiers JSON sous `src/locales` : `fr/translation.json` et `en/translation.json`.
-   Vous pouvez ajouter ou modifier les traductions dans ces fichiers.

### :tada: Démarrer le Projet

1.  Pour démarrer le serveur de développement :

```bash
npm start
```

ou

```bash
yarn start
```

2.  Ouvrez votre navigateur et accédez à « http://localhost:3000 » pour voir le site en action.

## :pushpin: Scripts Disponibles

-   `npm start` / `yarn start` : Démarre le serveur de développement.
-   `npm run build` / `yarn build` : Crée une version de production optimisée.
-   `npm test` / `yarn test` : Exécute les tests.
-   `npm run eject` : Éjecte la configuration de Create React App.

<!-- ## :memo: Licence

Ce projet est sous licence MIT. Pour plus de détails, consultez le fichier [LICENSE](LICENSE.md). -->

<br>

Réalisé avec :heart: par <a href="https://github.com/VGrolleau" target="_blank">Virginie GROLLEAU</a>, inspiré par les sites de <a href="https://bobangajicsm.github.io /portfolio/index.html" target="_blank">Sloba</a> et de <a href="https://itssharl.ee" target="_blank">Sharlee</a>.

<br>

<a href="#top">Revenir en haut</a>
