import React, {useState, useEffect} from "react";
import axios from "axios";

import "../assets/sass/Home.scss";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";

import SVG from "./../assets/images/wavesOpacity.svg";

import { ArrowDropUpOutlined } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import Loader from "../components/Loader";
import CardPost from "../components/CardPost";



export default function Home() {

  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);


  const handleClickArrow = () => {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.scrollTo(0, 10);
    }
  };


  const fetchPosts = async ()=>{
    const res = await axios.get('/posts');
    await setPosts(res.data);
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
            { posts.map((post, index) => <CardPost post={post} index={index}/>) }
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
