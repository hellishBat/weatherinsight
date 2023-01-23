// Images API
// Unsplash API Key
const API_UNSPLASH_KEY = import.meta.env.VITE_API_KEY_UNSPLASH

const UNSPLASH_API_URL = `https://api.unsplash.com/search/photos/?client_id=${API_UNSPLASH_KEY}`
const GET_IMG_BY_WORD = `${UNSPLASH_API_URL}&page=1&query=` // <-Query goes here

export { GET_IMG_BY_WORD }
