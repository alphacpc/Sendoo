import "./../assets/sass/Register.scss";
import Logo from "./../assets/images/Logo/Sendoo4.png";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaUser, FaEnvelope, FaKey, FaLock, FaUsers  } from "react-icons/fa";



export default function Register() {
    return (
        <div className="RegisterContainer">
            
            <div className="goHome">
                <Link to="/" className="goHomeLink"><FaArrowLeft/>Accueil</Link>
            </div>

            <img src={Logo} alt="" />
           <form id="RegisterForm">
                <div className="RegisterFormGroup">
                    <div className="RegisterFormGroupItem">
                        <FaUser/>
                        <input type="text" id="firstname" name="firstname" placeholder="Entrer votre prenom"/>
                    </div>
                    <div className="RegisterFormGroupItem">
                        <FaUsers/>
                        <input type="text" id="lastname" name="lastname" placeholder="Entrer votre nom de famille"/>
                    </div>
                </div>
            
                <div className="RegisterFormGroup">
                    <div className="RegisterFormGroupItem">
                        <FaUser/>
                        <input type="text" id="username" name="username" placeholder="Entrer votre nom d'utilisateur"/>
                    </div>
                    <div className="RegisterFormGroupItem">
                        <FaEnvelope/>
                        <input type="email" id="email" name="email" placeholder="Entrer votre email"/>
                    </div>
                </div>

                <div className="RegisterFormGroup">
                    <div className="RegisterFormGroupItem">
                        <FaLock/>
                        <input type="password" id="mdp" name="mdp" placeholder="Entrer votre mot de passe"/>
                    </div>
                    <div className="RegisterFormGroupItem">
                        <FaKey/>
                        <input type="password" id="mdpc" name="mdpc" placeholder="Entrer a nouveau votre mot de passe"/>
                    </div>
                </div>

                <div className="btnSave">
                    <button>s'inscrire</button>
                </div>

                <div className="signup">
                    <p>Vous avez deja un compte ! <Link to="connexion" id="link">se connecter</Link></p>
                </div>
           </form>

        </div>
    )
}
