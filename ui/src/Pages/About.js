import { Container, Grid, Link, Typography } from "@material-ui/core";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Banniere from "./../assets/images/ban-contact.png";

import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

export default function About() {

    const text = `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen 
    book. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with 
    desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum. It is a long established fact that a 
    reader will be distracted by the readable content of a page when 
    looking at its layout. The point of using Lorem Ipsum is that it 
    has a more-or-less normal distribution of letters, as opposed to 
    using 'Content here, content here', making it look like readable 
    English. Many desktop publishing packages and web page editors 
    now use Lorem Ipsum as their default model text, and a search 
    for 'lorem ipsum' will uncover many web sites still in their 
    infancy. Various versions have evolved over the years, sometimes 
    by accident, sometimes on purpose (injected humour and the like).
    Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen 
    book. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with 
    desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum. It is a long established fact that a 
    reader will be distracted by the readable content of a page when 
    looking at its layout. The point of using Lorem Ipsum is that it 
    has a more-or-less normal distribution of letters, as opposed to 
    using 'Content here, content here', making it look like readable 
    English. Many desktop publishing packages and web page editors 
    now use Lorem Ipsum as their default model text, and a search 
    for 'lorem ipsum' will uncover many web sites still in their 
    infancy. Various versions have evolved over the years, sometimes 
    by accident, sometimes on purpose (injected humour and the like).`

    return (
        <div className="AboutContainer">
            <Navbar/>
           
           <div style={{background:`url(${Banniere}) no-repeat`, height:540}}/>

            <Container>
                <div style={{marginTop:-80, backgroundColor:'#ffffff', padding: 20}}>
                    <Typography variant="h3" component="h3">A propos de nous</Typography>
                    <Typography variant="p" component="span">{text}</Typography>
                    <Link>Ecrivez-nous</Link>
                    <div>
                        <Typography variant="h4" component="h4">Nos coordonnees</Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography>Numero de telephone</Typography>
                                <PhoneIphoneOutlinedIcon/>
                            </Grid>
                            <Grid Typography xs={12} md={4}>
                                <Typography>Adresse email</Typography>
                                <MailOutlineOutlinedIcon/>
                            </Grid>
                            <Grid Typography xs={12} md={4}>
                                <Typography>Siege</Typography>
                                {/* <AddLocationAltOutlinedIcon/> */}
                                <LocationOnOutlinedIcon/>
                            </Grid>
                        </Grid>

                    </div>
                </div>                
            </Container>

            <Footer/>
        </div>
    )
}
