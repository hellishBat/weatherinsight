// Fetchers
import axios from 'axios'
import { GEO_API_URL, GEO_API_OPTIONS } from '@/api/endpoints/geoApi'
import { LOCATION_DATA_API } from './endpoints/locationDataApi'
import { GET_WEATHER_BY_QUERY, GET_WEATHER_NEXT_DAYS_HOURS } from './endpoints/weatherApi'
import { GET_IMG_BY_WORD } from './endpoints/imagesApi'

export const fetchCitiesOptions = (inputValue: string) => {
  return fetch(
    `${GEO_API_URL}/cities?minPopulation=250000&namePrefix=${inputValue}`,
    GEO_API_OPTIONS
  )
    .then((response) => response.json())
    .then((response) => {
      return {
        options: response.data.map(
          (city: {
            latitude: string
            longitude: string
            name: string
            region: string
            countryCode: string
          }) => {
            return {
              value: `${city.name},${city.countryCode}`,
              label: `${city.name}, ${city.region}, ${city.countryCode}`,
            }
          }
        ),
      }
    })
}

export const fetchLocationData = async () => {
  const resLocationData = await axios.get(LOCATION_DATA_API)

  const query = `${resLocationData?.data?.city},${resLocationData?.data?.country_code}`

  return query
}

export const fetchWeatherByQuery = async (query: string) => {
  if (query) {
    const resWeather = await axios.get(`${GET_WEATHER_BY_QUERY}&q=${query}&units=metric`)

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
}

export const fetchImage = async (word: string, weatherDescription: string | any) => {
  const res = await axios.get(`${GET_IMG_BY_WORD}${word}`)

  if (res?.data.results.length === 0 || res?.data.results.length < 10) {
    const res = await axios.get(`${GET_IMG_BY_WORD}nature ${weatherDescription}`)
    const randomImage = res?.data.results[Math.floor(Math.random() * 10)]?.urls?.regular

    return randomImage
  } else {
    const randomImage = res.data.results[Math.floor(Math.random() * 10)]?.urls?.regular

    return randomImage
  }
}
