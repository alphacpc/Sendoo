import "./../assets/sass/Login.scss";
import Logo from "./../assets/images/Logo/Sendoo4.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";



export default function Login() {
    return (
        <div className="LoginContainer">
            
            <div className="goHome">
                <Link to="/" className="goHomeLinke"><FaHome size={24} color="yellow"/></Link>
            </div>

            <form className="LoginForm">
                <div className="LoginImage">
                    <img src={Logo} alt="Logo de Sendoo"/>
                </div>

                <div className="LoginFormGroup">
                    <input 
                        type="text"
                        id="identifiant"
                        name="identifiant"
                        placeholder="Email ou nom d'utilisateur"/>
                </div>

                <div className="LoginFormGroup">
                    <input 
                        type="password"
                        id="mdp"
                        name="mdp"
                        placeholder="Entrer votre mot de passe" />
                </div>

                <div className="LoginFormGroup">
                    <button className="bntLogin">se connecter</button>
                    
                    <p className="notCompte">Vous n'avez pas de compte! <Link to="/register">Cree un compte</Link></p>
                </div>

            </form>
        </div>
    )
}
