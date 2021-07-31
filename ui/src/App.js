import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MoreCategory from "./Pages/MoreCategory";
import SinglePost from "./Pages/SinglePost";
import About from "./Pages/About";
import Contact from "./Pages/Contact";



function App() {

  return (
    <Router>
  
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/register"><Register /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/category"><MoreCategory /></Route>
        <Route path="/single-post"><SinglePost /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
      </Switch>

    </Router>
  );
}

export default App;