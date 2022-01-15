import React from 'react';

import "./../assets/sass/Loader.scss";
import imgLogo from "./../assets/images/Logo/Sendoo4.png";



const Loader = () => {
    return (
        <div className='divLoader'>
            <div className='divImg'>
                <img src={imgLogo}/>
            </div>        
        </div>
    )
}

export default Loader;
