import React from 'react'
import style from './Blog.module.css'

function Blog() {
  return (

    <div id='Blog' className={style.blog}>

          <div className={style.blogCard}>
            <h3> Futuro das IA's </h3>
            <h4> 24 Maio 2024 <span> Minhas Expectativas </span>  </h4>
            <p> Como um entusiasta de IA, eu sempre convivo com as expectativas altas sobre inteligencias artificiais.
            Falando mais com o coração do que com a razão, eu acredito profundamente que é uma linha natural o futuro
            ser uma junção entre humanos e seres artificiais .</p>
          </div>


         <div className={style.blogCard}>
            <h3> Propulsão dos Foguetes </h3>
            <h4> 25 Maio 2024 <span> Como Os Foguetes Sobem </span> </h4>
            <p> O princípio que baseia o lançamento e o funcionamento de um foguete é a terceira lei de Newton,
            também conhecida como lei da ação e reação. Para subir, os jatos do foguete expelem uma quantidade
            enorme de gás aquecido para baixo. Esses gases empurram a nave para cima.</p>
         </div>

         
    </div>

  )
}

export default Blog
