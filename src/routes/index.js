import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Read from './read';
import Write from './write';
import Edit from './edit';
import DateCollection from './dateCollection';
import Test from './test';
import LandingPage from './landingPage';
import Friday from './friday';
import Copy from './copy';


const EntryRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/friday" component={Friday} />
            <Route path="/read" component={Read} />
            <Route path="/write" component={Write} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/copy/:id" component={Copy} />
            <Route path="/dateCollection" component={DateCollection} />
            <Route path="/test" component={Test} />
        </Switch>
    </BrowserRouter>
);

export default EntryRoute;