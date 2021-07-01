import React from 'react';
import Image from "./../assets/images/post1.jpg";
import { Link } from 'react-router-dom';
import { FaBars  } from "react-icons/fa";

const slideBarLeft = () => {
    return (
        <div className="slideBarLeft text-white">
        <span className="slideIcon"><FaBars size={40}/></span>

        <div className="userProfile">
            <img src={Image} alt="photo profile" />
            <h4>Ajda lisa DIOUF</h4>
            <p>Ingenieure en Bio-alimentaire</p>
            
        </div>
        
        <div className="linksAccount">
            <ul>
                <li className="NavListItem"><Link className="Link" to="/account">Mon profile</Link></li>
                <li className="NavListItem"><Link className="Link" to="/new-post">Ecrire un article</Link></li>
                <li className="NavListItem"><Link className="Link" to="/posts">Mes articles</Link></li>
                <li className="NavListItem"><Link className="Link" to="/update">Mettre a jour</Link></li>
            </ul>
        </div>

        <div className="backHome">
            <span><Link to="/">Accueil</Link></span>
        </div>
    </div>
    )
}

export default slideBarLeft
