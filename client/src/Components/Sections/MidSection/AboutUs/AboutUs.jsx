import React from 'react'
import styles from '../AboutUs/AboutUs.module.scss'
import MarketingSolution from '../MarketingSolutions/MarketingSolution'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import TechnologySolution from '../TechnologySolutions/TechnologySolution'

function AboutUs() {
  return (
    <div>
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHeaderText}>About Us</div>
            <div className={styles.subHeadContainer}>
            <div className={styles.subHeadText}>ArcaneEdge is a forward-thinking technology and marketing agency</div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs