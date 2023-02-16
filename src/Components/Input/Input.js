import React from 'react'
import './Input.css'

const Input = ({type, label, placeholder}) => {
  return (
    <>
        <input className='input' type={type} placeholder={placeholder}/>
        <label className='label' htmlFor={label}>{label}</label>
    </>
   
  )
}

export default Input