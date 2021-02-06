import React from 'react';
import Header from './Header.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import AddJob from './AddJob/AddJob.jsx';
import TaskList from './TaskList/TaskList.jsx';
import Home from './Home/HomeComponent.jsx'

import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

const App = () => (
  <Router history={browserHistory}>
    <Header/>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/taskList" component={TaskList} />
      <Route exact path="/addJob" component={AddJob} />
      <Redirect to="home" />
    </Switch>
  </Router>
);

export default App;
