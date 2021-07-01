import '../assets/sass/Navbar.scss';
import Logo from "../assets/images/Logo/Sendoo4.png";
import { Link } from 'react-router-dom';
import { FaUserShield, FaUserAlt, FaUserPlus, FaUser  } from "react-icons/fa";


export default function Navbar(){
    return (
        <div className="Navbar">
            
            <div className="NavLogo">
                <Link to="/"><img src={Logo}/></Link>
            </div>
            
            <div className="NavLink">
                <ul>
                    <li className="NavListItem"><Link className="Link" to="/">Accueil</Link></li>
                    <li className="NavListItem"><Link className="Link" to="/apropos">A propos</Link></li>
                    {/* <li className="NavListItem"><Link className="Link" to="/ecrire">Ecrire</Link></li> */}
                    <li className="NavListItem"><Link className="Link" to="/contact">Archives</Link></li>
                    <li className="NavListItem"><Link className="Link" to="/contact">Decouverte</Link></li>
                    <li className="NavListItem"><Link className="Link" to="/contact">Contact</Link></li>
                </ul>
                <div>
                    <Link className="Link" id="signin" to="/inscription"><FaUserPlus/></Link>
                    <Link className="Link" id="signup" to="/connexion"><FaUserShield/></Link>
                </div>
            </div>
            
        </div>
    )
}
