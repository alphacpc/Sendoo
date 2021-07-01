import React from 'react';
import "./../assets/sass/Account.scss";
import SlideBarLeft from "./../components/slideBarLeft";
import UserNavbar from "./../components/UserNavbar";
import { FcCameraAddon  } from "react-icons/fc";
import Image from "./../assets/images/post1.jpg"
import "./../assets/sass/settingAccount.scss";
import "./../assets/sass/Profile.scss";



const Account = () => {
    return (
        <div className="mainContainer">
            <SlideBarLeft className="mainContentLeft"/>


            <div className="mainContentRight">
                <UserNavbar/>

                <div className="mainContentSection">
                <div className="ProfileTitle">
                    <span className="ProfileTitleUpate">Compte : N0154685454654</span>
                </div>
                
                <form className="ProfileForm">
                    <div className="ProfileFormGrou PhotoProfile">
                        <label><FcCameraAddon/> Photo profile</label>
                        <img src={Image} alt="photo profile" />
                    </div>
            
            <div className="FormGroupFlex">
            
                    <div className="ProfileFormGroup">
                        <div className="ProfileFormGroupItem">
                            <label htmlFor="firstname">Prenom</label>
                            <input type="text" id="firstname" name="firstname"/>
                        </div>
                        <div className="ProfileFormGroupItem">
                            <label htmlFor="lastname">Nom de famille</label>
                            <input type="text" id="lastname" name="lastname"/>
                        </div>
                    </div>


                    <div className="ProfileFormGroup">
                        
                        <div className="ProfileFormGroupItem">
                            <label htmlFor="email">Sexe</label>
                            <input type="email" id="email" name="email"/>
                        </div>

                        <div className="ProfileFormGroupItem">
                            <label htmlFor="username">Numero de telephone</label>
                            <input type="text" id="username" name="username"/>
                        </div>
                    </div>

                    <div className="Password">
                        <div className="ProfileFormGroupItem">
                            <label htmlFor="mdp">Adresse domicile</label>
                            <input type="text" id="mdp" name="mdp"/>
                        </div>
                    </div>

                    <div className="ProfileFormGroup">
                        <div className="ProfileFormGroupItem">
                            <label htmlFor="username">Nom d'utilisateur</label>
                            <input type="text" id="username" name="username"/>
                        </div>
                        <div className="ProfileFormGroupItem">
                            <label htmlFor="email">Adresse e-mail</label>
                            <input type="email" id="email" name="email"/>
                        </div>
                    </div>


                    <div className="Password">
                        <div className="ProfileFormGroupItem">
                            <label htmlFor="mdp">Mot de passe</label>
                            <input type="password" id="mdp" name="mdp"/>
                        </div>
                        <div className="ProfileFormGroupItem">
                            <label htmlFor="mdpc">Confirmer votre mot de passe</label>
                            <input type="password" id="mdpc" name="mdpc"/>
                        </div>
                    </div>


            </div>

                    
                </form>
            </div>

            </div>

        </div>
    )
}

export default Account;