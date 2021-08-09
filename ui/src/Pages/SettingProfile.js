import React from 'react';
import DashboardSlideBar from './../components/DashboardSlideBar';
import DashboardNavbar from './../components/DashboardNavbar';

import BlocStyleDashboard from './../Styles';

import {
    Box,
    Container,
    Grid,
    Card,
    CardActions
  } from '@material-ui/core';

import SettingAccount from './../components/Settings/SettingAccount';


const SettingProfile = () => {
    return (
        <div>
             <DashboardNavbar/>
            
            <div style={BlocStyleDashboard.SlideAndContent}>
                
                <DashboardSlideBar />
                
                <div style={BlocStyleDashboard.Content}>
                    
                <Box>
                        <h1>Mettre a jour le compte</h1>
                    </Box>

                    <Box
                        sx={{
                        height: '90%',
                        display:'flex',
                        alignItems:'center'
                    }}
                    >
                    
                        <Grid
                        container
                        spacing={3}
                        >
                        <Grid
                            item
                            lg={12}
                            md={12}
                            xs={12}
                        >
                            <SettingAccount />
                        </Grid>
                    
                        </Grid>
                    </Box>


                </div>

            </div>
        </div>
    )
}

export default SettingProfile
