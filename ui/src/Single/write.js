import Image from "./../assets/images/banniere.jpg";
import "./../assets/sass/write.scss";
import { FcPlus  } from "react-icons/fc";


export default function write() {
    return (
        <div className="WriteContainer">
            <img src={Image} alt="image de couverture" />

            <form className="WriteForm">
                <div className="WriteFormGroup">
                    <label>
                        <FcPlus />
                    </label>
                    
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
                
                <div className="WriteFormGroup">
                    <label></label>
                    <textarea 
                        name="postText" 
                        id="postText"
                        placeholder="Entrer votre texte ..." 
                    ></textarea>
                </div>

                <button className="btnPublier" type="submit">Publier</button>
            </form>
        </div>
    )
}
