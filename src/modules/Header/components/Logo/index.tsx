// Logo
import { ProjectLogo } from '@/assets'

export const Logo = () => {
  return (
    <a className="mr-auto w-40 overflow-hidden md:w-48" href="/">
      <ProjectLogo width="auto" height="auto" />
      <span className="sr-only">WeatherInsight Home Page</span>
    </a>
  )
}
