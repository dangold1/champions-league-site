import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import TeamPage from '../pages/TeamPage';
import TeamsPage from '../pages/TeamsPage';

const Routes = props => {
    return (
        <Switch>  
            <Route exact path="/teams" component={TeamsPage} />
            <Route exact path="/teams/:id" component={TeamPage} />
            <Redirect from="/" to="/teams" />
        </Switch>
    )
}

export default Routes;
