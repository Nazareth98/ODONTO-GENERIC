import React from 'react'
import './Duvidas.css'
import ArteDuvidas from "../../Assets/ArteDuvidas.png"
import Aos from "aos"
import "aos/dist/aos.css"

const Duvidas = () => {

  React.useEffect(() => {
    Aos.init({ duration: 1700 })
  }, [])

  return (
    <div className='duv-box container' id='duvidas'>
      <div data-aos="zoom-in" data-aos-once="true" className='duv-content-image'>
        <img src={ArteDuvidas} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-once="true" className='duv-content-text'>
        <h2 className='title'>Tem alguma dúvida?</h2>
        <h3 className='subtitle'>Nós estamos sempre disponíveis.</h3>
        <p className='text'>Se você necessita de maiores detalhes sobre tratamentos e procedimentos, adoraríamos ouvir você. Manda uma mensagem pra gente, seja pelo Whatsapp, Facebook ou Instagram. </p>
        <div className="duv-links">
          <a href="#" target="_blank" rel='noreferrer' ><i className='fa-brands fa-square-whatsapp'></i></a>
          <a href="#" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-facebook'></i></a>
          <a href="#" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-instagram'></i></a>
        </div>

        <div className='duv-phone'>
          <i className="fa-solid fa-phone-volume"></i><span>(45) 9999-0000</span>
        </div>
      </div>



    </div>
  )
}

export default Duvidas