import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ImgPost from './../assets/images/post6.jpg';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';



const Category = () => {
    
  const classes = useStyles();

    
    return (
        <Container maxWidth="lg" >
          <div className={classes.root}>
            <h1 className={classes.titleCategory}>Education</h1>
            
            <Grid container spacing={3}>

                <Grid item xs={4} className={classes.gridItem}>
                  <img src={ImgPost} className={classes.media}/>
                  <CardContent className={classes.cardContent}>
                      <Typography variant="body2" color="textSecondary" component="p">
                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                  </CardContent>
                
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    />
                </Grid>

                <Grid item xs={4} className={classes.gridItem}>
                  <img src={ImgPost} className={classes.media}/>
                  <CardContent className={classes.cardContent}>
                      <Typography variant="body2" color="textSecondary" component="p">
                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                  </CardContent>
                
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    />
                </Grid>

                <Grid item xs={4} className={classes.gridItem}>
                  <img src={ImgPost} className={classes.media}/>
                  <CardContent className={classes.cardContent}>
                      <Typography variant="body2" color="textSecondary" component="p">
                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                  </CardContent>
                
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    />
                </Grid>

                

            </Grid>

            <div className={classes.showAllPosts}>
              <Link to="/category" className={classes.LinkSeeMore}>Voir plus<ArrowRightAltIcon /></Link>
            </div>

          </div>
        </Container>

    )
}

export default Category;



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    titleCategory:{
      marginTop: 80,
      marginBottom: 20,
      fontWeight: 'bold',
      fontSize: 28,
      fontFamily: 'sans-serif',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    gridItem:{
      marginBottom: 40,
    },
    cardContent:{
      padding: '16px 0 0 4px',
    },
    media: {
      height: 222,
      width: '100%',
    },
    mediaFull:{
      width: '100%',    
    },
    avatar: {
      backgroundColor: '#f05',
    },

    showAllPosts:{
      textAlign:'center'
    },
    LinkSeeMore:{
      backgroundColor:'#f05',
      padding: '15px 40px',
      textDecoration: 'none',
      color: '#fff',
    },
    
  }));