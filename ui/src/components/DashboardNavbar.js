import React from 'react';
import {Typography, Box, Badge} from '@material-ui/core';
import {} from '@material-ui/icons';

import { Link as RouterLink } from 'react-router-dom';


import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const DashboardNavbar = () => {
    return (
        <div style={classes.Navbar}>
            <Box style={classes.Box}>
                <Badge
                    badgeContent={1}
                    color="secondary"
                    variant="standard"
                    style={{'cursor':'pointer'}}>
                    <NotificationsIcon />
                </Badge>
            
                <InputIcon style={{'cursor':'pointer'}}/>

            </Box>            
        </div>
    )
}

export default DashboardNavbar;


const classes = {
    Navbar:{
        backgroundColor: '#2109AE',
        color: '#fff',
        borderBottom: '1px solid #ccc',
        padding: 20,
        height: '10vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    Box:{
        width: 80,
        display: 'flex',
        justifyContent:'space-between'
    }
}