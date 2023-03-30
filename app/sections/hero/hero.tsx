import React from 'react'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero} id='herosection'>
        <div className={styles.left}>
          <span>Left Content</span>
        </div>
        <div className={styles.right}>
        <span>Right Content</span>
        </div>
      </section>
  )
}

export default Hero