import '../assets/sass/Home.scss';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Category from '../components/Category';
import ListCategory from '../components/ListCategory';



export default function Home() {
    return (
        <div className="HomPage">
            <Navbar/>

            <Header/>

            <ListCategory />

            <Category />

            <Category />

            <Category />

            <Category />

                
        </div>
    )
}
