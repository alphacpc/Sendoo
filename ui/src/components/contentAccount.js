import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  import Setting from './../Pages/Setting';
  import Profile from "./../components/Profile";
  


const contentAccount = () => {
    return (
        <Router>
      
            <Switch>
                <Route path="/account"><Profile /></Route>
                <Route path="/account/posts"><Setting /></Route>
                <Route path="/update"><Setting /></Route>
            </Switch>
  
        </Router>
    )
}

export default contentAccount
