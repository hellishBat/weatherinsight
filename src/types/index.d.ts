// Props
import React from 'react'

type ChildrenProps = {
  children: React.ReactNode | React.ReactNode[]
}

type SearchFormProps = LocationButtonProps & {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void
  error?: boolean | unknown
}

type LocationButtonProps = {
  clickHandler: (fn: any) => void
}

type WeatherProps = {
  weather: any
  image: string
  isFetching: number
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
  SearchFormProps,
  LocationButtonProps,
  WeatherProps,
  HighlightsProps,
  ForecastProps,
  LinkProps,
}
