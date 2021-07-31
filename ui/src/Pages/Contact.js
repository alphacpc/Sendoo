import { Container } from "@material-ui/core";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Contact() {
    return (
        <div className="ContactContainer">
            
            <Navbar />

            <Container>
                <Breadcrumb />
            </Container>


            <Footer />

        </div>
    )
}
