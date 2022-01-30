import React from "react";
import DashboardSlideBar from "./../components/DashboardSlideBar";
import DashboardNavbar from "./../components/DashboardNavbar";

import BlocStyleDashboard from "./../Styles";

import { PhotoCameraSharp } from "@material-ui/icons";
import { Grid, Button, TextField, Typography, TextareaAutosize } from "@material-ui/core";


const WritePost = () => {
  return (
    <div>
      <DashboardNavbar />

      <div style={BlocStyleDashboard.SlideAndContent}>
        <DashboardSlideBar />

        <div style={BlocStyleDashboard.Content}>
          <Typography variant="span" component="h1">Ecrire un nouveau article</Typography>

          <Grid
            className="imageBackgroundNewArticle"
            style={{
              height: "30vh",
              backgroundColor: "#24A19C",
              marginTop: "4vh",
              borderRadius: "20px",
            }}
          ></Grid>

          <form autoComplete="off" noValidate style={{ marginTop: "4vh" }}>
            <Grid container spacing={4}>
              <div className="divInputImageArticle">
                <Grid xs={12} md={6} item>
                  <input type="file" id="articleImage" hidden/>
                  <label htmlFor="articleImage"><PhotoCameraSharp/> Ajouter une image</label>
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
              </div>


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
                <TextareaAutosize
                  style={{ width: "100%", resize:"none", border:"1px solid #eeeeee", borderRadius: 6, outlineColor: "#6867AC", padding: 10 }}
                  label="Message"
                  name="message"
                  required
                  variant="outlined"
                  aria-label="minimum height"
                  minRows={5}
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
