import React from "react";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core";

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
    <div id="ListCategoryLink">
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </div>
  );
};

export default ListCategory;

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    //backgroundColor: "#04001E",
    backgroundColor:'#0F044C',
    height: "100px",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Sans-serif",
    letterSpacing: "1px",
    color: "#fff",
    textDecoration: "none",
  },
}));
