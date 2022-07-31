import React from 'react'
import "./Button.scss"
const Button = ({buttonText,buttonType,buttonClass,...otherProps}) => {
  return (
    <button className={`button-container ${buttonClass}`} type={buttonType} {...otherProps}>
        {buttonText}
    </button>
  )
}

export default Button