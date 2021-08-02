import React, {useState} from 'react';
import { Container } from "@material-ui/core";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import KEY_API  from "./../Secret";
import googleMapReact from 'google-map-react';
import GoogleMap from 'google-map-react';


export default function Contact() {

    const center = useState({ lat: 59.95, lng: 30.33});
    // const zoom = useState(11);
    const zoom = 10

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    return (
        <div className="ContactContainer">
            
            <Navbar />

            {/* <Container>
                <Breadcrumb />
            </Container> */}
            <div style={{ height: '60vh', width: '100%' }}>
                <GoogleMap
                bootstrapURLKeys={{ key: KEY_API }}
                defaultCenter={center}
                defaultZoom={zoom}
                >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
                </GoogleMap>
            </div>

            <Footer />

        </div>
    )
}
