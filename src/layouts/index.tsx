// Layout
import Header from '@/modules/Header'
import Footer from '@/modules/Footer'
import type { ChildrenProps } from '@/types'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      <main className="bg-slate-100 text-slate-700 dark:bg-gray-900 dark:text-white">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
