import React from 'react'
import "./Button.scss"
const Button = ({buttonText,buttonType,buttonClass}) => {
  return (
    <button className={`button-container ${buttonClass}`} type={buttonType}>
        {buttonText}
    </button>
  )
}

export default Button