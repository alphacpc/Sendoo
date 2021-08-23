import "../assets/sass/Home.scss";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import SendooBanner from "../components/SendooBanner";
import Footer from "../components/Footer";

import SVG from "./../assets/images/wavesOpacity.svg";

import { ArrowDropUpOutlined } from "@material-ui/icons";

export default function Home() {
  const handleClickArrow = () => {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      window.scrollTo(0, 10);
      //console.log(currentScroll);
    }
  };


  window.addEventListener('scroll', ()=>{

    // if(document.querySelector('HomePage')){
      if(window.scrollY > 100){
        document.getElementById('navbar-fixed').classList.add('active');
  
        if(window.scrollY > 1444 && document.querySelector('HomePage')){
          document.querySelector('.Arrow').classList.add('visible');
        }else if(window.scrollY <= 1444 && document.querySelector('HomePage')){
          document.querySelector('.Arrow').classList.remove('visible');
        }
  
      }else{
        document.getElementById('navbar-fixed').classList.remove('active');
      }



    // }

  })



  return (
    <div className="HomPage">
      <Navbar />

      <Header />

      <img src={SVG} className="ImageDivider" />

      <ArrowDropUpOutlined
        className="Arrow"
        onClick={() => handleClickArrow()}
      />

      <Category />

      <Category />

      <Category />

      <Category />

      <SendooBanner />

      <Category />

      <Category />

      <Footer />
    </div>
  );
}
