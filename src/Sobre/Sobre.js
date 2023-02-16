import React from 'react'
import './Sobre.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Sobre = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1700, easing: "ease-in-out" })
  }, [])


  return (
    <div className='sobre-bg'>
      <div className='container sobre-box'>
        <div className='sobre-content-text'>
          <div className='sobre-description' data-aos="fade-right">
            <h2 className='title'>Sobre a Clínica</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil eius, vero non placeat officia nam itaque eos quibusdam! Sequi accusamus reiciendis aspernatur? Quasi voluptatibus sit, aperiam animi obcaecati sint.</p>
          </div>
          <div data-aos="fade-up" data-aos-once="true">
            <div className='sobre-item'>
              <h3><i className="fa-sharp fa-solid fa-shop"></i>Nossa Estrutura</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, esse! Rem, iure suscipit? Eaque incidunt quos minima suscipit explicabo quia adipisci, dolorum maiores, vel natus veniam non rerum odio! Asperiores.</p>
            </div>
            <div className='sobre-item'>
              <h3><i className="fa-solid fa-location-dot"></i>Como chegar</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, rerum nam? Aut neque, ratione natus quidem obcaecati voluptas officiis atque nisi eius cumque. Nihil magnam at officia ullam provident fugit.</p>
            </div>
          </div>
        </div>
        <div className='sobre-content-video' data-aos="zoom-in" data-aos-once="true">
          <iframe src="https://player.vimeo.com/video/773560833?h=3a624e15d8&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="352" height="640" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Odonto Pr&amp;oacute;teses - V&amp;iacute;deo Institucional"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Sobre