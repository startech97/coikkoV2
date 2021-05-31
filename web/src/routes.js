import React from 'react'
import Home from './containers/Home/Home'
import Auth from './containers/Auth/Auth'
import Results from './containers/Results/Results'
import { Switch,Route,Redirect } from 'react-router'
export const useRoutes = (isAuthenticated) => {
    if(isAuthenticated) {
        return (
            <Switch>
            <Route path='/auth' component={Auth}/>
            <Route path='/results' component={Results}/>
            <Route path='/home' component={Home}/>
            <Redirect to="/home"/>
            </Switch>
        )
    }
    return(
        <Switch>
            <Route path='/auth' component={Auth}/>
            <Route path='/home' component={Home}/>
        </Switch>
    )
}