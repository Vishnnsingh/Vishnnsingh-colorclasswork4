import React from 'react'
import style from '../cards/Card.module.css'

const Card = (props) => {

 console.log(props);
 const element =(e) => {
  console.log(e.id);
 }
  return (

    <section className={style.ccc}>
        <section className={style.container}>
     <div style={{backgroundColor: `#${props.colorCode}`}} className={style.color_box}>

     <div className={style.down_box}>
      <h2>#{props.colorCode}</h2>
      <h3 style={{color: `#${props.colorCode}`}} >
        
      </h3>
       <span style={{color: `#${props.colorCode}`}}>
       {props.colorName }
       </span>
     </div>
     </div>

     {/* <div className={style.card}>
      
     </div> */}

    </section>
    </section>
   
  )
}

export default Card
