// Footer
import { Container, Link } from '@/components'
import { styles } from '@/styles'
import { HeartIcon } from '@/assets'
import data from '@/data/index.json'

const footerLinks = data.footer.links
const footerText = data.footer.text

const Footer = () => {
  return (
    <footer className={`py-8 text-xs ${styles.layout}`}>
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-1">
          <span>{footerText[0]}</span>
          <HeartIcon className="h-[1.25em] w-[1.25em]" />
          <span>{footerText[1]}</span>
          <Link href={footerLinks.owner.href}>{footerLinks.owner.text}</Link>
          <span>{footerText[2]}</span>
          <Link href={footerLinks.weather.href}>{footerLinks.weather.text}</Link>
          <span>{footerText[3]}</span>
          <Link href={footerLinks.unsplash.href}>{footerLinks.unsplash.text}</Link>
          <span>{footerText[4]}</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
