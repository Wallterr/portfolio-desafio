import React from 'react'
import styles from "./Presentation.module.css";
import { useEffect, useState } from "react";

function Presentation() {

  const [text, setText] = useState('')
  const toRotate = ['Walter Luiz', 'Desenvolvedor de web', 'Entusiasta de IA']
  const [loop, setLoop] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const period = 100;
  const [delta, setDelta] = useState(100)

  useEffect(() => {
    let ticker = setInterval(() => {
      toType()
    }, delta)
    return() => {clearInterval(ticker)}
  }, [text])

  const toType = () => {
    let i = loop % toRotate.length 

    let fullText = toRotate[i]
    
    let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
    
    setText(updatedText);

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }else if (isDeleting && updatedText === ''){
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop+1);
    }
  }

  return (
    <div className={styles.Presentation}>
      <h1> Olá, Eu sou {text}</h1>
    
      <p>
      Sou apaixonado por tecnologia, por tudo que envolva aplicações<br/>
      que facilitam o nosso dia-a-dia. Descobrindo que isso é o que eu amo,<br/>
      migrei para area de programação para poder criar e inovar tudo<br />
      que possa facilitar a vida das pessoas e torna-las melhores seres-humanos. <br/>
      Acredito que a fusão entre homem e maquina é a proxima evolução natural da espécie,<br />
      Porem é necessario que nosso lado emocional seja a maior parte dessa fusão
      </p>

    </div>
  )
}

export default Presentation
