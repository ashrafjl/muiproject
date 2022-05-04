import React, { Component }  from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Post from './Post';
const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop: 80,
    }
}));
const Feed = ()=>{
    const classes = useStyles();
    return (
        <Container className={classes.container}>
           <Post />
           <Post />
        </Container>
    )
}
export default Feed;