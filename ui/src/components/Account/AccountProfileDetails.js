import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';

const states = [
  {
    value: 'Dakar',
    label: 'Dakar'
  },
  {
    value: 'Accra',
    label: 'Accra'
  },
  {
    value: 'Ouagadougou',
    label: 'Ouagadougou'
  }
];

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Thomas',
    lastName: 'Sankara',
    email: 'Thomas@contact.bf',
    phone: '',
    state: 'BF',
    country: 'Burkina Faso',
    username : 'thomas',
    job: 'Developpeur junior',
    adresse: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Box>

        <Typography variant="span" component="h1">Details du compte</Typography>
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Prenom"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Nom de famille"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Nom d'utilisateur"
                name="username"
                onChange={handleChange}
                required
                value={values.username}
                variant="outlined"
              />
            </Grid>


            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Adresse email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Numero de telephone"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Profession"
                name="job"
                onChange={handleChange}
                required
                value={values.job}
                variant="outlined"
              />
            </Grid>
            
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Pays"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Adresse de residence"
                name="Adress"
                onChange={handleChange}
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
