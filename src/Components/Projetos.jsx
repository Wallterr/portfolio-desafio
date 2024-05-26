import React from 'react'
import styles from './Projetos.module.css'
import Card from './Card'
import cloud from './../Imagem/cloud.svg'
import task from './../Imagem/task.svg'



function Projetos() {
  return (
    <div id='Projetos'  className={styles.Projetos} >
      <h1> Projetos </h1>
      <Card
        img={cloud}
        title='Pesquisa de CEP e Previsão do tempo'
        descripition='Previsões do Tempo e endereços em tempo real.'
        link="https://api-cep-tempo.vercel.app/"
        />
      <Card
        img={task}
        title='Organizador de tarefas'
        descripition='Planeje seu dia com um organizador de tarefas mais simples.'
        link="https://organizador-lepx.vercel.app/"
      />

    </div>
  )
}

export default Projetos
