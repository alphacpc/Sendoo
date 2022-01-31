import { useState, useContext, useEffect } from 'react';
import { Box, Button, Grid, TextField, Container } from '@material-ui/core';
import { PhotoCameraSharp } from "@material-ui/icons";

import { Context } from "./../../context/Context";

const SettingAccountDetails = (props) => {
  
  const { user } = useContext(Context)
  const [userUpdate, setUserUpdate] = useState(user)

  const handleChange = (event) => {
    setUserUpdate({
      ...userUpdate,
      [event.target.name]: event.target.value
    });
  };



  useEffect(()=>{
    const actualBtn = document.getElementById('inputFile');
    const fileChosen = document.getElementById('fileChosen');
    actualBtn.addEventListener('change', function(){
      fileChosen.textContent = this.files[0].name
    })
  },[])

  console.log(userUpdate)

  return (
    <form autoComplete="off" noValidate {...props}>

      <Grid container spacing={3}>
          
          <Grid item md={6} xs={12} >
              <TextField
                fullWidth
                label="Prenom"
                name="userFname"
                onChange={handleChange}
                required
                value={user.userFname}
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
                value={user.userLname}
                variant="outlined"
              />
          </Grid>

          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nom d'utilisateur"
                name="username"
                onChange={handleChange}
                required
                value={user.userName}
                variant="outlined"
              />
          </Grid>

          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Genre"
                name="userGender"
                required
                value={user.userGender}
                variant="outlined"
              />
            </Grid>

          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Adresse email"
                name="userEmail"
                onChange={handleChange}
                required
                value={user.userEmail}
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
                value={user.userPhone}
                variant="outlined"
              />
          </Grid>
            
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Profession"
                name="userJob"
                onChange={handleChange}
                required
                value={user.userJob}
                variant="outlined"
              />
          </Grid>
            
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Pays"
                name="userCountry"
                onChange={handleChange}
                required
                value={user.userCountry}
                variant="outlined"
              />
          </Grid>

          <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Adresse de residence"
                name="userAdress"
                onChange={handleChange}
                required
                value={user.userAdress}
                variant="outlined"
              />
          </Grid>

        </Grid>

        <Container color="primary" className="containerAddFile">
          <label htmlFor="inputFile"><PhotoCameraSharp id="iconPicture"/>Ajouter une photo</label>
          <span id="fileChosen">Aucun fichier choisi</span>
          <input type="file" id="inputFile" hidden/>
        </Container>
      
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button color="primary" variant="contained">Enregistrer</Button>
        </Box>
        
    </form>
  );
};

export default SettingAccountDetails;



