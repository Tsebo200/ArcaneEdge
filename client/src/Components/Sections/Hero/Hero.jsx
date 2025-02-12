import React from "react";
import styles from "./Hero.module.scss";
import VideoLink from "../../../Assets/ArcaneEdge_Vid.mp4"

function Hero() {


  const videoRef = React.useRef(null);

  React.useEffect(() => {
    // Attempt to play when component mounts
    const playVideo = async () => {
      try {
        await videoRef.current.play();
      } catch (err) {
        console.log("Autoplay was prevented:", err);
        // Video will show controls and user can play manually
      }
    };
    
    playVideo();
  }, []);



  return (
    <>
      <div className={styles.mainContainer}>
      {/* <video src={'https://youtu.be/moSKhf-566A?si=cEZ-D-TwNrk1BV7o'} width="600" height="300" controls="controls" autoplay="true" /> */}
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/moSKhf-566A?si=cEZ-D-TwNrk1BV7o&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        {/* <video className="demoVid" width="640" height="264" controls src="../../../../public/ArcaneEdge_Vid.mp4"></video>  */}
        <div className={styles.videoContainer}>


    <video 
      className={styles.responsiveVideo}
      ref={videoRef}
      src={VideoLink} 
      autoPlay 
      loop
      playsInline
      controls
    />



  </div>




  <div className={styles.contentOverlay}>
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
      </div>
    </>
  );
}

export default Hero;
