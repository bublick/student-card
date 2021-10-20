import React from 'react'
import Button from './button'

const EmptyUser = ({ onAddUser = onAddUser }) => {
    return (
        <>
            <div>Нет данных</div>
            <Button
                label='Добавить'
                btnClass='btn-primary'
                action={onAddUser}
            />
        </>
    )
}

export default EmptyUser
