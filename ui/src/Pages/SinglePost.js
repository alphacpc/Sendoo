import { Container } from '@material-ui/core';
import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import ListLinkCategory from '../components/ListLinkCategory';
import Navbar from '../components/Navbar';

const SinglePost = () => {
    return (
        <div>
            <Navbar />

            <ListLinkCategory/>

            <Container>
                <Breadcrumb/>

                <p>Image de couverture</p>
                <p>Titre de l'article</p>
                <p>Contenu de l'article</p>
                <p>Information supplementaire</p>
                <p>Articles associes</p>
            </Container>


            <Footer/>

        </div>
    )
}

export default SinglePost
