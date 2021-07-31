import '../assets/sass/Home.scss';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Category from '../components/Category';
import ListLinkCategory from '../components/ListLinkCategory';
import SendooBanner from '../components/SendooBanner';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <div className="HomPage">
            <Navbar/>

            <Header/>

            <ListLinkCategory />

            <Category />

            <Category />

            <Category />

            <Category />
            
            <SendooBanner/>


            <Category />

            <Category />

            <Footer/>
                
        </div>
    )
}
