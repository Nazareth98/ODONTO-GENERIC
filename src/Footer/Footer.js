import React from 'react'
import { Link } from 'react-router-dom'
import Credits from './Credits/Credits'
import Logo from '../Assets/LogoWhite.png'
import './Footer.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Footer = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1700 })
  }, [])

  return (
    <>
      <footer className='footer-bg'>
        <div data-aos="fade" data-aos-once="true" className='container footer-box'>
          <div className="footer-section">
            <div>
              <h2>Odonto <span>Generic</span></h2>
            </div>

            <p className='footer-text'>Um centro odontológico completo e acessível. </p>
            <p className='footer-text'>Nós cuidamos de você e da sua família.</p>
            <div className='footer-links'>
              <div><a href="#" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-whatsapp'></i></a></div>
              <div className='ml-2'><a href="#" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-instagram'></i></a></div>
              <div className='ml-2'><a href="#" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-facebook'></i></a></div>
            </div>
          </div>
          <div className="footer-section">
            <h3 className='footer-subtitle'>Seções</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#tratamentos">Tratamentos</a></li>
              <li><a href="#pacientes">Pacientes</a></li>
              <li><a href="#duvidas">Dúvidas</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className='footer-subtitle'>Páginas</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="procedimentos">Procedimentos</Link></li>
              <li><Link to="sobre">Sobre nós</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h2 className='footer-subtitle'>Onde nos encontrar?</h2>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7190.802899075777!2d-54.44543132227646!3d-25.69112906643181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6ea7339e748e7%3A0x1c851fea816c962f!2sCataratas%20do%20Igua%C3%A7u!5e0!3m2!1spt-BR!2sbr!4v1670891154703!5m2!1spt-BR!2sbr" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
      </footer>
      <Credits />
    </>
  )
}

export default Footer