import React from 'react';
import {Card, CardContent, CardMedia, Grid, Typography, makeStyles} from "@material-ui/core";
import { Link } from "react-router-dom";


const CardPost = ({post, index, reload=false}) => {

    const classes = useStyles();
    const PF = "http://localhost/images/"



    return <React.Fragment>
        <Grid item key={index} xs={12} className="PostItem" sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={require(`${PF}/${post.postPhoto}`).default} title="Image title"/>
                
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom  variant="h5" component="h4" className="postTitle">
                        {(reload)? <a href={`/single-post/${post._id}`}>{post.postTitle}</a> : <Link to={`/single-post/${post._id}`} >{post.postTitle}</Link> }
                    </Typography>
                    
                    <Typography gutterBottom variant="body1" component="p" className="postBody">
                        {post.postBody}
                    </Typography>

                </CardContent>
            </Card>
        </Grid>
    </React.Fragment>;
};

export default CardPost;




const useStyles = makeStyles(() => ({
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 4px 5px 0 #000",
    },

    cardMedia: {
      paddingTop: "56.25%", // 16:9
      cursor:"pointer",
    },

    cardContent: {
      flexGrow: 1,
    },

}));
  