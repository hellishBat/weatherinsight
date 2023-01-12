// Home
import ContextProviders from '@/context/ContextProviders'
import Layout from '@/layouts'
import Dashboard from '@/modules/Dashboard'

const Home = () => {
  return (
    <ContextProviders>
      <Layout>
        <Dashboard />
      </Layout>
    </ContextProviders>
  )
}

export default Home
