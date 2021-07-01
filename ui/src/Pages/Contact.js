import Maps from "./../assets/images/maps.png";
import "./../assets/sass/Contact.scss";

export default function Contact() {
    return (
        <div className="ContactContainer">
            
            <div className="ContactBanniere">
                <img src={Maps} alt="Image de banniere pour la page de contact" />
            </div>

            <div className="ContactGroup">
                <div className="ContactGroupItem">
                    <h2>Telephone</h2>
                    <span>77 229 79 39</span>
                </div>

                <div className="ContactGroupItem">
                    <h2>Adresse e-mail</h2>
                    <span>alphacpc@gmail.com</span>
                </div>

                <div className="ContactGroupItem">
                    <h2>Adresse domicile</h2>
                    <span>Dakar, SN</span>
                </div>

                <div className="ContactGroupItem">
                    <h2>Profession</h2>
                    <span>Developpeur Web/Mobile</span>
                </div>
                
            </div>
        </div>
    )
}
