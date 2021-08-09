import React from 'react';
import DashboardSlideBar from './../components/DashboardSlideBar';
import DashboardNavbar from './../components/DashboardNavbar';

import BlocStyleDashboard from './../Styles';

import AccountProfile from './../components/Account/AccountProfile';
import AccountProfileDetails from './../components/Account/AccountProfileDetails';

import {
    Box,
    Container,
    Grid,
    Card,
    Typography
  } from '@material-ui/core';

const Account = () => {

    return (
        <div >
            
            <DashboardNavbar/>
            
            <div style={BlocStyleDashboard.SlideAndContent}>
                
                <DashboardSlideBar />
                
                <div style={BlocStyleDashboard.Content}>
                    <Box
                        style={{
                            display:'flex',
                            justifyContent:'space-between',
                            alignItems:'center'
                        }}
                    >
                        <Typography variant="span" component="h1">Compte N°4465483354</Typography>
                        <Typography variant="p" style={{color:'red'}}>Supprimer le compte</Typography>
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
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <AccountProfile />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={6}
                            xs={12}
                        >
                            <AccountProfileDetails />
                        </Grid>
                        </Grid>
                    </Box>
                </div>

            </div>

        </div>
    )
}

export default Account;
