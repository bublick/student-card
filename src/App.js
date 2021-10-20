import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AddNew from './Layouts/addNew'
import HomePage from './Layouts/homePage'

const App = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/addnew' component={AddNew} />
            </Switch>
        </>
    )
}

export default App
