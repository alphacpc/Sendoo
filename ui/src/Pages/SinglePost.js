import { Container } from "@material-ui/core";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import ListLinkCategory from "../components/ListLinkCategory";
import Navbar from "../components/Navbar";
import "./../assets/sass/SinglePost.scss";

import { makeStyles } from "@material-ui/core";

import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import myImg from "./../assets/images/post10.jpg";
import myImg2 from "./../assets/images/post3.jpg";
import thomas from "./../assets/images/thomas.jpg";

import Avatar from "@material-ui/core/Avatar";

const SinglePost = () => {
  const classes = useStyles();
  const cards = [1, 2, 3];
  const [value, setValue] = React.useState(3);

  const text = `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen 
    book. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with 
    desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum. It is a long established fact that a 
    reader will be distracted by the readable content of a page when 
    looking at its layout. The point of using Lorem Ipsum is that it 
    has a more-or-less normal distribution of letters, as opposed to 
    using 'Content here, content here', making it look like readable 
    English. Many desktop publishing packages and web page editors 
    now use Lorem Ipsum as their default model text, and a search 
    for 'lorem ipsum' will uncover many web sites still in their 
    infancy. Various versions have evolved over the years, sometimes 
    by accident, sometimes on purpose (injected humour and the like).`;

  return (
    <div>
      <Navbar />

      {/* <ListLinkCategory /> */}

      <div className="divImgPost">
        <img src={myImg} />
      </div>

      <Container>
        <Breadcrumb />

        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <div className={classes.divAuthor}>
                <Avatar
                  alt="thomas_sankara"
                  className={classes.avatar}
                  src={thomas}
                />
                <Typography variant="span" component="h5">
                  Thomas Sankara
                </Typography>
                <Typography variant="span" component="p">
                  Homme d'Etat
                </Typography>
              </div>
            </Grid>

            <Grid item xs={10}>
              <div className={classes.postContent}>
                <div className={classes.postTitleDate}>
                  <Typography variant="span" component="h1">
                    Titre de l'article
                  </Typography>
                  <Typography variant="span" component="h5">
                    {new Date().toLocaleDateString()}
                  </Typography>
                </div>

                <div className={classes.postTextContent}>
                  <Typography variant="p" component="p">
                    {text}
                  </Typography>
                  <Typography variant="p" component="p">
                    {text}
                  </Typography>
                </div>
              </div>

              <div className={classes.notes}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography variant="span" component="h3">
                    Note(s)
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>

        <h4 className="relatedPost">Articles associes</h4>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={myImg2}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="span" component="h4">
                    {" "}
                    Titre de l'article{" "}
                  </Typography>
                  <Typography className={classes.limitTextPostRelated}>
                    {" "}
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default SinglePost;

const useStyles = makeStyles((theme) => ({
  divAuthor: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    height: 80,
    width: 80,
    marginBottom: 10,
  },

  postTitleDate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  postTextContent: {
    lineHeight: 2,
    fontSize: 18,
    textAlign: "justify",
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
  },

  cardContent: {
    flexGrow: 1,
  },

  limitTextPostRelated: {
    color: "#444",
  },

  notes: {
    marginTop: 20,
  },
}));
