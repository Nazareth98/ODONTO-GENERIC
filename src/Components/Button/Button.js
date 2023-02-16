import React from 'react'
import './Button.css'

const STYLES = [
    'btn-primary',
    'btn-outline',
]

const SIZES = [
    'btn-medium',
    'btn-large'
]

const FIXED = [
  'fixed',
  'not-fixed'
]


const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonFixed, className, }) => {


    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    const checkButtonFixed = FIXED.includes(buttonFixed) ? buttonFixed : FIXED[0]



  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonFixed} ${className}`} onClick={onClick} type={type}>{children}</button>
  )
}

export default Button