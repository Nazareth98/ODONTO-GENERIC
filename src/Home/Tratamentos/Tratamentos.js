import React from 'react'
import './Tratamentos.css'
import ArteTratamentos from "../../Assets/ArteTratamentos.png"
import Aos from "aos"
import "aos/dist/aos.css"

const Tratamentos = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='trat-box container' id='tratamentos'>
      <div className='trat-title'>
        <h2 className='title'>Tratamentos</h2>
        <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente magnam officiis.</p>
      </div>
      <div className='trat-sections'>
        <div data-aos="fade-right" data-aos-once="true" className='trat-content-area'>
          <div className='trat-item'>
            <h2><i className='fa-solid fa-tooth trat-icon'></i></h2>
            <div>
              <h3 className='subtitle'>Tratamento 1
              </h3>
              <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className='trat-item'>
            <h2><i className='fa-solid fa-tooth trat-icon'></i></h2>
            <div>
              <h3 className='subtitle'>Tratamento 2</h3>
              <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className='trat-item'>
            <h2><i className='fa-solid fa-tooth trat-icon'></i></h2>
            <div>
              <h3 className='subtitle'>Tratamento 3</h3>
              <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className='trat-item'>
            <h2><i className='fa-solid fa-tooth trat-icon'></i></h2>
            <div>
              <h3 className='subtitle'>Tratamento 4</h3>
              <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-once="true" className='trat-content-area'>
          <img src={ArteTratamentos} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Tratamentos