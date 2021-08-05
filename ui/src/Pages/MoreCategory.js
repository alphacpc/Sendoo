import React, {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import ListLinkCategory from '../components/ListLinkCategory';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { makeStyles } from '@material-ui/core';


import myImg from "./../assets/images/post10.jpg";


import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import Pagination from '@material-ui/lab/Pagination';


const MoreCategory = () => {

    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const POST_PER_PAGE = 9;

    const [totalPages, setTotalPages] = useState(0);
    
    const startIndex = (page - 1) * POST_PER_PAGE;
    const selectedPost = cards.slice(startIndex, startIndex + POST_PER_PAGE);


    const handleClickPagination = (num) => {
      setPage(num)
    }

    useEffect(()=>{
      setTotalPages(Math.ceil(cards.length / POST_PER_PAGE))
    },[])


    return (
        <React.Fragment >
            
            <Navbar/>

            <ListLinkCategory />


            <Container  className={classes.ContainerElement}>
                <Breadcrumb/>    

                
                <Grid container spacing={4}>
            {selectedPost.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={myImg}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h1">
                      Titre de l'article
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>





          <div className={classes.pagination}>
             <Pagination count={totalPages}   color="secondary" />
        </div>





            </Container>

            <Footer/>


        </React.Fragment>
    )
}

export default MoreCategory;



const useStyles = makeStyles((theme) => ({
    ContainerElement:{
        padding: '20px 0',
    },




    icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 5px 0 #000',

      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
    



      pagination: {
        '& > *': {
          marginTop: theme.spacing(2),
        },
        width:'100%',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 80
      },
}));