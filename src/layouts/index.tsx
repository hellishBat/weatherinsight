// Layout
import { FC } from 'react'
import { ChildrenTypes } from '@/types'
import Header from '@/modules/Header'
import Footer from '@/modules/Footer'

const Layout: FC<ChildrenTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500 text-white">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
