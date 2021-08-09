import React from 'react';
import {Container, Box, Typography} from '@material-ui/core'

import Footer from './../components/Footer';
import Navbar from './../components/Navbar';
import Category from './../components/Category';
import ListLinkCategory from './../components/ListLinkCategory';



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
    )
}

export default FourToFour
