import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Restaurants from './Restaurants/Restaurants'
import Math from './Math/Math'
import Profile from './Profile/Profile'

function SCG() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/math">
          <Math />
        </Route>
        <Route path="/">
          <Restaurants />
        </Route>
      </Switch>
    </Router>
  );
}

export default SCG;
