import React from 'react'
import { DifenciaisItems } from './DiferenciaisItems'
import './Diferenciais.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Diferenciais = () => {

  React.useEffect(() => {
    Aos.init({ duration: 1700, easing: "ease-in-out" })
  }, [])
  return (
    <div className='container' id='diferenciais'>
      <div className='dif-box'>
        <h2 className='title'>Nossos Diferenciais</h2>
        <div className='dif-items'>
          {DifenciaisItems.map((item, index) => {
            return (
              <div key={item.id} data-aos="fade-right" data-aos-once="true" className='dif-card'>
                <h2><i className={`dif-icon ${item.classIcon}`}></i></h2>
                <h3 className='subtitle'>{item.subtitle}</h3>
                <p className='text'>{item.description}</p>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Diferenciais