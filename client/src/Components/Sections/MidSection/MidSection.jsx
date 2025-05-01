import React from 'react'
import styles from '../MidSection/MidSection.module.scss'
import AboutUs from './AboutUs/AboutUs'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import TechnologySolution from './TechnologySolutions/TechnologySolution'
import MarketingSolution from './MarketingSolutions/MarketingSolution'

function MidSection() {
  return (
    <div>
        <div className={styles.mainContainer}>
            <AboutUs/>
            <WhyChooseUs/>
            <TechnologySolution/>
            <MarketingSolution/>
        </div>
    </div>
  )
}

export default MidSection