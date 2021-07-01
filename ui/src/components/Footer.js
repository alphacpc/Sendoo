import "./../assets/sass/Footer.scss"
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube, FaDiscord  } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div>
                <p className="myName">Alpha amadou DIALLO</p>
                <span id="Tiret"></span>
                <div className="SocialLinks">
                    <Link id="Discord" to="/"><FaDiscord/></Link>
                    <Link id="Github" to="/"><FaGithub/></Link>
                    <Link id="Linkedin" to="/"><FaLinkedin/></Link>
                    <Link id="Whatsapp" to="/"><FaWhatsapp/></Link>
                    <Link id="Youtube" to="/"><FaYoutube/></Link>
                </div>
            </div>
        </footer>
    )
}
