// Header
import { useScrollDirection } from '@/hooks'
import { Container } from '@/components'
import { Logo, ThemeSwitch } from './components'
import { styles } from '@/styles'

const Header = () => {
  const scrollDirection = useScrollDirection()

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-4 ${
        styles.layout
      } shadow transition-[transform,opacity] duration-500 ${
        scrollDirection === 'down' ? '-translate-y-full opacity-5' : 'translate-y-0 opacity-100'
      }`}
    >
      <Container>
        <div className="flex items-center">
          <Logo />
          <ThemeSwitch />
        </div>
      </Container>
    </header>
  )
}

export default Header
