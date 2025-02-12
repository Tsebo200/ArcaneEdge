import React from 'react'
import styles from '../Cards/Card.module.scss'

function Card() {
  return (
    <>
    <div className={styles.cardOne}>
        <div className={styles.imgContainer}></div>
        <div className={styles.aboutUsHeading}>About Us</div>
        <div className="aboutUsContainer">
            <div className={styles.aboutUsText}>
            ArcaneEdge is a forward-thinking technology 
            and marketing agency that bridges the gap between
            creativity and innovation.
            </div>
        </div>
        <div className={styles.learnBtn}>
        <div className={styles.learnBtnText}>Learn More</div>
        </div>
    </div>

    <div className={styles.cardTwo}>
        <div className={styles.imgContainer}></div>
        <div className={styles.aboutUsHeading}>Why Choose Us</div>
        <div className="aboutUsContainer">
            <div className={styles.aboutUsText}>
            ArcaneEdge is a forward-thinking technology 
            and marketing agency that bridges the gap between
            creativity and innovation.
            </div>
        </div>
        <div className={styles.learnBtn}>
        <div className={styles.learnBtnText}>Learn More</div>
        </div>
    </div>

    <div className={styles.cardThree}>
        <div className={styles.imgContainer}></div>
        <div className={styles.aboutUsHeading}>Technology Solution</div>
        <div className="aboutUsContainer">
            <div className={styles.aboutUsText}>
            ArcaneEdge is a forward-thinking technology 
            and marketing agency that bridges the gap between
            creativity and innovation.
            </div>
        </div>
        <div className={styles.learnBtn}>
        <div className={styles.learnBtnText}>Learn More</div>
        </div>
    </div>


    <div className={styles.cardFour}>
        <div className={styles.imgContainer}></div>
        <div className={styles.aboutUsHeading}>Marketing Solution</div>
        <div className="aboutUsContainer">
            <div className={styles.aboutUsText}>
            ArcaneEdge is a forward-thinking technology 
            and marketing agency that bridges the gap between
            creativity and innovation.
            </div>
        </div>
        <div className={styles.learnBtn}>
        <div className={styles.learnBtnText}>Learn More</div>
        </div>
    </div>
    </>
  )
}

export default Card