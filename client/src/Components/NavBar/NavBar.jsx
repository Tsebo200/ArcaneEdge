import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../NavBar/NavBar.module.scss'
import Logo from '../Logo/Logo';

function NavBar() {
  return (
    <div className={styles.header}>
        <Logo/>
        <div className={styles.links_container}>
            <Link to="/">Home</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/WhyChooseUs">Why Choose US</Link>
            <Link to="/Technology">Technology</Link>
            <Link to="/Marketing">Marketing</Link>
        </div>
    </div>
  )
}

export default NavBar
