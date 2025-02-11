import React from "react";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.allHeroComps}>
          <div className={styles.allTextContainer}>
            <div className={styles.headerContainer}>
              <div className={styles.headerContainer}>
                <div className={styles.headerText}>Arcane Edge Marketing</div>
              </div>
              <div className={styles.exploreBtn}></div>
            </div>
          </div>
        </div>
      </div>

      <div>HeroContainer</div>
    </>
  );
}

export default Hero;
