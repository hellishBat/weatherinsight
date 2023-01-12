// Weather
import { Spinner, Forecast, Highlights } from '../'
import type { WeatherProps } from '@/types'

export const Weather = ({ weather, image, isFetching }: WeatherProps) => {
  if (isFetching) return <Spinner />

  return (
    <>
      {weather && image && !isFetching && (
        <>
          <Highlights data={weather} img={image} />
          <Forecast data={weather} />
        </>
      )}
    </>
  )
}
