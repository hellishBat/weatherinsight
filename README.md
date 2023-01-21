# WeatherInsight - A React Weather App

![Imgur](https://i.imgur.com/QJpa5nk.png)

## Features

- Weather search by location: when the page load or by clicking on the location button;
- Search the weather by city name: select a city from the autofill list, the list includes cities with a population over 250,000;
- For the main weather card a background image is automatically applied with the photo found for the given location on unsplash.com (the image is selected randomly from the first 10 results for the given location if there are not enough results, search by weather description, e.g. sunny or cloudy);
- Dark Mode Included.

## Technologies Used

- React + TypeScript;
- [React Query](https://www.npmjs.com/package/react-query) for asynchronous state management
- [Axios](https://www.npmjs.com/package/axios) for fetching from API;
- Styled with [Tailwind CSS](https://www.npmjs.com/package/tailwindcss);
- APIs:
  - [OpenWeather](https://openweathermap.org/)
  - [Unsplash](https://unsplash.com/developers/)
  - [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities/)
  - [IPWHOIS.io](https://ipwhois.io/)

## Credits (In order of appearance)

- Libraries: [React Toggle Dark Mode](https://www.npmjs.com/package/react-toggle-dark-mode), [React Select](https://www.npmjs.com/package/react-select), [React Select Async Paginate](https://www.npmjs.com/package/react-select-async-paginate), [Moment.js](https://www.npmjs.com/package/moment), [React Country Flag](https://www.npmjs.com/package/react-country-flag), [Swiper](https://www.npmjs.com/package/swiper)
- Icons: [Material Icons](https://fonts.google.com/icons)
- Ukrainian Heart icon by [Linector](https://www.iconfinder.com/LINECTOR)

## Live Demo

[Live Demo](https://weatherinsight.vercel.app/)

## Local Usage (On your machine)

### Pre-requisites (for local usage)

- Clone this repo;
- You need to get API keys from [Openweather](https://openweathermap.org/) and [Unsplash](https://unsplash.com/developers/);
- Create .env file in the root folder with corresponding variables:
  - `VITE_API_KEY_GEODB`=your-api-key
  - `VITE_API_KEY_OPENWEATHER`=your-api-key
  - `VITE_API_KEY_UNSPLASH`=your-api-key

## This website made with [Vite⚡ React TS Boilerplate (Tailwind CSS Edition)](https://github.com/valentine-samoylov/vite-react-ts-tw-bp)

## Features

- ⚛️ Supports React + TypeScript
- 🔥 React Refresh (HMR) (**Dev mode**)
- 🖌️ Supports styling with
  - Tailwind CSS
  - SASS/SCSS preprocessor
  - PostCSS preprocessor
- 🗜️ Minification of CSS/JS files (**Prod mode**)
- 🖼 Optimization of images with ImageTools (**Prod mode**)
  - 🔁 Images can be converted to WEBP or AVIF formats (**Prod mode**)
- ⭐ SVGR converts SVG into React components and inserts them as inline SVG into HTML.
- 🧰 ESlint, Stylelint and Prettier
- ⚙️ Support of environment variables (aka dotenv, built in Vite, `VITE_` prefix is required.)

## Scripts

To install dependencies:

```sh
yarn install
```

Start development mode:

```sh
yarn run start
```

Create production build:

```sh
yarn run build
```

Lint scripts:

```sh
yarn run lint:scripts
```

Lint styles:

```sh
yarn run lint:styles
```

Format code with Prettier:

```sh
yarn run lint:format
```
