import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    actions:{
        borderTop: '1px solid #ece7e7'
    },
    card:{
        marginBottom: theme.spacing(2),
    },
    container:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      [theme.breakpoints.down('sm')]:{
        flexWrap: 'wrap'
      }
    }
}));
const Post = () => {
  const classes = useStyles();
  return (
   <Container className={classes.container}>
      <Card className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1642871731257-e8ce1c6fe044?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="green iguana"
      />
      <CardContent>
      <Typography variant="h5" component={'div'}>
            First Post
        </Typography>
        <Typography variant="body2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1649675178915-e8693f7a8187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="green iguana"
      />
      <CardContent>
      <Typography variant="h5" component={'div'}>
            Second Post
        </Typography>
        <Typography variant="body2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   </Container>
  );
};
export default Post;
