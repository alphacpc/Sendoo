import React, {useState, useContext} from "react";

import {Context} from "./../context/Context";

import DashboardSlideBar from "./../components/DashboardSlideBar";
import DashboardNavbar from "./../components/DashboardNavbar";

import BlocStyleDashboard from "./../Styles";

import { PhotoCameraSharp } from "@material-ui/icons";
import { Grid, Button, TextField, Typography, TextareaAutosize } from "@material-ui/core";


const WritePost = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newPost = {
      title, desc, "file" :file, category
    }

    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);

      console.log("Data dans ecrire un article", data)
      console.log(newPost)


    }
  }

  return (
    <div>
      <DashboardNavbar />

      <div style={BlocStyleDashboard.SlideAndContent}>
        <DashboardSlideBar />

        <div style={BlocStyleDashboard.Content}>
          <Typography variant="span" component="h1">Ecrire un nouveau article</Typography>
          { file && (
          <Grid className="divImagePost">
            {file && (<img className="imagePost" src={URL.createObjectURL(file)} alt="hello"/>)}
          </Grid>
          )}
          <form autoComplete="off" onSubmit={handleSubmit} noValidate style={{ marginTop: "4vh" }}>
            <Grid container spacing={4}>
              <div className="divInputImageArticle">
                <Grid xs={12} md={6} item>
                  <input type="file" id="articleImage" hidden onChange={ (e) => setFile(e.target.files[0])}/>
                  <label htmlFor="articleImage"><PhotoCameraSharp/> Ajouter une image</label>
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Categorie"
                    name="category"
                    required
                    variant="outlined" value={category} onChange={(e)=> setCategory(e.target.value)}
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
                  value={title} onChange={ e=> setTitle(e.target.value) }
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextareaAutosize
                  style={{ width: "100%", resize:"none", border:"1px solid #eeeeee", borderRadius: 6, outlineColor: "#6867AC", padding: 10 }}
                  label="Message"
                  name="message"
                  placeholder="Message..."
                  required
                  variant="outlined"
                  aria-label="minimum height"
                  minRows={5}
                  value={desc} onChange={ e=> setDesc(e.target.value) }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button color="primary" type="submit" variant="contained">Publier</Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WritePost;
