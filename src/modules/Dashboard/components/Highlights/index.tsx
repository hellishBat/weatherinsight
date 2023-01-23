// Highlights
import { HighlightsCard, HighlightsMainCard } from '../'
import { convertTime } from '@/utils'
import { SunIcon, CloudIcon, WaterIcon, WindIcon, MeterIcon, VisibilityIcon } from '@/assets'
import data from '@/data/index.json'
import type { HighlightsProps } from '@/types'

const highlightsData = data.highlights

const highlightsCardText = data.highlights.cards

export const Highlights = ({ data, img }: HighlightsProps) => {
  const highlightsCardsData = [
    {
      label: highlightsCardText[0].label,
      icon: <SunIcon />,
      value: data?.current?.uvi,
      unit: highlightsCardText[0].unit,
      color: 'text-amber-400 dark:text-amber-300 ',
    },
    {
      label: highlightsCardText[1].label,
      icon: <CloudIcon />,
      value: data?.current?.clouds,
      unit: highlightsCardText[1].unit,
      color: 'text-sky-400 dark:text-sky-300 ',
    },
    {
      label: highlightsCardText[2].label,
      icon: <WindIcon />,
      value: data?.current?.wind_speed,
      unit: highlightsCardText[2].unit,
      color: 'text-cyan-400 dark:text-cyan-300 ',
    },
    {
      label: highlightsCardText[3].label,
      icon: <MeterIcon />,
      value: data?.current?.pressure,
      unit: highlightsCardText[3].unit,
      color: 'text-red-400 dark:text-red-300',
    },
    {
      label: highlightsCardText[4].label,
      icon: <WaterIcon />,
      value: data?.current?.humidity,
      unit: highlightsCardText[4].unit,
      color: 'text-blue-400 dark:text-blue-300 ',
    },
    {
      label: highlightsCardText[5].label,
      icon: <VisibilityIcon />,
      value: (data?.current?.visibility / 1000).toFixed(1),
      unit: highlightsCardText[5].unit,
      color: 'text-indigo-400 dark:text-indigo-300 ',
    },
  ]

  return (
    <section className="mb-12">
      <div className="mb-4 flex flex-wrap items-end text-gray-500 sm:mb-6">
        <h2 className="mr-auto text-3xl font-bold">{highlightsData.heading}</h2>
        <p className="text-xl font-semibold">
          {highlightsData.text} {convertTime(data?.dt, data?.timezone, 'fullDate')}
        </p>
      </div>
      <div className="flex flex-wrap gap-6 sm:gap-8 md:flex-nowrap">
        <HighlightsMainCard data={data} img={img} />
        <div className="grid w-full auto-cols-fr auto-rows-fr gap-6 sm:grid-cols-2 sm:gap-8 lg:w-2/3 lg:grid-cols-3">
          {highlightsCardsData.map((highlightsCardData, idx) => (
            <HighlightsCard data={highlightsCardData} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
