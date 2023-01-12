// Forecast
import { Key, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Keyboard, Mousewheel } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/free-mode'
import 'swiper/scss/keyboard'
import { ForecastCard } from '../'
import { styles } from '@/styles'
import { TodayIcon, WeekIcon } from '@/assets'
import data from '@/data/index.json'
import type { ForecastProps } from '@/types'

const forecastData = data.forecast

export const Forecast = ({ data }: ForecastProps) => {
  const [isWeekMode, setWeekMode] = useState(false)

  const showWeekForecast = () => {
    setWeekMode(true)
  }

  const showTodayForecast = () => {
    setWeekMode(false)
  }

  const forecastCardsContent = isWeekMode ? data?.daily : data?.hourly

  return (
    <section>
      <div className="flex gap-4 dark:border-gray-700">
        <button
          className={`${isWeekMode ? `${styles.tabBtn.inactive}` : `${styles.tabBtn.active}`} ${
            styles.tabBtn.common
          }`}
          type="button"
          onClick={showTodayForecast}
        >
          <TodayIcon />
          <span>{forecastData.buttons[0]}</span>
        </button>
        <button
          className={`${isWeekMode ? `${styles.tabBtn.active}` : `${styles.tabBtn.inactive}`} ${
            styles.tabBtn.common
          }`}
          type="button"
          onClick={showWeekForecast}
        >
          <WeekIcon />
          <span>{forecastData.buttons[1]}</span>
        </button>
      </div>
      <div className="mb-4 h-[3px] bg-gray-200 shadow-inner dark:bg-gray-700 sm:mb-6"></div>
      <Swiper
        className="-my-2"
        slidesPerView={2}
        spaceBetween={24}
        freeMode={true}
        keyboard={{
          enabled: true,
        }}
        mousewheel={{
          forceToAxis: true,
        }}
        modules={[FreeMode, Keyboard, Mousewheel]}
        breakpoints={{
          640: { slidesPerView: 4, spaceBetween: 32 },
          1024: { slidesPerView: 6, spaceBetween: 32 },
        }}
      >
        {forecastCardsContent &&
          forecastCardsContent.map((forecastItem: any, idx: Key | undefined) => (
            <SwiperSlide className="py-2" key={idx}>
              <ForecastCard data={forecastItem} isWeekMode={isWeekMode} timezone={data?.timezone} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  )
}
