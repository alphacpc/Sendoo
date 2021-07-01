import '../assets/sass/SlideRight.scss';
import Avatar from "./../assets/images/avatar1.jpg";

export default function SlideRight() {
    return (
        <div className="SlideRight">
            
            {/* Premier Item */}
            <div className="slideItem about_me">
                <div className="slideItemTitle">
                    <h3>Presentation</h3>
                </div>
                <div className="slideItemContent">
                    <img src={Avatar} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Odio rem illo corporis 
                        asperiores facere error nam in pariatur, 
                        consectetur esse quis incidunt molestiae, 
                        sequi atque aspernatur dolorem quas enim porro?
                    </p>
                </div>
            </div>

        </div>
    )
}
