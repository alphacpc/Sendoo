import { Link } from "react-router-dom"



const Breadcrumb = () => {
    return (
        <div>
            <ul>
                <li><Link>Accueil</Link></li>
                <span>></span>
                <li><span>Education</span></li>
            </ul>
        </div>
    )
}

export default Breadcrumb
