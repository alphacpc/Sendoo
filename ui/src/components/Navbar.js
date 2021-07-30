import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Logo from './../assets/images/Logo/Sendoo4.png';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  toolbarTitle: {
    flex: 1,
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },

}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>

        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              <img src={Logo} width={100}/>
            </Typography>

            <nav>
              <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Accueil
              </Link>
              <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                A propos
              </Link>
              <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                contact
              </Link>
            </nav>

            <div>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}><PersonAddOutlinedIcon/> Inscription</Link>
              <Link variant="button" color="textPrimary" href="#" className={classes.link}><PermIdentityOutlinedIcon/> Connexion</Link>
            </div>
          
          </Toolbar>
        </AppBar>

      </Toolbar>
    </React.Fragment>
  );
}

