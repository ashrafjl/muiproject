import React, { Component }  from 'react';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import Navabar from './components/Navbar';
import LeftBar from './components/LeftBar';
import { Grid } from '@material-ui/core';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import AddPost from './components/AddPost';
const useStyles = makeStyles((theme)=>({
  right:{
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    },
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div>
        <Navabar />
        <Grid container>
            <Grid item sm={2} xs={2}>
              <LeftBar />
            </Grid>
            <Grid item sm={7} xs={10}>
              <Feed />
            </Grid>
            <Grid item sm={3} className={classes.right}>
              <RightBar />
            </Grid>
        </Grid>
        <AddPost />
    </div>
  );
}

export default App;
