import React from "react";
import { Container, Typography } from "@material-ui/core";

import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import ListLinkCategory from "./../components/ListLinkCategory";

const FourToFour = () => {
  return (
    <div>
      <Navbar />
      <ListLinkCategory />

      <Container>
        <Typography>Page web introuvable</Typography>
      </Container>

      <Footer />
    </div>
  );
};

export default FourToFour;
