import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Write from './write';
import Edit from './edit';
import DateCollection from './dateCollection';
import Test from './test';
import LandingPage from './landingPage';


const EntryRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/write" component={Write} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/dateCollection" component={DateCollection} />
            <Route path="/test" component={Test} />
        </Switch>
    </BrowserRouter>
);

export default EntryRoute;