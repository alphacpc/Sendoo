import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";




function App() {

  return (
    <Router>
  
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/register"><Register/></Route>
        <Route path="/login"><Login/></Route>
      </Switch>

    </Router>
  );
}

export default App;