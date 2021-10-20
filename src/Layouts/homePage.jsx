import React from 'react'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router'
import EmptyUser from '../Components/emptyUser'
import TextField from '../Components/textField'
import User from '../Components/user'

const HomePage = () => {
    const history = useHistory()

    const student = localStorage.student ? JSON.parse(localStorage.student) : ''

    let handleAddUser = () => {
        history.push('/addnew')
    }

    return (
        <div className='container mt-2'>
            <h1>Карточка</h1>
            {student ? (
                <User user={student} onAddUser={handleAddUser} />
            ) : (
                <EmptyUser onAddUser={handleAddUser} />
            )}
        </div>
    )
}

export default HomePage
