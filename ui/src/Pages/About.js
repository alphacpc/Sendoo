import { Link } from "react-router-dom";

import { Container, Grid, Typography } from "@material-ui/core";
import { FaGithub, FaLinkedin, FaDiscord, FaFacebook, FaSlack} from "react-icons/fa";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Banniere from "./../assets/images/ban-contact.png";
import thomas from "./../assets/images/thomas.jpg";
import Svg from "./../assets/images/wavesOpacity.svg";


export default function About() {

  const Teams = [1, 2, 3];

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
    by accident, sometimes on purpose (injected humour and the like).`;

  return (
    <div className="AboutContainer">
      <Navbar />

      <div style={{ background: `url(${Banniere}) no-repeat`, height: 600 }} >
        <Typography variant="h3" style={classes.TitleAbout} className="titleAbout" component="h3">
          A propos de nous
        </Typography>
      </div>

      <img src={Svg} style={classes.ImgTransitionDivider} alt="svg divider" />

      <Container>
        <div style={{ backgroundColor: "#ffffff", padding: 20 }}>
          
          <Typography variant="p" style={classes.TextAbout} component="span">
            {text}
          </Typography>

          <div style={classes.Coords}>

            <h1 style={classes.TitleTeam}>Notre Equipe</h1>

            <Grid container style={classes.DivTeam} id="teams" spacing={2}>
              {Teams.map((item) => (
                <Grid item key={item} className="GridMember" style={classes.Member} xs={5} md={3}>
                  <img
                    src={thomas} style={classes.MemberPicture}
                    width={140} height={140} alt="member sendoo"
                  />
                  <span style={classes.MemberName}>Jules Burcez</span>
                  <span style={classes.MemberJob}>Developpeur Full-Stack</span>
                  <span style={classes.MemberSocialLinks}>
                    <FaGithub />
                    <FaLinkedin />
                    <FaDiscord />
                    <FaFacebook />
                    <FaSlack />
                  </span>
                </Grid>
              ))}
            </Grid>

          </div>


          <div style={{ textAlign: "center" }}>
            <Link to="/contact" className="LinkContact" style={classes.LinkContact}>Ecrivez-nous</Link>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

const classes = {
  TitleAbout: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 54,
    textTransform: "uppercase",
    position: "relative",
    top: '50%',
    marginLeft: '10%',
    color: '#ffffff !important',
    width: 600,
  },

  ImgTransitionDivider: {
    marginTop: "-141px",
    height: "137px",
    width: "100%",
    transform: "rotateX(205deg)",
  },

  TextAbout: {
    heightLine: 2,
    fontSize: 18,
    color: "#444444",
    marginBottom: 40,
    textAlign: "center",
  },
  Coords: {
    margin: "80px 0",
  },
  TitleCoord: {
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  LinkContact: {
    padding: "18px 80px",
    color: "green",
    fontSize: 18,
    textTransform: "uppercase",
    letterSpacing: 1,
    textDecoration: "none",
    cursor: "pointer",
    border:"2px solid green",
    borderRadius: 4,
    transition:"all ease .3s"
  },

  DivTeam: {
    display: "flex",
    justifyContent: "center",
  },
  TitleTeam: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 54,
    textTransform: "uppercase",
  },
  Member: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    padding: 50,
    margin: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: " 0px 4px 4px 4px #ccc",
    borderRadius: "4px",
  },
  MemberPicture: {
    borderRadius: "50%",
    filter: "grayscale(1)",
  },
  MemberName: {
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: "20px 0 0px 0",
    fontSize: 18,
  },
  MemberSocialLinks: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    padding: 10,
  },
};
