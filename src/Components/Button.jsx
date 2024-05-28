  import React from 'react'
import styles from './Button.module.css'

function Button() {
  return (
    <div className={styles.btn}>
      <a href='https://github.com/Wallterr' target='_blank'>
       <button> Conheça meu portfólio </button>
      </a>
    </div>
  )
}

export default Button
