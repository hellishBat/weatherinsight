// Fetchers (w/Axios)
import { LOCATION_DATA_API } from './endpoints/locationDataApi'
import { GET_WEATHER_BY_QUERY, GET_WEATHER_NEXT_DAYS_HOURS } from './endpoints/weatherApi'
import { SEARCH_BY_WORD } from './endpoints/imagesApi'
import axios from 'axios'

export const fetchLocationData = async () => {
  const resLocationData = await axios.get(LOCATION_DATA_API)

  return resLocationData?.data?.city
}

export const fetchWeatherByWord = async (location: string) => {
  const resWeather = await axios.get(`${GET_WEATHER_BY_QUERY}&q=${location}&units=metric`)

  const weather = {
    ...resWeather?.data,
    city: resWeather?.data?.name,
    country_code: resWeather?.data?.sys?.country,
    country: resWeather?.data?.sys?.country,
  }

  const resWeatherNDH = await axios.get(
    `${GET_WEATHER_NEXT_DAYS_HOURS}&lat=${resWeather.data.coord.lat}&lon=${resWeather.data.coord.lon}&units=metric`
  )

  const weatherNextDaysHours = {
    ...weather,
    daily: resWeatherNDH?.data?.daily,
    hourly: resWeatherNDH?.data?.hourly,
    current: resWeatherNDH?.data?.current,
  }

  return weatherNextDaysHours
}

export const fetchImage = async (word: string, weatherDescription: string | any) => {
  const res = await axios.get(`${SEARCH_BY_WORD}${word}`)

  if (res?.data.results.length === 0 || res?.data.results.length < 10) {
    const res = await axios.get(`${SEARCH_BY_WORD}nature ${weatherDescription}`)
    const randomImage = res?.data.results[Math.floor(Math.random() * 10)]?.urls?.regular

    return randomImage
  } else {
    const randomImage = res.data.results[Math.floor(Math.random() * 10)]?.urls?.regular

    return randomImage
  }
}
