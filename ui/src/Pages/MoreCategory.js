import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import CategoryList from "../components/CategoryList";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import "./../assets/sass/moreCategory.scss";

import {Grid} from "@material-ui/core";

import CardPost from "../components/CardPost";

const MoreCategory = () => {

  const [loaded, setLoaded] = useState(false);
  const [postsCategory, setPostsCategory] = useState([]);
  const { postCategory } = useParams();

  const fetchAllPostCategory = async () =>{
    const response = await axios.get(`/posts?category=${postCategory}`);
    setPostsCategory(response.data);
    setLoaded(true);
  }

  useEffect(() => {
    fetchAllPostCategory();
  }, [postCategory]);



  return (!loaded) ? <Loader/> : (
    <React.Fragment>

      <div id="moreCategory">
        <Navbar />
      </div>

      <div className="categoryContainer">
  
        <div className="categoryFlexDivider">
          
          <div className="categoryFlexLeft">
            
            <Breadcrumb />

            <Grid container spacing={4}>
              
              {postsCategory.map((post, index) => <CardPost post={post} index={index}/>)}
            
            </Grid>

          </div>

          <div className="categoryFlexRight">
            <CategoryList/>
          </div>
        
        </div>
      
      </div>

      <Footer />
    
    </React.Fragment>
  );
};

export default MoreCategory;
