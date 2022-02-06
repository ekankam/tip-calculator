import React from 'react'

const Button = ({ className, buttonType, buttonText, onClick }) => {
    return (
        <button className={className} type={buttonType} onClick={onClick}>
            {buttonText}
        </button>
    )
}

export default Button
