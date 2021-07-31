import { Container } from "@material-ui/core";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function About() {
    return (
        <div className="AboutContainer">
            <Navbar/>
           
            <Container>
                <Breadcrumb />
            </Container>

            <Footer/>
        </div>
    )
}
