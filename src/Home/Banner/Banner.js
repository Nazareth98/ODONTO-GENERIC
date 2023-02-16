import React from 'react'
import './Banner.css'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import arteBanner from '../../Assets/ArteBanner.png'
import Aos from "aos"
import "aos/dist/aos.css"

const Banner = () => {

  React.useEffect(() => {
    Aos.init({ duration: 1700 })
  }, [])

  const url = "#"

  function openWhats() {
    let win = window.open(url, '_blank')
    win.focus()
  }

  return (
    <div className='banner-bg' id='home'>
      <div className='banner container'>
        <div data-aos="fade-up" className='banner-section'>
          <img src={arteBanner} alt="" />
        </div>
        <div data-aos="fade-up" className='banner-section banner-section-mobile'>
          <h2 className='title'>Seja muito bem vindo a <span className='span'>Odonto </span>Generic!</h2>
          <p className='banner-text'>Na Odonto Generic você conta com os melhores profissionais e os equipamentos mais modernos, além de um atendimento impecável repleto de cuidados e atenção. </p>
          <div className='banner-form'>
            <Input type="text" label="Sua dúvida..." placeholder="Sua dúvida..." />
            <Button onClick={openWhats} className="btn-banner"><i className='fa-solid fa-paper-plane'></i></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner