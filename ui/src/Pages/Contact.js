import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import MapStyles from "./../MapStyle";

import KEY_API from "./../Secret";

import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

import "./../assets/sass/Contact.scss";

function Map() {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 14.716677, lng: -17.467686 }}
      defaultOptions={{ styles: MapStyles }}
    >
      <Marker position={{ lat: 14.716677, lng: 14.716677 }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Contact() {
  return (
    <div className="ContactContainer">
      <Navbar />

      <div style={{ height: "80vh", width: "100%" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${KEY_API}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>

      <Container className="contactMain">
        <div className="FormContact">
          <form>
            <div className="panelHeader">
              <h1>Ecrivez-nous</h1>
            </div>

            <div className="Fullname">
              <input type="text" placeholder="Entrer votre prenom" required />
              <input
                type="text"
                placeholder="Entrer votre nom de famille"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Entrer votre adresse email"
              required
            />

            <textarea placeholder="Entrer votre message" required></textarea>

            <div className="DivBtnSubmit">
              <input type="submit" value="Envoyer" />
            </div>
          </form>
        </div>

        <div className="DetailContact">
          <Grid item>
            <Typography style={classes.TitleCoord}>
              <LocationOnOutlinedIcon />
              Siege
            </Typography>
            <Typography>Avenue Nelson MANDELA, rue Cheikh anta DIOP</Typography>
          </Grid>

          <Grid item>
            <Typography style={classes.TitleCoord}>
              <PhoneIphoneOutlinedIcon />
              Numero de telephone
            </Typography>
            <Typography>+221 33 333 33 33</Typography>
          </Grid>

          <Grid item>
            <Typography style={classes.TitleCoord}>
              <MailOutlineOutlinedIcon />
              Adresse email
            </Typography>
            <Typography>infos@contact-sendoo.sn</Typography>
          </Grid>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

const classes = {
  TitleCoord: {
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  LinkContact: {
    backgroundColor: "green",
    padding: "18px 80px",
    color: "#ffffff",
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 1,
    textDecoration: "none",
    cursor: "pointer",

    "&:hover, &:focus": {
      backgroundColor: "yellow",
      boxShadow: "0 4px 4px 0 #000",
    },
  },
};
