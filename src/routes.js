//Libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

export default (
  <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/wizard' component={Wizard}/>
    <Route path='*' render={() => <h1>404</h1>}/>
  </Switch>
);