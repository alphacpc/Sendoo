import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../context/Context";

import { makeStyles, Toolbar, Typography, AppBar } from "@material-ui/core";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";

import "./../assets/sass/FixedNavbar.scss";
import "./../assets/sass/Navbar.scss";
import Logo from "./../assets/images/Logo/Sendoo4.png";


export default function Header() {

  const {user, dispatch} = useContext(Context);
  
  const classes = useStyles();

  const handleLogout = ()=> dispatch({type:"LOGOUT"});
  
  return (
    <React.Fragment>
      <Toolbar id="navbar-fixed" className={classes.toolbar}>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              <Link to="/"><img src={Logo} alt="Logo sendoo" width={100} /></Link>
            </Typography>
            
            <nav>
              <Link variant="button" color="textPrimary" to="/" className={classes.link}>Accueil</Link>
              <Link variant="button" color="textPrimary" to="/about" className={classes.link}>A propos</Link>
              <Link variant="button" color="textPrimary" to="/contact" className={classes.link}>Contact</Link>
              {user && <Link variant="button" color="textPrimary" to="/account" className={classes.link}>Mon compte</Link>}
            </nav>

            {!user && (
              <div className="linksAuth">
                <Link variant="button" color="textPrimary" to="/register" className={classes.link}>
                  <PersonAddOutlinedIcon /> <span class="textAuth">Inscription</span>
                </Link>

                <Link variant="button" color="textPrimary" to="/login" className={classes.link}>
                  <PermIdentityOutlinedIcon /> <span class="textAuth">Connexion</span>
                </Link>
            </div>
            )}

            { user && (
              <div className="divUserConnected">
                <div>
                  <img src={require(`./../assets/images/${user.userPhoto}`).default} alt={user.userFname}/>
                </div>
                <button onClick={handleLogout} className="btnLogout">{user && "Déconnexion"}</button>
            </div>
            )}

          </Toolbar>
        </AppBar>
      </Toolbar>
    </React.Fragment>
  );
}


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
      color: "green",
    },
  },

}));