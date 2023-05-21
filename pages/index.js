import "aos/dist/aos.css"
import "remixicon/fonts/remixicon.css"

import { useEffect } from "react"
import Aos from "aos"
import { Header, Footer, Hero, Services, Portfolio, Contact } from '@/components'

export default function Home() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
