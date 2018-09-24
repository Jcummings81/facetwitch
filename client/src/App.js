import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import FetchTwitches from './components/FetchTwitches';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/twitches" component={FetchTwitches} />
    <Route component={NoMatch} />
  </Switch>
)


export default App;