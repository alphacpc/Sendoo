import { useState, useContext, useEffect } from 'react';
import axios from "axios";

import { Box, Button, Grid, TextField, Container } from '@material-ui/core';
import { PhotoCameraSharp } from "@material-ui/icons";

import { Context } from "./../../context/Context";



const SettingAccountDetails = (props) => {
  
  const { user, dispatch } = useContext(Context)
  const [userUpdate, setUserUpdate] = useState(user)
  const [file, setFile] = useState(null)

  const handleChange = (event) => {
    setUserUpdate({
      ...userUpdate,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      userUpdate.userPhoto = filename;

      try{
        await axios.post("/upload", data);
        dispatch({type:"LOGOUT"})
      }
      catch(err){
        console.log("Pas d'enregistrement de l'image",err)
      }
    }

    try{
      await axios.put(`users/${user._id}`, userUpdate)
    }
    catch(err){
      console.log(err);
    }

    console.log(userUpdate)

  }


  useEffect(()=>{
    const actualBtn = document.getElementById('inputFile');
    const fileChosen = document.getElementById('fileChosen');
    actualBtn.addEventListener('change', function(){
      fileChosen.textContent = this.files[0].name
    })
  },[])


  return (
    <form autoComplete="off" onSubmit={handleSubmit}>

      <Grid container spacing={3}>
          
          <Grid item md={6} xs={12} >
              <TextField
                fullWidth
                label="Prenom"
                name="userFname"
                onChange={handleChange}
                required
                value={userUpdate.userFname}
                variant="outlined"
              />
          </Grid>
            
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nom de famille"
                name="userLname"
                onChange={handleChange}
                required
                value={userUpdate.userLname}
                variant="outlined"
              />
          </Grid>

          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nom d'utilisateur"
                name="userName"
                onChange={handleChange}
                required
                value={userUpdate.userName}
                variant="outlined"
              />
          </Grid>

          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Genre"
                name="userGender"
                value={userUpdate.userGender}
                variant="outlined"
              />
            </Grid>

          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Adresse email"
                name="userEmail"
                required
                onChange={handleChange}
                value={userUpdate.userEmail}
                variant="outlined"
              />
          </Grid>
            
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Numero de telephone"
                name="userPhone"
                onChange={handleChange}
                type="number"
                value={userUpdate.userPhone}
                variant="outlined"
              />
          </Grid>
            
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Profession"
                name="userJob"
                onChange={handleChange}
                value={userUpdate.userJob}
                variant="outlined"
              />
          </Grid>
            
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Pays"
                name="userCountry"
                onChange={handleChange}
                value={userUpdate.userCountry}
                variant="outlined"
              />
          </Grid>

          <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Adresse de residence"
                name="userAdress"
                onChange={handleChange}
                value={userUpdate.userAdress}
                variant="outlined"
              />
          </Grid>

        </Grid>

        <Container color="primary" className="containerAddFile">
          <label htmlFor="inputFile"><PhotoCameraSharp id="iconPicture"/>Ajouter une photo</label>
          <span id="fileChosen">Aucun fichier choisi</span>
          <input type="file" id="inputFile" onChange={(e) => setFile(e.target.files[0])}  hidden/>
        </Container>
      
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button type='submit' variant="contained"  color="primary">Enregistrer</Button>
        </Box>

        
        
    </form>
  );
};

export default SettingAccountDetails;



