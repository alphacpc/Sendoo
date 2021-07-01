import '../assets/sass/Home.scss';
import Header from "../components/Header";
import Posts from "../components/Posts";
import Navbar from "../components/Navbar";
import img4 from "./../assets/images/post4.jpg";
import img1 from "./../assets/images/post1.jpg";
import img2 from "./../assets/images/post3.jpg";
import logo from "./../assets/images/Logo/Sendoo4.png";

import { FaCar } from "react-icons/fa";


export default function Home() {
    return (
        <div className="HomPage">
            <Navbar/>

            <Header/>

            <div className="HomeContainer container pt-4 pb-4">
                {/* Layout 2column */}
                <div className="Layout-2col">
                    <div className="row row-2col">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-maj">
                            <div className="row post-item-maj">
                                <div className="col-md-6 img-post">
                                    <img src={img4}/>
                                </div>
                                <div className="col-md-6 infos-post">
                                    <div><FaCar/><span className="category-post">Category</span></div>
                                    <h3 className="title-post">Titre de l'article</h3>
                                    <p className="paragraph-post">
                                    Le lorem ipsum est, en imprimerie, une suite 
                                    de mots sans signification utilisée à titre 
                                    provisoire pour calibrer une mise en page, 
                                    le texte définitif...
                                    </p>
                                    <div className="author-post">
                                        <div>
                                            <img src={logo} alt="" />
                                            <span className="username-post">pie444</span>
                                        </div>
                                        <span>Il y a 2jours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-min infos-post">
                            <div><FaCar/><span className="category-post">Category</span></div>
                            <h3 className="title-post">Titre de l'article</h3>
                            <p className="paragraph-post">
                                Le lorem ipsum est, en imprimerie, une suite 
                                de mots sans signification utilisée à titre 
                                provisoire pour calibrer une mise en page, 
                                le texte définitif...
                            </p>
                            <div className="author-post">
                                <div>
                                    <img src={logo} alt="" />
                                    <span className="username-post">pie444</span>
                                </div>
                                <span>Il y a 2jours</span>
                            </div>
                        </div>
                    </div>
                    

                    <div className="row row-2col">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-maj">
                            <div className="row post-item-maj">
                                <div className="col-md-6 img-post">
                                    <img src={img1}/>
                                </div>
                                <div className="col-md-6 infos-post">
                                    <div><FaCar/><span className="category-post">Category</span></div>
                                    <h3 className="title-post">Titre de l'article</h3>
                                    <p className="paragraph-post">
                                    Le lorem ipsum est, en imprimerie, une suite 
                                    de mots sans signification utilisée à titre 
                                    provisoire pour calibrer une mise en page, 
                                    le texte définitif...
                                    </p>
                                    <div className="author-post">
                                        <div>
                                            <img src={logo} alt="" />
                                            <span className="username-post">pie444</span>
                                        </div>
                                        <span>Il y a 2jours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-min infos-post">
                            <div><FaCar/><span className="category-post">Category</span></div>
                            <h3 className="title-post">Titre de l'article</h3>
                            <p className="paragraph-post">
                                Le lorem ipsum est, en imprimerie, une suite 
                                de mots sans signification utilisée à titre 
                                provisoire pour calibrer une mise en page, 
                                le texte définitif...
                            </p>
                            <div className="author-post">
                                <div>
                                    <img src={logo} alt="" />
                                    <span className="username-post">pie444</span>
                                </div>
                                <span>Il y a 2jours</span>
                            </div>
                        </div>
                    </div>
                    

                    

                </div>
                
                
                
                
                {/* Layout 3column */}
                {/* Separator */}
                {/* Layout 3column full bg */}
                {/* Layout 2column */}

                
            </div>
        </div>
    )
}
