import React from 'react'
import styles from '../TechnologySolutions/TechnologySolution.module.scss'

function TechnologySolution() {
  return (
    <div className={styles.technologyContainer}>
        <div className={styles.technologyHeaderText}>Technology Solutions</div>
        <div className={styles.technologySubHeadContainer}>
        <div className={styles.technologySubHeadText}>We specialise Custom Software Development, Cybersecurity and Data Analytics & AI solutions</div>
        </div>
    </div>
  )
}

export default TechnologySolution