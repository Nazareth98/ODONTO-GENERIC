import React from 'react'
import Banner from './Banner/Banner'
import Diferenciais from './Diferenciais/Diferenciais'
import Duvidas from './FaleConosco/Duvidas'
import Pacientes from './Pacientes/Pacientes'
import Tratamentos from './Tratamentos/Tratamentos'

const Home = () => {
  return (
    <>
      <Banner />
      <Diferenciais />
      <Tratamentos />
      <Pacientes />
      <Duvidas />
    </>
  )
}

export default Home