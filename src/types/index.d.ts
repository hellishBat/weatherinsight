// Props
import React from 'react'

type ChildrenProps = {
  children: React.ReactNode | React.ReactNode[]
}

type SearchProps = {
  onSearchChange: (fn: any) => void
}

type LocationButtonProps = {
  clickHandler: (fn: any) => void
}

type WeatherProps = {
  weather: any
  image: string
  isFetching: number
  isError: boolean
}

type HighlightsProps = {
  data: any
  img?: string
}

type ForecastProps = {
  data: any
  timezone?: number | any
  isWeekMode?: boolean
}

type LinkProps = ChildrenProps & {
  href: string
}

export {
  ChildrenProps,
  SearchProps,
  LocationButtonProps,
  WeatherProps,
  HighlightsProps,
  ForecastProps,
  LinkProps,
}
