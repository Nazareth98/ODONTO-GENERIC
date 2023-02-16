import React from 'react'
import './Credits.css'

const Credits = () => {
  return (
    <div className='credits-bg'>
        <div className='container credits-box'>
            <div>
                Developed by <span><a href="">Patrick Nazareth</a></span>
            </div>
            <div className='credits-links'>
                <div><a href="https://api.whatsapp.com/send?phone=5545998550838&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20com%20voc%C3%AA!" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-whatsapp'></i></a></div>
                <div  className='ml-2'><a href="https://www.instagram.com/patricnazareth/" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-instagram'></i></a></div>
                <div  className='ml-2'><a href="https://www.facebook.com/patrick.silva.182/" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-facebook'></i></a></div>
                <div  className='ml-2'><a href="https://github.com/Nazareth98" target="_blank" rel='noreferrer'><i className='fa-brands fa-square-github'></i></a></div>
            </div>
        </div>
    </div>
  )
}

export default Credits