import React, { useState } from 'react';
import DashboardSlideBar from './../components/DashboardSlideBar';
import DashboardNavbar from './../components/DashboardNavbar';

import BlocStyleDashboard from './../Styles';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  TextField
} from '@material-ui/core';


const ResetPassword = () => {

    const [values, setValues] = useState({
        old_password: '',
        new_password: '',
        confirm_password: ''
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };
    


    return (
        <div>
             <DashboardNavbar/>
            
            <div style={BlocStyleDashboard.SlideAndContent}>
                
                <DashboardSlideBar />
                
                <div style={BlocStyleDashboard.Content}>
                   
                <form style={{ height:'100%', display: 'flex', justifyContent:'center' ,alignItems:'center'}}>
                    <Box>
                        <Typography variant="span" component="h3">Changer votre mot de passe</Typography>
                        <CardContent>
                        <TextField
                            fullWidth
                            label="Ancien mot de passe"
                            margin="normal"
                            name="old_password"
                            onChange={handleChange}
                            type="password"
                            value={values.old_password}
                            variant="outlined"
                        />


                        <TextField
                            fullWidth
                            label="Nouveau mot de passe"
                            margin="normal"
                            name="new_password"
                            onChange={handleChange}
                            type="password"
                            value={values.new_password}
                            variant="outlined"
                        />

                        <TextField
                            fullWidth
                            label="Confirmer votre mot de passe"
                            margin="normal"
                            name="confirm_password"
                            onChange={handleChange}
                            type="password"
                            value={values.confirm_password}
                            variant="outlined"
                        />
                        </CardContent>
                        <Divider />
                        <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: 2
                        }}
                        >
                        <Button
                            color="primary"
                            variant="contained"
                        >
                            Sauvegarder
                        </Button>
                        </Box>
                    </Box>
                    </form>




                </div>

            </div>
        </div>
    )
}

export default ResetPassword
