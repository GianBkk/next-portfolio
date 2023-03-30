import React from 'react'
import styles from './project.module.scss'

const Project = () => {
  return (
    <section className={styles.project} id='projectsection'>
    <div className={styles.left}>
        <span>Left Content</span>
      </div>
      <div className={styles.right}>
      <span>Right Content</span>
      </div>
    </section>
  )
}

export default Project