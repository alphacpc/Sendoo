import Thomas from './../../assets/images/thomas.jpg';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';

const user = {
  avatar: Thomas,
  city: 'Burkina Faso',
  country: 'BF',
  jobTitle: 'Senior Developer',
  name: 'Thomas Sankara',
  timezone: 'GTM-7'
};

const AccountProfile = (props) => (
  <Box {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0px 8px 8px 0px #000',
          padding: '40px 0',
        }}
      >

        <img src={user.avatar} width={300} height={340} style={{borderRadius:'50%'}} />
        <Typography
          color="textPrimary"
          variant="h4"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="span"
        >
          {`${user.city}`}
        </Typography>
        
      </Box>
    </CardContent>
    
  </Box>
);

export default AccountProfile;
