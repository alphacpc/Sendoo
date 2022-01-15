import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

import "./../assets/sass/SinglePost.scss";

import { makeStyles, Container, Card, CardContent, CardMedia, Grid, Typography, Avatar, Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";


import myImg2 from "./../assets/images/post3.jpg";
import thomas from "./../assets/images/thomas.jpg";


const SinglePost = () => {

  const classes = useStyles();

  const [value, setValue] = useState(3);

  const { postID } = useParams();
  const [currentPost, setCurrentPost] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [image, setImage] = useState("");
  const [loaded, setLoaded] = useState(false);


  const fetchCurrentPost = async ()=>{
      const response = await axios.get(`/posts/${postID}`);
      await setCurrentPost(response.data);
      await setImage(require(`./../assets/images/${response.data.postPhoto}`).default);
      setLoaded(true);
  }


  const fetchRelatedPost = async ()=> {
    const response = await axios.get(`/posts?category=${currentPost.postCategory}`);
    setRelatedPosts(response.data);
}

  useEffect( async()=>{
    await fetchCurrentPost();
    fetchRelatedPost();
  },[])

  console.log(currentPost)

  return (!loaded) ? (<Loader/>) : (
    
    <div>
      <Navbar />


      <div className="divImgPost">
       <img src={image} alt={`${currentPost.postAuthor}`} />
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
                <Typography variant="span" component="h5">{currentPost.postAuthor}</Typography>
                <Typography variant="span" component="p">
                  Homme d'Etat
                </Typography>
              </div>
            </Grid>

            <Grid item xs={10}>
              <div className={classes.postContent}>
                
                <div className={classes.postTitleDate}>
                  <Typography variant="span" component="h1">{currentPost.postTitle}</Typography>
                  <Typography variant="span" component="h5">
                    {new Date(currentPost.createdAt).toLocaleDateString()}
                  </Typography>
                </div>

                <div className={classes.postTextContent}>
                  <Typography variant="p" component="p">
                    {currentPost.postBody}
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

        <h4 className="relatedPost">Articles associees</h4>
        
        <Grid container spacing={4}>
          {relatedPosts.map((post, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={myImg2}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="span" component="h4">
                    {post.postTitle}
                  </Typography>
                  <Typography className={classes.limitTextPostRelated}>
                    {post.postBody}
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
