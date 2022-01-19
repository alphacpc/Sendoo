import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { makeStyles, Typography } from "@material-ui/core";


const CategoryList = () => {

  const classes = useStyles();
  const [categories, setCategories] = useState([]);

  
  const fetchCategories = async ()=>{
    const res = await axios.get('/categories');
    setCategories(res.data);
  }


  // const checkPost = async (category)=>{
  //     const res = await axios.get(`/posts?cat=${category}`);
  //     console.log(res.data)
  //     return (res.data.length == 0 ) ? null :   <Link className={classes.linkStyle} to={`/category/${category.name}`}>{category.name}</Link>
  // }

  useEffect(()=>{
    fetchCategories();
  },[])

  return (
    <React.Fragment>
      <Typography component="h2" variant="h2"
        className={classes.titleCategory}>Toutes les catégories</Typography>
          <ul className={classes.ulCategory}>
            {
              categories.map((category, index) => {
                return <li className={classes.itemLi} key={index}>
                  <Link className={classes.linkStyle} to={`/category/${category.name}`}>{category.name}</Link>
                </li>
              })
            }
          </ul>
    </React.Fragment>
    
  );
};

export default CategoryList;

const useStyles = makeStyles((theme) => ({
  titleCategory : {
    fontWeight: "bold",
    fontSize: "20px !important",
    color: "#04001E"
  },

  ulCategory : {
    listStyle: "none",
    padding: "10px 4px",
    display: "flex",
    flexWrap: "wrap",
    borderLeft: "4px solid #116a35",
    marginTop: "20px",
  },

  itemLi : {
    padding: "10px 20px",
    margin: "6px",
    borderRadius: "30px",
    backgroundColor: "#cccccc",

    "&:hover": {
      backgroundColor: "#FFBD35",
    },
  },
  linkStyle:{
    textDecoration: "none",
    color: "#04001E",
    textTransform: "capitalize",
    letterSpacing: "1px",
    fontSize: "18px",
  }
}));
