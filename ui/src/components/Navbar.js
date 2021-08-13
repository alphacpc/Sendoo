import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Logo from "./../assets/images/Logo/Sendoo4.png";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";

import AppBar from "@material-ui/core/AppBar";

import "./../assets/sass/FixedNavbar.scss";

const useStyles = makeStyles((theme) => ({
  toolbarTitle: {
    flex: 1,
  },
  toolbar: {
    flexWrap: "wrap",
    backgroundColor: "#ffffff",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: "none !important",
    textTransform: "uppercase",
    color: "#444444",
    letterSpacing: 2,
    fontWeight: 500,
    transition: "all ease .3s",
    "&:hover": {
      color: "#f05",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar id="navbar-fixed" className={classes.toolbar}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              <Link to="/">
                <img src={Logo} width={100} />
              </Link>
            </Typography>

            <nav>
              <Link
                variant="button"
                color="textPrimary"
                to="/"
                className={classes.link}
              >
                Accueil
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                to="/about"
                className={classes.link}
              >
                A propos
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                to="/contact"
                className={classes.link}
              >
                Contact
              </Link>
            </nav>

            <div>
              <Link
                variant="button"
                color="textPrimary"
                to="/register"
                className={classes.link}
              >
                <PersonAddOutlinedIcon /> Inscription
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                to="/login"
                className={classes.link}
              >
                <PermIdentityOutlinedIcon /> Connexion
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Toolbar>
    </React.Fragment>
  );
}
