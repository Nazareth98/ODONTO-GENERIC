import React from 'react'
import './Pacientes.css'
import { PROFILES } from './Profiles'
import Aos from "aos"
import "aos/dist/aos.css"

const Pacientes = () => {

    React.useEffect(() => {
        Aos.init({ duration: 1700 })
    }, [])
    return (
        <div className='pacientes-bg' id='pacientes'>
            <div className='container'>
                <div className='pacientes-title'>
                    <h2 className='title'>Nossos Pacientes</h2>
                    <p className='text'>Ao final dos procedimentos a opinião dos nossos pacientes é o melhor feedback que poderíamos ter, confira alguns:</p>
                </div>
                <div className='pacientes-box'>
                    {PROFILES.map((profile) => {
                        return (
                            <div key={profile.name} className='pacientes-card'>
                                <div data-aos="fade-right" data-aos-once="true" className='pacientes-profile'>
                                    <div className='pacientes-avatar'>
                                        <img src={profile.avatar} alt="" />
                                    </div>
                                    <div>
                                        <div className='subtitle'><h3>{profile.name}</h3></div>
                                        <div>
                                            <p className='pacientes-trat'>{profile.tratamento}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div data-aos="fade-up" data-aos-once="true" className='pacientes-text'><p className='text'><em>{profile.comentario}</em></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pacientes