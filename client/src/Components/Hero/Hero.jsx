import React from "react";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.allHeroComps}>
          <div className={styles.allTextContainer}>
            <div className={styles.headerContainer}>
                <div className={styles.headerText}>Arcane Edge Marketing</div>
            </div>

              <div className={styles.subHeadContainer}>
              <div className={styles.subHeadText}>Your Vision Our Edge</div>
              </div>

              <div className={styles.bodyContainer}>
                <div className={styles.bodyText}>ArcaneEdge is a 
                  forward-thinking technology and marketing company, blending 
                  innovation with strategy to help businesses thrive in an increasingly 
                  digital world. We specialize in tailored solutions for evolving 
                  industries—especially in the fast-growing InsurTech space.
                </div>
              </div>

              <div className={styles.exploreBtnContainer}>
                <div className={styles.exploreBtn}>
                  
                  <div className={styles.btnText}>Explore Our Solution</div>
                  <div className={styles.exploreBtn2}></div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div>HeroContainer</div>
    </>
  );
}

export default Hero;
