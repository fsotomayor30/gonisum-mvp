//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import stages from './components/stages';


const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={stages} />
            <Route exact path="/iniciatives" component={stages} />
        </Switch>
    </App>;


export default AppRoutes;
