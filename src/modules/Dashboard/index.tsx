// Dashboard
import { useIsFetching, useQuery } from 'react-query'
import { Container } from '@/components'
import { SearchForm, Weather } from './components'
import { useFormQuery } from '@/hooks'
import { fetchImage, fetchLocationData, fetchWeatherByWord } from '@/api/fetchers'

const Dashboard = () => {
  const { handleSubmit, setQuery, query } = useFormQuery()

  const { refetch } = useQuery(['location-data'], () => fetchLocationData(), {
    onSuccess: setQuery,
  })

  const { data: weather, isError } = useQuery(
    ['weather-data', query],
    () => fetchWeatherByWord(query),
    {
      enabled: !!query,
    }
  )

  const weatherDescription = weather?.weather?.[0]?.description

  const { data: image } = useQuery(
    ['bg-image', query, weatherDescription],
    () => fetchImage(query, weatherDescription),
    {
      enabled: !!weatherDescription,
    }
  )

  const isFetching = useIsFetching()

  const handleClick = () => {
    refetch()
  }

  return (
    <section
      id="dashboard"
      className="bg-cover bg-center bg-no-repeat dark:bg-gray-900"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="min-h-screen bg-slate-200/70 pt-36 pb-16 backdrop-blur-2xl dark:bg-gray-900/[.85]">
        <Container>
          <SearchForm submitHandler={handleSubmit} clickHandler={handleClick} error={isError} />
          <Weather weather={weather} image={image} isFetching={isFetching} />
        </Container>
      </div>
    </section>
  )
}

export default Dashboard
