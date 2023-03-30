import React from 'react'
import styles from './about.module.scss'

const About = () => {
  return (
    <section className={styles.about} id='aboutsection'>
    <div className={styles.left}>
        <span>Left Content</span>
      </div>
      <div className={styles.right}>
      <span>Right Content</span>
      </div>
    </section>
  )
}

export default About