import React from 'react'

const Button = ({ label, btnClass, action, disabled }) => {
    const disabledVal = !disabled ? 'disabled' : ''
    return (
        <>
            <button
                className={'mt-4 m-1 btn ' + btnClass}
                onClick={action}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}

export default Button

Button.default = {
    label: 'Кнопка',
}
