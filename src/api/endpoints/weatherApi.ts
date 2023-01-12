// Weather API
// Open Weather API Key
const WEATHER_API_APPID = import.meta.env.VITE_API_KEY_APPID

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const SEARCH_BY_LOCATION = `${WEATHER_API_URL}?appid=${WEATHER_API_APPID}` // &lat={lat}&lon={lon}
const GET_NEXT_DAYS_HOURS = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&appid=${WEATHER_API_APPID}` // &lat={lat}&lon={lon}

export { WEATHER_API_APPID, WEATHER_API_URL, SEARCH_BY_LOCATION, GET_NEXT_DAYS_HOURS }
