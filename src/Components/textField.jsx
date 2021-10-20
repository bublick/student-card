import { React, useState } from 'react'
import PropTypes from 'prop-types'

const TextField = ({
    label,
    type,
    name,
    value,
    onChange,
    error,
    placeholder,
}) => {
    const [showPassword, setShowPassword] = useState(false)

    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '')
    }
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }
    return (
        <div className='mb-4'>
            <label htmlFor={name}>{label}</label>
            <div className='input-group has-validation'>
                <input
                    type={showPassword ? 'text' : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={getInputClasses()}
                />
                {type === 'password' && (
                    <button
                        className='btn btn-ouline-secondary'
                        type='button'
                        onClick={toggleShowPassword}
                    ></button>
                )}
                {error && <div className='invalid-feedback'>{error}</div>}
            </div>
        </div>
    )
}

TextField.defaultProps = {
    type: 'text',
}

export default TextField
