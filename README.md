# WeatherInsight - A React Weather App

![Imgur](https://i.imgur.com/cKxqUlO.png)

## Features

- Weather search by location and city name;
- For the main weather card a background image is automatically applied with the photo found for the given location on unsplash.com (the image is selected randomly from the first 10 results for the given location);
- Dark Mode Included.

## Technologies Used

- React + TypeScript;
- Styled with Tailwind CSS;
- [React Query](https://www.npmjs.com/package/react-query) for asynchronous state management
- [Axios](https://www.npmjs.com/package/axios) for fetching from API;
- [Moment.js](https://www.npmjs.com/package/moment) to handle time formats;
- APIs:
  - [OpenWeather](https://openweathermap.org/)
  - [Unsplash](https://unsplash.com/developers/)
  - [IPWhoIs](https://ipwhois.io/)

## Credits (In order of appearance)

- Libraries: [React Toggle Dark Mode](https://www.npmjs.com/package/react-toggle-dark-mode), [React Country Flag](https://www.npmjs.com/package/react-country-flag), [Swiper](https://www.npmjs.com/package/swiper)
- Icons: [Material Icons](https://fonts.google.com/icons)
- Ukrainian Heart icon by [Linector](https://www.iconfinder.com/LINECTOR)

## Live Demo

[Live Demo](https://weather-insight.vercel.app/)

## Local Usage (On your machine)

### Pre-requisites (for local usage)

- Clone this repo;
- You need to get API keys from [Openweather](https://openweathermap.org/) and [Unsplash](https://unsplash.com/developers/);
- Create .env file in the root folder with corresponding variables:
  - VITE_API_KEY_APPID=your-api-key
  - VITE_API_KEY_UNSPLASH=your-api-key

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
