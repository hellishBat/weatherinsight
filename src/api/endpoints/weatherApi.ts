// Weather API
// Open Weather API Key
const WEATHER_API_APPID = import.meta.env.VITE_API_KEY_OPENWEATHER

const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const GET_WEATHER_BY_QUERY = `${OPEN_WEATHER_API_URL}?appid=${WEATHER_API_APPID}` // &q=${location}
const GET_WEATHER_NEXT_DAYS_HOURS = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&appid=${WEATHER_API_APPID}` // &lat={lat}&lon={lon}

export { GET_WEATHER_BY_QUERY, GET_WEATHER_NEXT_DAYS_HOURS }
