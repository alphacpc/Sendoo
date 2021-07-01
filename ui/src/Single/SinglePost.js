import "./../assets/sass/SinglePost.scss";
import ImageCouverture from "./../assets/images/banniere/banniere2.png";
import { FaTrash, FaPencilAlt  } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function SinglePost() {
    return (
        <div className="SinglePostContainer">
            <div className="SinglePostImage">
                <img src={ImageCouverture} alt="" />
            </div>
            <div className="SinglePostTitle">
                <h2>Titre de l'articleTitre de l'article<Link to="/" className="SinglePostCat">[Education]</Link></h2>
                <div className="icon-edit-delete">
                    <Link to="/"><FaPencilAlt id="icon-edit"/></Link>
                    <Link to="/"><FaTrash id="icon-delete"/></Link>

                </div>
            </div>
            <div className="SinglePostText">
                <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Vitae aliquam, neque, 
                quos corrupti debitis tenetur rem magnam 
                doloribus, voluptate dicta veniam esse! 
                Repudiandae, tenetur quidem sunt mollitia 
                fuga voluptate. Possimus.</p>

                <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Vitae aliquam, neque, 
                quos corrupti debitis tenetur rem magnam 
                doloribus, voluptate dicta veniam esse! 
                Repudiandae, tenetur quidem sunt mollitia 
                fuga voluptate. Possimus.
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Vitae aliquam, neque, 
                quos corrupti debitis tenetur rem magnam 
                doloribus, voluptate dicta veniam esse! 
                Repudiandae, tenetur quidem sunt mollitia 
                fuga voluptate. Possimus.
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Vitae aliquam, neque, 
                quos corrupti debitis tenetur rem magnam 
                doloribus, voluptate dicta veniam esse! 
                Repudiandae, tenetur quidem sunt mollitia 
                fuga voluptate. Possimus.</p>

                <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Vitae aliquam, neque, 
                quos corrupti debitis tenetur rem magnam 
                doloribus, voluptate dicta veniam esse! 
                Repudiandae, tenetur quidem sunt mollitia 
                fuga voluptate. Possimus.
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Vitae aliquam, neque, 
                quos corrupti debitis tenetur rem magnam 
                doloribus, voluptate dicta veniam esse! 
                Repudiandae, tenetur quidem sunt mollitia 
                fuga voluptate. Possimus.
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Vitae aliquam, neque, 
                quos corrupti debitis tenetur rem magnam 
                doloribus, voluptate dicta veniam esse! 
                Repudiandae, tenetur quidem sunt mollitia 
                fuga voluptate. Possimus.</p>
            </div>

            <div className="SinglePostInfos">
                <span className="PostDate">Il y 2 heures</span>
                <span className="PostAuthor">Ecrit par <span className="PostAuthorName">Alpha</span></span>
            </div>
        </div>
    )
}
