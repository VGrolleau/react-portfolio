<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="React Portfolio" />

&#xa0;

  <!-- <a href="https://virginiegrolleau.com">Site</a> -->
</div>

<h1 align="center">React Portfolio</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/VGrolleau/react-portfolio?label=JavaScript&color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/VGrolleau/react-portfolio?label=Languages&color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/VGrolleau/react-portfolio?label=Repo%20Size&color=56BEB8">

  <!-- <img alt="License" src="https://img.shields.io/github/license/VGrolleau/react-portfolio?color=56BEB8"> -->

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/VGrolleau/react-portfolio?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/VGrolleau/react-portfolio?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/VGrolleau/react-portfolio?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  React Portfolio 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="./README_FR.md">French version</a> &#xa0; | &#xa0;
  <a href="#dart-about">About</a> &#xa0; | &#xa0;
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-getting-started">Getting started</a> &#xa0; | &#xa0;
  <a href="#pushpin-available-scripts">Available Scripts</a> &#xa0; | &#xa0;
  <!-- <a href="#memo-license">License</a> &#xa0; | &#xa0; -->
  <a href="https://github.com/VGrolleau" target="_blank">Author</a>
</p>

<br>

## :dart: About

This project is an interactive and multilingual portfolio of VGrolleau. The website showcases VGrolleau's skills, projects, and contact information. Designed to be intuitive and accessible, it allows users to easily navigate and view information in their preferred language, either French or English.

## :sparkles: Features

:heavy_check_mark: **Multilingual:** The site is available in French and English, with translations managed using `react-i18next`;\
:heavy_check_mark: **Home:** An introduction with navigation to other sections;\
:heavy_check_mark: **About:** Detailed personal and professional information;\
:heavy_check_mark: **Skills:** Dynamic display of skills in a word cloud format;\
:heavy_check_mark: **Projects:** Presentation of completed projects with descriptions and links;\
:heavy_check_mark: **Contact:** Contact form with real-time validation and message sending via EmailJS;\
:heavy_check_mark: **Map:** Interactive map integrated via `react-leaflet` to show location;

## :rocket: Technologies

The following tools were used in this project:

-   **Front-end:** [React](https://react.dev/), [Sass](https://sass-lang.com/), [Styled-components](https://styled-components.com/)
-   **Internationalization:** [react-i18next](https://react.i18next.com/)
-   **Forms and Validation:** [EmailJS](https://www.emailjs.com/), [FormData API](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
-   **Mapping:** [react-leaflet](https://react-leaflet.js.org/), [OpenStreetMap](https://www.openstreetmap.org/#map=6/46.449/2.210)
-   **Icons:** [FontAwesome](https://fontawesome.com/)
-   **Animations:** [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Getting Started

### :hammer_and_wrench: Installation

1.  Clone the repository:

```bash
# Clone this project
$ git clone https://github.com/VGrolleau/react-portfolio

# Access
$ cd react-portfolio
```

2.  Install the dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### :gear: Configuration

1.  :email: **EmailJS Configuration:**

-   Create an account on [EmailJS](https://www.emailjs.com/)
-   Set up your service, email template, and obtain your user ID.
-   Create a `.env` file at the root of the project and add your credentials:

```env
EMAILJS_USERID=your_emailjs_userid
EMAILJS_TEMPLATEID=your_emailjs_templateid
EMAILJS_SERVICEID=your_emailjs_serviceid
```

2. :fr: **Internationalization:**

-   Translations are managed in JSON files under `src/locales`: `fr/translation.json` and `en/translation.json`.
-   You can add or modify translations in these files.

### :tada: Starting the Project

1.  To start the development server:

```bash
npm start
```

or

```bash
yarn start
```

2.  Open your browser and go to `http://localhost:3000` to see the site in action.

## :pushpin: Available Scripts

-   `npm start` / `yarn start`: Starts the development server.
-   `npm run build` / `yarn build`: Creates an optimized production build.
-   `npm test` / `yarn test`: Runs the tests.
-   `npm run eject`: Ejects the Create React App configuration.

<!-- ## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file. -->

<br>

Made with :heart: by <a href="https://github.com/VGrolleau" target="_blank">Virginie GROLLEAU</a>, inspired by <a href="https://bobangajicsm.github.io/portfolio/index.html" target="_blank">Sloba</a> and <a href="https://itssharl.ee" target="_blank">Sharlee</a> sites.

<br>

<a href="#top">Back to top</a>
