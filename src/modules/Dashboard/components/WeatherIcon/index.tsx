// WeatherIcon
import type { WeatherIconProps } from '@/types'

export const WeatherIcon: React.FC<WeatherIconProps> = ({ icon, alt, className }) => {
  return (
    <figure className={className}>
      <img
        className="object-contain"
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt={alt}
      />
    </figure>
  )
}
