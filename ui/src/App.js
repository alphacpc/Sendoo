import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Context } from "./context/Context";

import './assets/sass/FixedNavbar.scss';
import './assets/sass/App.scss';

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MoreCategory from "./Pages/MoreCategory";
import SinglePost from "./Pages/SinglePost";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Account from "./Pages/Account";
import MyPosts from "./Pages/MyPosts";
import SettingProfile from "./Pages/SettingProfile";
import UpdatePost from "./Pages/UpdatePost";
import WritePost from "./Pages/WritePost";
import ResetPassword from "./Pages/ResetPassword";

import FourToFour from "./Pages/404";

function App() {

  const {user} = useContext(Context);

  window.addEventListener('scroll', ()=>{
      const navFixedElement = document.getElementById('navbar-fixed');
      const arrowElement = document.querySelector('.Arrow');

      if(window.scrollY > 100){
        navFixedElement && navFixedElement.classList.add('active');
        (window.scrollY > 1444 ) ? arrowElement && arrowElement.classList.add('visible') : arrowElement && arrowElement.classList.remove('visible');;
      }
      else{
          navFixedElement && navFixedElement.classList.remove('active');
      }
  });


  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/register">{user? <Home/> :  <Register />}</Route>
        <Route path="/login">{user? <Home/> :  <Login />}</Route>
        <Route path="/category/:postCategory"><MoreCategory /></Route>
        <Route path="/single-post/:postID"><SinglePost /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/account">{user? <Account /> : <Login/>}</Route>
        <Route path="/setting">{user? <SettingProfile /> : <Login/>}</Route>
        <Route path="/write">{user? <WritePost /> : <Login/>}</Route>
        <Route path="/update">{user? <UpdatePost /> : <Login/>}</Route>
        <Route path="/posts">{user? <MyPosts /> : <Login/>}</Route>
        <Route path="/password">{user? <ResetPassword /> : <Login/>}</Route>
        <Route path="*"><FourToFour /></Route>
      </Switch>
    </Router>
  );
}

export default App;
