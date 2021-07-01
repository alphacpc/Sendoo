import React from 'react';
import Image from "./../assets/images/banniere.jpg";
import { FcPlus  } from "react-icons/fc";
import SlideBarLeft from "./../components/slideBarLeft";
import UserNavbar from "./../components/UserNavbar";
import "./../assets/sass/settingAccount.scss";
import "./../assets/sass/newPost.scss";

const NewPost = () => {
    return (
        <div className="mainContainer">
            <SlideBarLeft className="mainContentLeft"/>


            <div className="mainContentRight">
                <UserNavbar/>

                <div className="mainContentSection">
                    <h2 className="titleNewArticle">Nouveau article</h2>
                    <img src={Image} alt="image de couverture" />

                    <form className="FormNewPost">
                        <div className="FormGroup">
                            <label><FcPlus /></label>
                            
                            <input 
                                type="file" 
                                name="fileImage" 
                                id="fileImage"  
                                style={{display:"none"}}
                            />
                            
                            <input 
                                type="text" 
                                name="postTitle" 
                                id="postTitle"
                                placeholder="Titre de l'article" 
                                autoFocus= {true}
                            />
                        </div>

                        <div className="FormGroup col-md-4">
                            
                            <select name="pets" id="pet-select" className="form-control">
                                <option value="">Veuillez choisir la categorie de l'article</option>
                                <option value="politique">Politique</option>
                                <option value="religion">Religion</option>
                                <option value="education">Education</option>
                                <option value="sport">Sport</option>
                                <option value="social">Social</option>
                                <option value="Environnement">Environnement</option>
                            </select>
                        </div>
                        
                        <div className="FormGroup">
                            <textarea 
                                name="postText" 
                                id="postText"
                                placeholder="Entrer votre texte ..." 
                            ></textarea>
                        </div>

                       

                        <button className="btnPublier" type="submit">Publier</button>
                    </form>
                </div>
            </div>

        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    )
}

export default NewPost
