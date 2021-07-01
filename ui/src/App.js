import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home";
import Single from "./Single/Single";
import Write from "./Single/write";
import Setting from "./Pages/Setting";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import About from "./Pages/About";



import NewPost from "./Pages/NewPost";
import UpdateAccount from "./Pages/UpdateAccount";
import Account from "./Pages/Account";




function App() {
  const user = true;

  return (
    <Router>

      
      
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/register">{user ? <Home/> : <Register/>}</Route>
        <Route path="/login">{user ? <Home/> : <Login/>}</Route>
        <Route path="/account">{user ? <Account/> : <Login/>}</Route>
        <Route path="/wrtite">{user ? <Write/> : <Login/>}</Route>
        <Route path="/article/:postId"><Single /></Route>

        <Route exact path="/account"><Account /></Route>
        <Route exact path="/new-post"><NewPost /></Route>
        <Route exact path="/update"><UpdateAccount /></Route>

      </Switch>

    </Router>
  );
}

export default App;