import React from 'react'

const SelectField = ({ label, name, values, error, onChange, selected }) => {
    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '')
    }

    return (
        <div className='mb-4'>
            <label htmlFor={name}>{label}</label>
            <div className='input-group has-validation'>
                <select
                    class='form-control'
                    name={name}
                    onChange={onChange}
                    className={getInputClasses()}
                >
                    <option disabled selected value>
                        -- выберете форму обучения студента --
                    </option>
                    {Object.keys(values).map((value) => {
                        return (
                            <option
                                value={values[value]['type']}
                                selected={
                                    values[value]['type'] === selected
                                        ? 'selected'
                                        : ''
                                }
                            >
                                {values[value]['name']}
                            </option>
                        )
                    })}
                </select>

                {error && <div className='invalid-feedback'>{error}</div>}
            </div>
        </div>
    )
}

export default SelectField
