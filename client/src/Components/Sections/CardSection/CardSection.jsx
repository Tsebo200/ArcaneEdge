import React from 'react';
import Card from '../../Cards/Card';
import styles from '../CardSection/CardSection.module.scss'


function CardSection() {
  return (
    <>
    <div className={styles.mainContainer}>
    <Card/>
    </div>
  </>
  )
}

export default CardSection