import React from 'react'

import dollarIcon from '../images/icon-dollar.svg'
import personIcon from '../images/icon-person.svg'

const TextInputField = ({
    label,
    labelFor,
    type,
    placeholder,
    icon,
    iconAlt,
    value,
    onChange,
}) => {
    return (
        <div className="form-group">
            <div className="form-group__form-label">
                <label htmlFor={labelFor}>{label}</label>
                <p className="error">Can't be zero</p>
            </div>
            <div className="form-group__form-control">
                <div className="image-box">
                    <img
                        src={
                            icon === 'dollar'
                                ? dollarIcon
                                : icon === 'person'
                                ? personIcon
                                : ''
                        }
                        alt={iconAlt}
                    />
                </div>
                <input
                    type={type}
                    id={labelFor}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default TextInputField
