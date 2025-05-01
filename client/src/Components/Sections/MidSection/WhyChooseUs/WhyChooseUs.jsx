import React from 'react'
import styles from '../WhyChooseUs/WhyChooseUs.module.scss'

function WhyChooseUs() {
  return (
    <div>
        <div className={styles.chooseContainer}>
            <div className={styles.chooseHeaderText}>Why Choose Us</div>
            <div className={styles.subHeadContainer}>
            <div className={styles.chooseSubHeadText}>We offer Integrated Approach, InsurTech Expertise, Data-Driven Solution</div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs