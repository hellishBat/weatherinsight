// Dashboard
import { useState } from 'react'
import { useIsFetching, useQuery } from '@tanstack/react-query'
import { Container } from '@/components'
import { LocationButton, SearchBar, Search, Weather } from './components'
import { fetchLocationData, fetchWeatherByQuery, fetchImage } from '@/api/fetchers'

const Dashboard = () => {
  const [query, setQuery] = useState('')

  const { refetch } = useQuery(['location-name'], () => fetchLocationData(), {
    onSuccess: setQuery,
  })

  const { data: weather } = useQuery(['weather-data', query], () => fetchWeatherByQuery(query), {
    enabled: !!query,
  })

  const cityName = weather?.name
  const weatherDescription = weather?.weather?.[0]?.description

  const { data: image } = useQuery(
    ['bg-image', cityName, weatherDescription],
    () => fetchImage(cityName, weatherDescription),
    {
      enabled: !!cityName,
    }
  )

  const isFetching = useIsFetching()

  const handleLocationSearch = () => {
    refetch()
  }

  const handleOnSearchChange = (searchData: any) => {
    setQuery(searchData?.value)
  }

  return (
    <section
      id="dashboard"
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="min-h-screen bg-slate-200/70 pt-36 pb-16 backdrop-blur-2xl dark:bg-gray-900/[.85]">
        <Container>
          <SearchBar>
            <Search onSearchChange={handleOnSearchChange} />
            <LocationButton clickHandler={handleLocationSearch} />
          </SearchBar>
          <Weather weather={weather} image={image} isFetching={isFetching} />
        </Container>
      </div>
    </section>
  )
}

export default Dashboard
