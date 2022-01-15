import React, { useState, useEffect } from "react";
// import { Link, Redirect } from "react-router-dom";

import Navbar from "../components/Navbar";
import CategoryList from "../components/CategoryList";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Loader from "../components/Loader";


import myImg from "./../assets/images/post10.jpg";

import {Card, CardContent, CardMedia, Grid, Typography, makeStyles} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";


const MoreCategory = () => {

  const classes = useStyles();
  const cards = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17];

  const [loaded, setLoaded] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const POST_PER_PAGE = 9;
  const startIndex = (page - 1) * POST_PER_PAGE;
  const selectedPost = cards.slice(startIndex, startIndex + POST_PER_PAGE);

  const handleClickPagination = (e) => {
    let value = e + 1;
    setPage(value)
    document.querySelectorAll("ul li .MuiPaginationItem-page").forEach((btn) => btn.classList.remove("Mui-selected"));
  };

  const handleSinglePost = (e) => {
    window.location.replace('http://localhost:3000/single-post');
  }


  useEffect(() => {
    setTotalPages(Math.ceil(cards.length / POST_PER_PAGE));
  }, [cards.length]);



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
              {selectedPost.map((card) => (
                <Grid item key={card} xs={12} className="PostItem" sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={myImg}
                      title="Image title"
                      onClick={handleSinglePost}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography   gutterBottom 
                                    variant="h5" 
                                    component="h4"
                                    onClick={handleSinglePost}
                                    className={classes.Title}>La nature</Typography>
                      <Typography   gutterBottom 
                                    variant="body1" 
                                    component="p">
                        This is a media card. You can use this section to describe
                        the content added next time.
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

        <div className={classes.pagination}>
          <Pagination
            count={totalPages}
            page={page}
            onClick={ () => handleClickPagination(page)}
            color="secondary"
          />
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
