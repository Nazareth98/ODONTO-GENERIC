import React from 'react'
import { Link } from 'react-router-dom'
import img404 from "../../Assets/Arte404.png"
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className='container notFoud-box'>
      <div className='notFound-avatar'>
        <img src={img404} alt="" />
      </div>
      <div className='notFound-text'>
        <h2>Essa página ainda não existe!</h2>
        <p>Ops, você não deveria estar por aqui. Essa página ainda não existe, mas já estamos trabalhando para mudar isso!</p>
        <p><Link to="/">Voltar para pagina inicial</Link></p>
      </div>
    </div>
  )
}

export default NotFound