import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, Avatar, CardContent, CardHeader, Typography , Grid, Container } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import ImgPost from "./../assets/images/post6.jpg";


const Category = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <h1 className={classes.titleCategory}>Education</h1>
        <p className={classes.paragraphCategory}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          facilis ducimus repudiandae tempora voluptates ipsa, voluptatum iste
          beatae accusantium similique cumque officia voluptatem, quaerat magnam
          nisi totam incidunt nihil dolor? Nihil nisi nulla, repellat blanditiis
          sequi amet ipsum tenetur quis temporibus laudantium eaque inventore
          odio harum, ipsa, tempora asperiores in nam voluptatum distinctio!
          Cumque quos laborum odit quod soluta veritatis?
        </p>

        <Grid container spacing={3}>
          <Grid item xs={4} className={classes.gridItem}>
            <img src={ImgPost} className={classes.media} />
            <CardContent className={classes.cardContent}>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>

            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
          </Grid>

          <Grid item xs={4} className={classes.gridItem}>
            <img src={ImgPost} className={classes.media} />
            <CardContent className={classes.cardContent}>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>

            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
          </Grid>

          <Grid item xs={4} className={classes.gridItem}>
            <img src={ImgPost} className={classes.media} />
            <CardContent className={classes.cardContent}>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>

            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
          </Grid>
        </Grid>

        <div className={classes.showAllPosts}>
          <Link to="/category" name="LinkSeeMore" className={classes.LinkSeeMore}>
            Voir plus
            <ArrowRightAltIcon />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Category;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleCategory: {
    marginTop: 80,
    marginBottom: 22,
    fontWeight: "600",
    fontSize: 28,
    textTransform: "uppercase",
    letterSpacing: 1,
    // fontFamily: 'sans-serif',
  },
  paragraphCategory: {
    textAlign: "center",
    fontSize: 17,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridItem: {
    marginBottom: 40,
  },
  cardContent: {
    padding: "16px 0 0 4px",
  },
  media: {
    height: 222,
    width: "100%",
  },
  mediaFull: {
    width: "100%",
  },
  avatar: {
    backgroundColor: "#f05",
  },

  showAllPosts: {
    textAlign: "center",
    // backgroundColor: "red",
    padding:"40px",
    marginTop: 40,
  },
  LinkSeeMore: {
    padding: "15px 40px",
    textDecoration: "none",
    color: "green",
    border: "2px solid green",
    borderRadius: 4,
    transition: "all ease .3s",
    "&:hover": {
      backgroundColor: "green",
      color: "#ffffff",
      transition:"all ease .3s",
    },
  },
}));
