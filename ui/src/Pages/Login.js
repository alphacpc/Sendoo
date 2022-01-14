import React , { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import "./../assets/sass/Login.scss";
import Logo from "./../assets/images/Logo/Sendoo4.png";
import { FaHome } from "react-icons/fa";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Login() {

  const signinInit = {
    "identifiant" : "",
    "password" : ""
  }

  const [signin, setSignin ] = useState(signinInit);
  const [submited, setSubmited ] = useState(false);
  const [msgError, setError ] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setSignin({...signin , [e.target.id] : e.target.value });

  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(signin);
    setSubmited(true);

    try{
      const user = await axios.post("auth/connexion", signin);
      await setTimeout(()=>{
        history.push("/account")      
      },2000)
    }
    catch(err){
      setError("Email(ou nom d'utilisateur) ou mot de passe incorrect !")
    }
  }

  const checkBtnSubmit = () => {
    
    for(let key of Object.keys(signin)){
         if(signin[key] === ""){
           return <button className="bntLogin" disabled>se connecter</button>;
         }
    }

    return <button className="bntLogin" type="submit">se connecter  
      { submited ? <CircularProgress  size={10} /> : null}
    </button>;
  }


  return (
    <div className="LoginContainer">
      <div className="goHome">
        <Link to="/" className="goHomeLinke">
          <FaHome size={44} color="white" />
        </Link>
      </div>

      <form className="LoginForm" method="POST" onSubmit={ handleSubmit }>
        <div className="LoginImage">
          <img src={Logo} alt="Logo de Sendoo" />
        </div>

        <div className="divHandleMessage LoginPage">
          { msgError != "" && <p className="paraError">{msgError}</p>}
        </div>

        <div className="LoginFormGroup">
          <input  type="text" id="identifiant" name="identifiant"
                  placeholder="Email ou nom d'utilisateur" onChange={ handleChange }/>
        </div>

        <div className="LoginFormGroup">
          <input  type="password" id="password" name="password"
                  placeholder="Entrer votre mot de passe" onChange={ handleChange }/>
        </div>

        <div className="LoginFormGroup">
          
          { checkBtnSubmit() }

          <p className="notCompte">
            Vous n'avez pas de compte!{" "}
            <Link to="/register">Cree un compte</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
