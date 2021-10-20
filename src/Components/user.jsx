import React from 'react'
import FieldOutput from './fieldOutput'
import Button from './button'

const User = ({ user, onAddUser }) => {
    const handleAddUser = ({ onAddUser }) => {}

    return (
        <>
            <FieldOutput label='Имя' user={user} name='name' />
            <FieldOutput label='Фамилия' user={user} name='lastName' />
            <FieldOutput label='Год рождения' user={user} name='yearOfBirth' />
            <FieldOutput label='Форма обучения' user={user} name='stType' />
            <FieldOutput label='Портфолио' user={user} name='portfolio' />

            <Button
                label='Редактировать'
                btnClass='btn-primary'
                action={onAddUser}
            />
        </>
    )
}

export default User
