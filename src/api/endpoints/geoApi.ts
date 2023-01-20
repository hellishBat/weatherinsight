// Geo API
// GeoDB Key
const API_GEO_KEY = import.meta.env.VITE_API_KEY_GEODB
const GEO_API_HOST = 'wft-geo-db.p.rapidapi.com'
const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

const GEO_API_OPTIONS = {
  headers: {
    'X-RapidAPI-Key': API_GEO_KEY,
    'X-RapidAPI-Host': GEO_API_HOST,
  },
}

export { GEO_API_URL, GEO_API_OPTIONS }
