// Weather
import { Loading, NotFound, Forecast, Highlights } from '../'
import type { WeatherProps } from '@/types'

export const Weather = ({ weather, image, isFetching, isError }: WeatherProps) => {
  if (isFetching) return <Loading />
  if (isError) return <NotFound />

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
