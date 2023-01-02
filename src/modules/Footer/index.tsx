// Footer
import { Container } from '@/components'
import { IconHeart } from '@/assets'

const Footer = () => {
  return (
    <footer className="py-8">
      <Container>
        <div className="flex items-center justify-center gap-2">
          <span>Coded with</span>
          <IconHeart />
          <span>by Valentine Samoylov</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
