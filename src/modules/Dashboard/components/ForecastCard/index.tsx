// ForecastCard
import { styles } from '@/styles'
import { convertTime } from '@/utils'
import type { ForecastProps } from '@/types'

export const ForecastCard = ({ data, isWeekMode, timezone }: ForecastProps) => {
  return (
    <article
      className={`flex flex-col items-center overflow-hidden pb-6 text-center ${styles.card}`}
    >
      <h3
        className={`mb-4 w-full bg-gradient-to-br from-gray-200 to-gray-300 py-6 ${styles.cardLabel.normal} dark:from-gray-700 dark:to-gray-800`}
      >
        {isWeekMode
          ? convertTime(data.dt, timezone, 'dayOfWeek')
          : convertTime(data.dt, timezone, '24Hours')}
      </h3>
      <figure className="mb-3 h-24 w-24 rounded-full bg-slate-300 shadow-inner dark:bg-slate-800">
        <img
          className=" object-contain"
          src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
          alt={data?.weather?.[0]?.main}
        ></img>
      </figure>
      <p className="flex w-full flex-col items-center px-4 text-2xl">
        {isWeekMode ? (
          <>
            <span className="font-semibold">{`${data?.temp?.day.toFixed(0)}°C`}</span>
            <span className="text-gray-400">{`${data?.temp?.night.toFixed(0)}°C`}</span>
          </>
        ) : (
          <>
            <span className="text-gray-400">{data?.weather?.[0]?.main}</span>
            <span className="font-semibold">{`${data?.temp?.toFixed(0)}°C`}</span>
          </>
        )}
      </p>
    </article>
  )
}
