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
           
           <div style={{background:`url(${Banniere}) no-repeat`, height:500}}/>

            <Container>
                <div style={{marginTop:-140, backgroundColor:'#ffffff', padding: 20}}>
                    
                    <Typography variant="h3" style={classes.TitleAbout} component="h3">A propos de nous</Typography>
                    <Typography variant="p" style={classes.TextAbout} component="span">{text}</Typography>
                    
                    
                    <div style={classes.Coords}>
                        {/* <Typography variant="h4" style={classes.TitleCoords} component="h4">Nos coordonnees</Typography> */}

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography style={classes.TitleCoord}>
                                    <PhoneIphoneOutlinedIcon/>
                                    Numero de telephone
                                </Typography>
                                <Typography>+221 33 333 33 33</Typography>
                            </Grid>

                            <Grid Typography xs={12} md={4}>
                                <Typography style={classes.TitleCoord}>
                                    <MailOutlineOutlinedIcon/>
                                    Adresse email
                                </Typography>
                                <Typography>infos@contact-sendoo.sn</Typography>
                            </Grid>

                            <Grid Typography xs={12} md={4}>
                                <Typography style={classes.TitleCoord}>
                                    <LocationOnOutlinedIcon/>
                                    Siege
                                </Typography>
                                <Typography>Avenue Nelson MANDELA, rue Cheikh anta DIOP</Typography>
                            </Grid>

                        </Grid>

                    </div>

                    <div style={{textAlign:'center'}}><Link style={classes.LinkContact}>Ecrivez-nous</Link></div>

                </div>                
            </Container>

            <Footer/>
        </div>
    )
}


const classes = {
    TitleAbout:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 44,
        textTransform: 'uppercase',
        margin: '40px 0'
    },
    TextAbout:{
        heightLine: 2,
        fontSize: 18,
        color: '#444444',
        marginBottom: 40,
        textAlign:'center'
    },
    Coords:{
        margin: '80px 0',
    },
    TitleCoord:{
        textTransform:'uppercase',
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },

    LinkContact:{
        backgroundColor:'green',
        padding: '18px 80px',
        color:'#ffffff',
        fontSize: 20,
        textTransform: 'uppercase',
        letterSpacing: 1,
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover, &:focus': {
            backgroundColor: 'yellow',
            boxShadow: '0 4px 4px 0 #000',
        },
    }
}