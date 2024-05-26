import React from 'react'
import styles from './ButtonProjects.module.css'

function ButtonProjects({link}) {
  return (
    
    <div>
    
    <a target='_blank'  href={link} >
    <button className={styles.ButtonProjects} >
      Acesse o site
    </button>
    </a>

    </div>
  )
}

export default ButtonProjects
