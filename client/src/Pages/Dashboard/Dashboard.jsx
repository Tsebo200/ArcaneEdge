import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Hero from '../../Components/Sections/Hero/Hero'
import BottomSection from '../../Components/Sections/BottomSection/BottomSection'
import HeroTwo from '../../Components/HeroTwo/HeroTwo'
import AboutUs from '../../Components/Sections/MidSection/AboutUs/AboutUs'
import MidSection from '../../Components/Sections/MidSection/MidSection'


function Dashboard() {
  return (<>

    <NavBar/>
    <HeroTwo/>
    {/* <Hero/> */}
    <MidSection/>
    {/* <AboutUs/> */}
    <BottomSection/>

 
    </>

  )
}

export default Dashboard