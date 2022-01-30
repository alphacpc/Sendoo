import React from "react";
import DashboardSlideBar from "./../components/DashboardSlideBar";
import DashboardNavbar from "./../components/DashboardNavbar";

import BlocStyleDashboard from "./../Styles";

import { Grid, Button, TextField, Typography } from "@material-ui/core";


const WritePost = () => {
  return (
    <div>
      <DashboardNavbar />

      <div style={BlocStyleDashboard.SlideAndContent}>
        <DashboardSlideBar />

        <div style={BlocStyleDashboard.Content}>
          <Typography variant="span" component="h1">
            Ecrire un nouveau article
          </Typography>

          <Grid
            className="imageBackgroundNewArticle"
            style={{
              height: "30vh",
              backgroundColor: "#0a1931",
              marginTop: "4vh",
              borderRadius: "20px",
            }}
          ></Grid>

          <form autoComplete="off" noValidate style={{ marginTop: "4vh" }}>
            <Grid container spacing={4}>
              <Grid xs={12} md={6} item>
                <TextField
                  fullWidth
                  label="Image de couverture"
                  name="image"
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Categorie"
                  name="category"
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  label="Titre de l'article"
                  name="title"
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button color="primary" variant="contained">
                  Publier
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WritePost;
