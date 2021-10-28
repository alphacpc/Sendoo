import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles, Typography } from "@material-ui/core";


const ListCategory = () => {
  const classes = useStyles();

  const sections = [
    { title: "Education", url: "#" },
    { title: "Politique", url: "#" },
    { title: "Culture", url: "#" },
    { title: "Business", url: "#" },
    { title: "Religion", url: "#" },
    { title: "Sante", url: "#" },
    { title: "Science", url: "#" },
    { title: "Decouverte", url: "#" },
    { title: "Mode", url: "#" },
    { title: "Voyage", url: "#" },
  ];

  return (
    <React.Fragment>
      <Typography component="h2" variant="h2" className={classes.titleCategory}>Toutes les catégories</Typography>
      <ul className={classes.ulCategory}>
        <li className={classes.li}>Sport</li>
        <li className={classes.li}>Sante</li>
        <li className={classes.li}>Politique</li>
        <li className={classes.li}>Economie</li>
      </ul>
    </React.Fragment>
    
  );
};

export default ListCategory;

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

  li : {
    padding: "4px 20px",
    margin: "6px",
    borderRadius: "20px",
    backgroundColor: "#cccccc",
  }
}));
