import Button from '../Components/button'
import { React, useState, useEffect } from 'react'
import TextField from '../Components/textField'
import SelectField from '../Components/selectField'
import { validator } from '../utils/validate'
import { useHistory } from 'react-router'
import Modal from '../Components/modal'
import { stType as stTypeValues } from '../Data/studyType'

const AddNew = () => {
    const history = useHistory()

    const handleLinkBack = () => {
        history.replace('/')
    }

    const handleExitAction = () => {
        history.push('/')
    }

    const [showPopup, setShowPopup] = useState(0)

    const [data, setData] = useState(
        localStorage.student
            ? JSON.parse(localStorage.student)
            : {
                  name: '',
                  lastName: '',
                  yearOfBirth: '',
                  portfolio: '',
                  stType: '',
              }
    )
    const [errors, setErrors] = useState({})
    const isEditPage = localStorage.student ? true : false

    const handleAddNew = (object) => {
        const student = {
            name: object.name,
            lastName: object.lastName,
            yearOfBirth: object.yearOfBirth,
            portfolio: object.portfolio,
            stType: object.stType,
        }
        localStorage.setItem('student', JSON.stringify(student))
        setShowPopup(1)
    }

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    const validatorConfig = {
        name: {
            isRequired: {
                message: 'Поле имя обязательно для заполнения',
            },
        },
        lastName: {
            isRequired: {
                message: 'Поле фамилия обязательно для заполнения',
            },
        },
        yearOfBirth: {
            isRequired: {
                message: 'Поле дата рождения обязательно для заполнения',
            },
            isNumb: {
                message: 'Поле дата рождения должно быть числом',
            },
            isValidNumb: {
                message: 'Значение поля дата рождения не корректно',
            },
        },
        portfolio: {
            isRequired: {
                message: 'Поле портфолио обязательно для заполнения',
            },
            isLink: {
                message:
                    'Поле портфолио должно быть ссылкой и начинаться с http или https',
            },
        },
        stType: {
            isRequired: {
                message: 'Необходимо выбрать форму обучения',
            },
        },
    }

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        for (const fieldName in data) {
            if (data[fieldName].trim() === '') {
                errors[fieldName] =
                    validatorConfig[fieldName].isRequired.message
            }
        }

        setErrors(errors)
        return Object.keys(errors).length !== 0
    }

    const isValid = Object.keys(errors).length !== 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (isValid) return
    }

    return (
        <>
            <div className='container mt-2'>
                {isEditPage ? <h1>Редактирование</h1> : <h1>Создать</h1>}
                <TextField
                    label='Имя'
                    type='text'
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    label='Фамилия'
                    type='text'
                    name='lastName'
                    value={data.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                />
                <TextField
                    label='Год рождения'
                    type='text'
                    name='yearOfBirth'
                    value={data.yearOfBirth}
                    onChange={handleChange}
                    error={errors.yearOfBirth}
                />
                <SelectField
                    label='Тип обучения'
                    name='stType'
                    values={stTypeValues}
                    selected={data.stType}
                    onChange={handleChange}
                    error={errors.stType}
                />
                <TextField
                    label='Портфолио'
                    type='text'
                    name='portfolio'
                    value={data.portfolio}
                    onChange={handleChange}
                    error={errors.portfolio}
                />

                {isEditPage ? (
                    <Button
                        label='Назад'
                        btnClass='btn-secondary'
                        disabled={isValid}
                        action={() => handleLinkBack()}
                    />
                ) : null}
                <Button
                    label={isEditPage ? 'Обновить' : 'Создать'}
                    btnClass='btn-primary'
                    disabled={isValid}
                    action={() => handleAddNew(data)}
                />
            </div>
            <Modal
                title='Обновлено'
                text='Запись о студенте обновлена'
                exitText='Ок!'
                exitAction={handleExitAction}
                showPopup={showPopup}
            />
        </>
    )
}

export default AddNew
