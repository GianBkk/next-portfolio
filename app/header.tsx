import React from 'react'
import styles from './header.module.scss'

const Header = () => {
  return (
    <nav className={styles.navbar}>

        <div className={styles.logo}>
            <img src="#" alt="Logo" />
        </div>

        <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                    <span className={styles.navText}>Home</span>
                </a>
            </li>
            <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                    <span className={styles.navText}>About</span>
                </a>
            </li>
            <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                    <span className={styles.navText}>Projects</span>
                </a>
            </li>
            <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                    <span className={styles.navText}>Contact</span>
                </a>
            </li>
        </ul>
    
    
    
    
    
    
    
    
    </nav>
  )
}

export default Header