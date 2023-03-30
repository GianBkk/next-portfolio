import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import Hero from './sections/hero/hero'
import About from './sections/about/about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

  return (
    <main className={styles.main}>
      <Hero/>
      <About/>




    </main>
  )
}
