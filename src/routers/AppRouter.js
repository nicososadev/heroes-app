import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginPage } from '../components/login/LoginPage';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path='/login' isAuthenticated={ user.logged } component={ LoginPage } />
                    <PrivateRoute path='/' isAuthenticated={ user.logged } component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
