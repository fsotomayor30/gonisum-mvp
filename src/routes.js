//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import stages from './views/stages';
import profile from './views/profile';
import admin from './views/admin';
import newIniciative from './views/newIniciative';
import listAprovedIniciatives from './views/listAprovedIniciatives';
import detailIniciative from './views/detailIniciative';
import detailIniciativeSuccess from './views/detailIniciativeSuccess';
import formIniciativeSuccess from './views/formIniciativeSuccess';
import listCommitteeIniciatives from './views/listCommitteeIniciatives';
import listSuccessIniciatives from './views/listSuccessIniciatives';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={stages} />
            <Route exact path="/profile" component={profile} />
            <Route exact path="/admin" component={admin} />
            <Route exact path="/newiniciative" component={newIniciative} />
            <Route exact path="/listAprovedIniciatives" component={listAprovedIniciatives} />
            <Route exact path="/detailIniciative/:id" component={detailIniciative} />
            <Route exact path="/detailIniciativeSuccess/:id" component={detailIniciativeSuccess} />
            <Route exact path="/formIniciativeSuccess" component={formIniciativeSuccess} />
            <Route exact path="/listCommitteeIniciatives" component={listCommitteeIniciatives} />
            <Route exact path="/listSuccessIniciatives" component={listSuccessIniciatives} />
        
        </Switch>
    </App>;


export default AppRoutes;
