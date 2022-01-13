import { useState } from "react";
import { Box, CardContent, Divider, Grid, TextField, Typography, } from "@material-ui/core";


const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: "Thomas",
    lastName: "Sankara",
    gender: "masculin",
    email: "Thomas@contact.bf",
    phone: "",
    state: "BF",
    country: "Burkina Faso",
    username: "Thomas",
    job: "Developpeur junior",
    adresse: "",
  });


  return (
    <form autoComplete="off" noValidate {...props}>
      <Box>
        <Typography variant="span" component="h1">
          Details du compte
        </Typography>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Prenom"
                name="firstName"
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nom de famille"
                name="lastName"
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nom d'utilisateur"
                name="username"
                required
                value={values.username}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Genre"
                name="gender"
                required
                value={values.gender}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Adresse email"
                name="email"
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Numero de telephone"
                name="phone"
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Profession"
                name="job"
                required
                value={values.job}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Pays"
                name="country"
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Adresse de residence"
                name="Adress"
                required
                value={values.adresse}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </form>
  );
};

export default AccountProfileDetails;
