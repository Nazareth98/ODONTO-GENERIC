import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import Button from '../Components/Button/Button'
import Logo from "../Assets/LogoWhite.png"
import './Navbar.css'



const NavBar = () => {
  const [active, setActive] = React.useState(false)
  const url = "#"


  const handleClick = () => setActive(active ? false : true)

  const openWhats = () => {
    let win = window.open(url, '_blank')
    win.focus()
  }

  return (
    <div className='navbar-bg'>
      <nav className='navbar-items '>
        <Link to="/">
          <h2>Odonto <span>Generic</span></h2>
        </Link>




        <div className='menu-icon' onClick={handleClick}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} className={item.cName}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
        <Button onClick={openWhats} buttonFixed="not-fixed">Agendar</Button>

        <div className='contact-links'>
          <div><a href="#" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-whatsapp'></i></a></div>
          <div className='ml-2'><a href="#" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-instagram'></i></a></div>
          <div className='ml-2'><a href="#" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-facebook'></i></a></div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar