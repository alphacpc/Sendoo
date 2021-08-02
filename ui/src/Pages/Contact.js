import React, {useState} from 'react';
import { Container, Typography, Card, CardContent, Grid, TextField,Button } from "@material-ui/core";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import MapStyles from "./../MapStyle";

import KEY_API  from "./../Secret";

import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';


function Map(){
    return(
        <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 14.716677, lng: -17.467686 }}
        defaultOptions={{styles: MapStyles}}
        >
            <Marker
                position={{ lat: 14.716677, lng: 14.716677 }}
            />
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Contact() {

    return (
        <div className="ContactContainer">
            
            <Navbar />

            {/* <Container>
                <Breadcrumb />
            </Container> */}
            <div style={{ height: '80vh', width: '100%' }}>
                <WrappedMap 
                    googleMapURL = {`https://maps.googleapis.com/maps/api/js?key=${KEY_API}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement = {<div style={{ height: `100%` }} />}
                    containerElement = {<div style={{ height: `600px` }} />}
                    mapElement = {<div style={{ height: `100%` }} />}
                />
            </div>
            

            <Container align="center">

                <div style={{maxWidth: '80%', backgroundColor:'#FFF', marginTop:40, boxShadow:'8px 8px 8px 0 #000',
            paddingTop: 40}}>
                    <Typography variant="h3" align="center" style={{textTransform:'uppercase'}}>Contactez-nous</Typography>

                    <CardContent>
                        <form>
                        <Grid xs={12} sm={6} style={{margin:'20px 0'}} item>
                            <TextField label="Prenom" placeholder="Entrer votre prenom" variant="outlined" fullWidth required/>
                        </Grid>

                        <Grid xs={12} sm={6} style={{margin:'20px 0'}} item>
                            <TextField label="Nom de famille" placeholder="Entrer votre nom de famille" variant="outlined" fullWidth required/>
                        </Grid>

                        <Grid xs={12} sm={12} style={{margin:'20px 0'}} item>
                            <TextField label="Adresse e-mail" placeholder="Entrer votre adresse e-mail" variant="outlined" fullWidth required/>
                        </Grid>

                        <Grid xs={12} sm={12} style={{margin:'20px 0'}} item>
                            <TextField label="Votre message" multiline rows={5} placeholder="Ecrivez votre message ..." variant="outlined" fullWidth required/>
                        </Grid>

                        <Grid xs={12} sm={4} item>
                            <Button type="submit" variant="contained" color="secondary">Envoyez</Button>
                        </Grid>
                        </form>
                    </CardContent>
                </div>
            </Container>

            <Footer />

        </div>
    )
}
