import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import CategoryList from "../components/CategoryList";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import "./../assets/sass/moreCategory.scss";

import {Card, CardContent, CardMedia, Grid, Typography, makeStyles} from "@material-ui/core";


const MoreCategory = () => {

  const classes = useStyles();

  const [loaded, setLoaded] = useState(false);
  const [postsCategory, setPostsCategory] = useState([]);
  const { postCategory } = useParams();

  console.log(postCategory)


  const fetchAllPostCategory = async () =>{
    const response = await axios.get(`/posts?cat=${postCategory}`);
    setPostsCategory(response.data);
    setLoaded(true);
  }


  useEffect(() => {
    fetchAllPostCategory();
  }, []);



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
              {postsCategory.map((post, index) => (
                <Grid item key={index} xs={12} className="PostItem" sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={require(`./../assets/images/${post.postPhoto}`).default}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography   gutterBottom 
                                    variant="h5" 
                                    component="h4"
                                    className="postTitle">
                                      <Link to={`/single-post/${post._id}`} >{post.postTitle}</Link></Typography>
                      <Typography   gutterBottom 
                                    variant="body1" 
                                    component="p" className="postBody">
                          {post.postBody}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
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

const useStyles = makeStyles((theme) => ({
  ContainerElement: {
    padding: "20px 0",
  },

  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 5px 0 #000",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    cursor:"pointer",
  },
  cardContent: {
    flexGrow: 1,
  },
  Title:{
    fontWeight: "bold",
    cursor: "pointer"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },


  




}));
