import React,{useState, useEffect} from "react";
import axios from 'axios';

import "../assets/sass/Home.scss";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import SendooBanner from "../components/SendooBanner";
import Footer from "../components/Footer";

import SVG from "./../assets/images/wavesOpacity.svg";

import { ArrowDropUpOutlined } from "@material-ui/icons";

export default function Home() {
  const handleClickArrow = () => {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      window.scrollTo(0, 10);
    }
  };

  const [post, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = await axios("/posts");
      console.log("salut")
    }
    console.log("Hello word")
    console.log(axios.get("/posts"))
    fetchPosts()
  })


  return (
    <div className="HomPage">
      <Navbar />

      <Header />

      <img src={SVG} className="ImageDivider" />

      <ArrowDropUpOutlined
        className="Arrow"
        onClick={() => handleClickArrow()}
      />

      <Category />

      <Category />

      <Category />

      <Category />

      <SendooBanner />

      <Category />

      <Category />

      <Footer />
    </div>
  );
}
