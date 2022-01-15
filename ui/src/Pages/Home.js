import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import "../assets/sass/Home.scss";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";

import SVG from "./../assets/images/wavesOpacity.svg";

import myImg from "./../assets/images/post10.jpg";

import { ArrowDropUpOutlined } from "@material-ui/icons";
import { Grid, Card, CardMedia, CardContent, Typography} from "@material-ui/core";
import Loader from "../components/Loader";



export default function Home() {

  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleClickArrow = () => {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.scrollTo(0, 10);
    }
  };

  // const handleSinglePost = (e) => {
  //   window.location.replace('http://localhost:3000/single-post');
  // }

  const fetchPosts = async ()=>{
    const res = await axios.get('/posts');
    setPosts(res.data);
    setLoaded(true);
  }

  useEffect(()=>{
    fetchPosts();
  },[])

  return (!loaded)? <Loader/> : (
    <div className="HomPage">

      <Navbar />

      <Header />
      <img src={SVG} className="ImageDivider" alt="svg divider" />

      <ArrowDropUpOutlined className="Arrow" onClick={() => handleClickArrow()}/>

      <div className="HomeContainer">
        
        <div className="HomePostList">
          <Grid container spacing={4}>
            {posts.map((post, index) => (
              <Grid item key={index} xs={12} className="PostItem" sm={6} md={4}>
                <Card >
                  <CardMedia image={myImg} title="Image title" className="cardMediaPost"/>
                  <CardContent >
                    <Typography gutterBottom variant="h5" 
                        component="h4" 
                        className="postTitle">
                          <Link to={`/single-post/${post._id}`} >{post.postTitle}</Link>
                      </Typography>
                    <Typography gutterBottom variant="body1" component="p" className="postBody">
                      {post.postBody}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        
        <div className="HomeCategoryList">    
          <CategoryList/>
        </div>
        
      </div>

      <Footer />
    </div>
  );
}
