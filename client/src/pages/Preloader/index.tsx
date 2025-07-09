import React from 'react'
import styles from './Preloader.module.scss'

const Preloader: React.FC = () => {
  return (
    <div className={styles.pl}>
      <div className={styles.pl__dot}>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
      </div>
      <div className={styles.pl__dot}>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
      </div>
      <div className={styles.pl__dot}>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
      </div>
      <div className={styles.pl__dot}>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
      </div>
      <div className={styles.pl__dot}>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
      </div>
      <div className={styles.pl__dot}>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
        <div className={styles.pl__dot_layer}></div>
      </div>
    </div>
  )
}

export default Preloader
