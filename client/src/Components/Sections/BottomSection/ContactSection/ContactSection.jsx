import React from 'react'
import styles from '../ContactSection/ContactSection.module.scss'

function ContactSection() {
  return (
    <>
    <div className={styles.mainContainer}>

        <div className={styles.contactHead}> Contact</div>
        <div className={styles.contactBody}>Ready to transform your business? Let’s work together!</div>

        <div className={styles.emailText}><b>Email:</b> info@arcaneedge.co.za</div>
        <div className={styles.websiteText}><b>website:</b> www.arcaneedge.co.za</div>

        <div className={styles.getInTouch}>
          <div className={styles.getInTouchText}>Get In Touch</div>
        </div>

        <div className={styles.iconContainer}>
          <div className={styles.xContainer}>
            <div className={styles.xIcon}></div>
            </div>
          <div className={styles.pinterestContainer}>
          <div className={styles.pinterestIcon}></div>
          </div>
          <div className={styles.linkedInContainer}>
          <div className={styles.linkedInIcon}></div>
          </div>
        </div>

        {/* <div className="iconContainer}></div> */}

    </div>
    </>
  )
}

export default ContactSection