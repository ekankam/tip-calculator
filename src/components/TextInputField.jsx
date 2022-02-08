import React from 'react'

import dollarIcon from '../images/icon-dollar.svg'
import personIcon from '../images/icon-person.svg'

const TextInputField = ({
    label,
    labelFor,
    type,
    placeholder,
    className,
    icon,
    iconAlt,
    value,
    name,
    onChange,
}) => {
    return (
        <div className="form-group">
            <div className="form-group__form-label">
                <label htmlFor={labelFor}>{label}</label>
                <p className={className}>Can't be zero</p>
            </div>
            <div
                className={
                    value === '0'
                        ? 'form-group__form-control border-red'
                        : 'form-group__form-control border-green'
                }
            >
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
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default TextInputField
