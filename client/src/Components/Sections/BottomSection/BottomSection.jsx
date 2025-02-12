import React from 'react'
import styles from '../BottomSection/BottomSection.module.scss'
import ContactSession from '../../Sections/BottomSection/ContactSection/ContactSection'
import Card from '../../Cards/Card'


function BottomSection() {
  return (
    <>
    <div className={styles.mainContainer}>
    <Card/>
    <ContactSession/>
    </div>
  </>
  )
}

export default BottomSection