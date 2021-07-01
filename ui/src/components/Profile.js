import React from 'react';
import Image from "./../assets/images/post1.jpg"
import { FcCameraAddon  } from "react-icons/fc";

const Profile = () => {
    return (
        <div className="SettingContainer">
            
            <div className="SettingContent">
                <div className="SettingTitle">
                    <span className="SettingTitleUpate">Compte : N0154685454654</span>
                </div>
                
                <form className="SettingForm">
                    <div className="SettingFormGrou PhotoProfile">
                        <label><FcCameraAddon/> Photo profile</label>
                        <img src={Image} alt="photo profile" />
                    </div>
            
            <div className="FormGroupFlex">
            
                    <div className="SettingFormGroup">
                        <div className="SettingFormGroupItem">
                            <label htmlFor="firstname">Prenom</label>
                            <input type="text" id="firstname" name="firstname"/>
                        </div>
                        <div className="SettingFormGroupItem">
                            <label htmlFor="lastname">Nom de famille</label>
                            <input type="text" id="lastname" name="lastname"/>
                        </div>
                    </div>


                    <div className="SettingFormGroup">
                        
                        <div className="SettingFormGroupItem">
                            <label htmlFor="email">Sexe</label>
                            <input type="email" id="email" name="email"/>
                        </div>

                        <div className="SettingFormGroupItem">
                            <label htmlFor="username">Numero de telephone</label>
                            <input type="text" id="username" name="username"/>
                        </div>
                    </div>

                    <div className="Password">
                        <div className="SettingFormGroupItem">
                            <label htmlFor="mdp">Adresse domicile</label>
                            <input type="text" id="mdp" name="mdp"/>
                        </div>
                    </div>

                    <div className="SettingFormGroup">
                        <div className="SettingFormGroupItem">
                            <label htmlFor="username">Nom d'utilisateur</label>
                            <input type="text" id="username" name="username"/>
                        </div>
                        <div className="SettingFormGroupItem">
                            <label htmlFor="email">Adresse e-mail</label>
                            <input type="email" id="email" name="email"/>
                        </div>
                    </div>


                    <div className="Password">
                        <div className="SettingFormGroupItem">
                            <label htmlFor="mdp">Mot de passe</label>
                            <input type="password" id="mdp" name="mdp"/>
                        </div>
                        <div className="SettingFormGroupItem">
                            <label htmlFor="mdpc">Confirmer votre mot de passe</label>
                            <input type="password" id="mdpc" name="mdpc"/>
                        </div>
                    </div>


            </div>

                    
                </form>
            </div>
            
        </div>
    )
}

export default Profile
