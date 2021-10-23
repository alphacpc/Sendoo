import { useState } from "react";
import axios from "axios";

import "./../assets/sass/Register.scss";
import Logo from "./../assets/images/Logo/Sendoo4.png";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaEnvelope, FaKey, FaLock, FaUsers } from "react-icons/fa";

export default function Register() {

  const initData = {
    'firstname': '',
    'lastname' : '',
    'username': '',
    'email': '',
    'password': '',
    'passwordc': ''
  }

  const [ signunInit, setSignunInit ] = useState(initData);
  const [error, setError ] = useState("");
  const [success, setSuccess ] = useState("");

  const handleChange = (e) => {
    setSignunInit({...signunInit, [e.target.id] : e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        await axios.post("auth/inscription", signunInit);
        setSuccess("Enregistrement avec succes !");
        
    }
    catch(err){
      setSuccess(err)
    }
  }

  const checkBtnSubmit = () => {
    
    for(let key of Object.keys(signunInit)){
         if(signunInit[key] === "" || signunInit.password !== signunInit.passwordc){
           return <button disabled>s'inscrire</button>;
         }
    }

    return <button type="submit">s'inscrire</button>;
  }


  
  return (
    <div className="RegisterContainer">
      <div className="goHome">
        <Link to="/" className="goHomeLinke">
          <FaHome size={50} color="white" />
        </Link>
      </div>

      <img src={Logo} alt="" />
      <form type="POST" id="RegisterForm" onSubmit={ handleSubmit }>
        <div className="RegisterFormGroup">
          <div className="RegisterFormGroupItem">
            <FaUser color="green" />
            <input  type="text" id="firstname" name="firstname"
                    placeholder="Entrer votre prenom"
                    onChange={ handleChange } value={signunInit.firstname} />
          </div>
          <div className="RegisterFormGroupItem">
            <FaUsers color="green" />
            <input  type="text" id="lastname" name="lastname"
                    placeholder="Entrer votre nom de famille"
                    onChange={ handleChange } value={signunInit.lastname}/>
          </div>
        </div>

        <div className="RegisterFormGroup">
          <div className="RegisterFormGroupItem">
            <FaUser color="green" />
            <input  type="text" id="username" name="username"
                    placeholder="Entrer votre nom d'utilisateur"
                    onChange={ handleChange } value={signunInit.username}/>
          </div>
          <div className="RegisterFormGroupItem">
            <FaEnvelope color="green" />
            <input  type="email"  id="email"  name="email"
                    placeholder="Entrer votre email"
                    onChange={ handleChange } value={signunInit.email}/>
          </div>
        </div>

        <div className="RegisterFormGroup">
          <div className="RegisterFormGroupItem">
            <FaLock color="green" />
            <input  type="password" id="password"  name="password"
                    placeholder="Entrer votre mot de passe"
                    onChange={ handleChange } value={signunInit.mdp}/>
          </div>
          <div className="RegisterFormGroupItem">
            <FaKey color="green" />
            <input  type="password" id="passwordc" name="passwordc"
                    placeholder="Entrer a nouveau votre mot de passe"
                    onChange={ handleChange } value={signunInit.mdpc}/>
          </div>
        </div>

        <div className="btnSave">
          { checkBtnSubmit() }
        </div>

        <div className="signup">
          <p> Vous avez deja un compte !
            <Link to="login" id="link">se connecter</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
