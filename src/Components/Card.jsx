import React from 'react'

import styles from './Card.module.css'
import {useState} from 'react'
import ButtonProjects from './ButtonProjects'


function Card({title, descripition, img, link}){

const [info, setInfo] = useState(false)

function infoOn(){
  setInfo(true)
}

function infoOut(){
  setInfo(false)
}

  return (
    <div onMouseLeave={infoOut}  className={styles.Card} >
      <a onMouseEnter={infoOn} >
        <img src={img} />
      </a>
    {info === true &&(
      <div>
        <h2> {title} </h2>
        <h3> {descripition} </h3>
        <ButtonProjects link={link} />
      </div>
    ) }
    </div>
  )
}

export default Card
