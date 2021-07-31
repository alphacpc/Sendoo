import { makeStyles } from '@material-ui/core'
import React from 'react';
import Banniere from "./../assets/images/banniere/banniere3.png";

const SendooBanner = () => {

  const classes = useStyles();


    return (
        <div className={classes.divBan}>
            
        </div>
    )
}

export default SendooBanner;

const useStyles = makeStyles(()=>({
    divBan:{
        backgroundImage: `url(${Banniere}) `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 500,
        width: '100%',
    }
}))
