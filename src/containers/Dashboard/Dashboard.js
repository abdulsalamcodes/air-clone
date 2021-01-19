import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'
import Home from '../Home/Home'
import SearchPage from '../SearchPage/SearchPage'
import "./Dashboard.css"
import PageLayout from '../Layout/PageLayout'
import Workspace from '../Workspace/Workspace'

function Dashboard() {
    return (
        <div className="dashboard">
            <Navigation />
            <PageLayout>
                <Switch>
                    <Route exact path="/search">
                        <SearchPage />
                    </Route>
                    
                    <Route  path="/workspace-boards/:collection">
                        <Workspace />
                    </Route>

                    <Route path="/workspace-boards">
                        <Workspace />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </PageLayout>
        </div>
    )
}

export default Dashboard
