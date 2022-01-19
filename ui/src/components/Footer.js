import "./../assets/sass/Footer.scss";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="SocialLinks">
        <Link id="Discord" to="/">
          <FaDiscord /> Discord
        </Link>
        <Link id="Github" to="/">
          <FaGithub /> Github
        </Link>
        <Link id="Linkedin" to="/">
          <FaLinkedin /> LinkedIn
        </Link>
        <Link id="Whatsapp" to="/">
          <FaWhatsapp /> Whatsapp
        </Link>
        <Link id="Youtube" to="/">
          <FaYoutube /> Youtube
        </Link>
      </div>
      <div className="TextFooter">
        <p>{year} Copyright ! Template developpe par alphacpc "Développeur Full Stack"</p>
      </div>
    </footer>
  );
}
