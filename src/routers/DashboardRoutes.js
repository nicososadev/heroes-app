import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcPage } from '../components/dc/DcPage'
import { HeroPage } from '../components/heroes/HeroPage'
import { MarvelPage } from '../components/marvel/MarvelPage'
import { SearchPage } from '../components/search/SearchPage'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
    return (
        <Fragment>
            <Navbar />

            <div className="container mt-3">
                <Switch>
                    <Route exact path='/marvel' component={ MarvelPage } />
                    <Route exact path='/dc' component={ DcPage } />
                    <Route exact path='/hero/:heroId' component={ HeroPage } />
                    <Route exact path='/search' component={ SearchPage } />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </Fragment>
    )
}
