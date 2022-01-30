import { Box, CardContent, Divider, Grid, TextField, } from "@material-ui/core";


const AccountProfileDetails = ({user}) => {


  return (
    <form autoComplete="off" >
      <Box>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Prenom"
                name="firstName"
                required
                value={user.userFname+" "+user.userMname}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nom de famille"
                name="lastName"
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
                required
                value={user.userName}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Genre"
                name="gender"
                required
                value={user.userGender}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Adresse email"
                name="email"
                required
                value={user.userEmail}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Numero de telephone"
                name="phone"
                type="number"
                value={user.userPhone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Profession"
                name="job"
                required
                value={user.userJob}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Pays"
                name="country"
                required
                value={user.userCountry}
                variant="outlined"
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Adresse de residence"
                name="Adress"
                required
                value={user.userAdress}
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
