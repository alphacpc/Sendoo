import React from 'react';
import { Link } from 'react-router-dom';
import Banniere from "./../assets/images/banniere.jpg";
import "./../assets/sass/Post.scss";


export default function Post() {
    return (
        <div className="PostItem">
            <img src={Banniere} alt="" />
            <div className="PostItemContent">
                <h3 className="PostTitle"><Link to="/article/564686465">Titre de l'article</Link></h3>
                <p className="PostMessage">Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Molestiae quas sit consequuntur 
                amet magnam sunt dolorum ut minus dolores officia 
                minima nesciunt ipsum explicabo libero assumenda 
                recusandae expedita, asperiores quidem.</p>
                <div className="PostInfos">
                    <span className="PostCateg"><Link to="/">Education</Link></span>
                    <span className="PostDate">02.10.2021</span>
                </div>        
            </div>
        </div>
    )
}
