import React from 'react';
import Navbar from "../components/Navbar";
import ListLinkCategory from '../components/ListLinkCategory';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const MoreCategory = () => {
    return (
        <React.Fragment>
            
            <Navbar/>

            <ListLinkCategory />

            <Container>
                <Breadcrumb/>

                <p>Post a la une</p>

                <p>Liste des posts pour cette categorie</p>

                <p>Une galery des images</p>

            </Container>

            <Footer/>


        </React.Fragment>
    )
}

export default MoreCategory
