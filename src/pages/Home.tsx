// Home
import ContextProviders from '@/context/ContextProviders'
import Layout from '@/layouts'
import { Container } from '@/components'
import { LogoReact, LogoVite, LogoTS, LogoTW } from '@/assets'

const Home = () => {
  return (
    <ContextProviders>
      <Layout>
        <section className="py-16">
          <Container>
            <h1 className="flex items-center justify-center text-4xl font-medium">
              <LogoVite className="mr-2" /> Vite Boilerplate (<LogoReact className="mr-2" />
              React <LogoTS className="mx-2" /> TypeScript + <LogoTW className="mr-2" /> Tailwind
              CSS)
            </h1>
          </Container>
        </section>
      </Layout>
    </ContextProviders>
  )
}

export default Home
