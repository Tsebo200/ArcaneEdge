import React from 'react'
import styles from '../MarketingSolutions/MarketingSolution.module.scss'

function MarketingSolution() {
  return (
    <div>
    <div className={styles.marketingContainer}>
        <div className={styles.marketingHeaderText}>Marketing Solutions</div>
        <div className={styles.marketingSubHeadContainer}>
        <div className={styles.marketingSubHeadText}>We provide Digital Advertising, Content Marketing and Social Media Management solutions</div>
        </div>
    </div>
    </div>
  )
}

export default MarketingSolution