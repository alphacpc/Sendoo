import React from "react";
import { Container, Typography } from "@material-ui/core";

import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import ListLinkCategory from "./../components/ListLinkCategory";


import ftof from './../assets/images/ftof1.png'


const FourToFour = () => {
  return (
    <div>
      <Navbar />
      <ListLinkCategory />

      <Container>
        <img src={ftof} />
        <Typography variant='h1' component='h1' style={{textAlign:'center', letterSpacing: 1, fontWeight:'bold'}}>Oups !</Typography>
        <Typography variant='p' component="p" style={{textAlign:'center', letterSpacing: 2, fontSize:24}}>La page que vous recherchez semble introuvable.</Typography>
      </Container>

      <Footer />
    </div>
  );
};

export default FourToFour;
