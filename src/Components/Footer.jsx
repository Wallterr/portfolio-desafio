import React from 'react'
import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
   
    <div id='Footer' className={styles.Footer} >
      <ul>
        <li>  <a href='https://www.facebook.com/zeeck.zeck' target='_blank'  >  <FaFacebookSquare size={35} /> </a></li>
        <li> <a href='https://www.instagram.com/zeeeck_/' target='_blank' > <FaInstagram size={35} /> </a>  </li>
        <li>  <a href='https://github.com/Wallterr' target='_blank' >  <FaGithub size={35} /> </a>  </li>
        <li>  <a href='https://www.linkedin.com/in/wallterluiz/' target='_blank' > <FaLinkedin size={35} /> </a> </li>
      </ul>      
    </div>
    <div className={styles.Copy}>
        <p> Copyright ©2030 All rights reserved  </p>
      </div>
    </>
  )
}

export default Footer
