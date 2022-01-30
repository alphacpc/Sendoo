import React, {useContext} from "react";
import BlocStyleDashboard from "./../Styles";

import { Context } from "./../context/Context";

import DashboardSlideBar from "./../components/DashboardSlideBar";
import DashboardNavbar from "./../components/DashboardNavbar";

import AccountProfileDetails from "./../components/Account/AccountProfileDetails";

import { Box, Grid, Typography } from "@material-ui/core";

const Account = () => {

  const {user} = useContext(Context);

  return (
    <div>
      <DashboardNavbar />

      <div style={BlocStyleDashboard.SlideAndContent}>
        <DashboardSlideBar />

        <div style={BlocStyleDashboard.Content}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Typography variant="span" component="h1">Détails du compte</Typography>
            <Typography variant="p" style={{ color: "red", cursor:"pointer" }}>Supprimer le compte</Typography>
          </Box>

          <Box sx={{ height: "90%", display: "flex", alignItems: "center",}}>
              <Grid item lg={12} md={6} xs={12}>
                <AccountProfileDetails user={user} />
              </Grid>
          </Box>
          
        </div>
      </div>
    </div>
  );
};

export default Account;
