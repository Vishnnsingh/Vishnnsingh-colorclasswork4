import style from '../components/Mycomponent.module.css';
import Card from '../cards/Card';
import React from 'react'
import Header from '../header/Header';
import { data } from '../jsonData/Data';

const Mycomponent = () => {
  return (
    <section>
     <Header />

     <div className={style.dd}>
     {
      data.map((val,index) =>{
        return <Card {...val} key={index}/>
       
      })
     }
     </div>
    
    </section>
  )
}

export default Mycomponent
