import React, { Component }  from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography } from '@material-ui/core';
import {Apps, Camera, Collections, ExitToApp, Home, HomeOutlined, List, People, PlayCircleFilledOutlined, Settings, Storefront} from '@material-ui/icons';
const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop: 80,
        height: '100vh',
        position: 'sticky',
        top: '0',
        background: theme.palette.primary.light,
        [theme.breakpoints.up('sm')]:{
            background: 'white',
            color: '#555',
            borderRight: '1px solid #ece7e7'
        }
    },
    item:{
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]:{
            marginBottom: theme.spacing(3),
            color: 'white'
        },
        cursor: 'pointer',
    },
    icon:{
        [theme.breakpoints.up('sm')]:{
            marginRight: theme.spacing(1),
            fontSize: '18px'
        }
    },
    text:{
        fontWeight: '500',
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
    },
}));
const LeftBar = ()=>{
    const classes = useStyles();
    return (
       <Container className={classes.container}>
           <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
           </div>
           <div className={classes.item}>
                <People className={classes.icon}/>
                <Typography className={classes.text}>Friends</Typography>
           </div>
           <div className={classes.item}>
                <List className={classes.icon}/>
                <Typography className={classes.text}>Lists</Typography>
           </div>
           <div className={classes.item}>
                <Camera className={classes.icon}/>
                <Typography className={classes.text}>Camera</Typography>
           </div>
           <div className={classes.item}>
                <PlayCircleFilledOutlined className={classes.icon}/>
                <Typography className={classes.text}>Vides</Typography>
           </div>
           <div className={classes.item}>
                <Apps className={classes.icon}/>
                <Typography className={classes.text}>Apps</Typography>
           </div>
           <div className={classes.item}>
                <Collections className={classes.icon}/>
                <Typography className={classes.text}>Collections</Typography>
           </div>
           <div className={classes.item}>
                <Storefront className={classes.icon}/>
                <Typography className={classes.text}>Market Place</Typography>
           </div>
           <div className={classes.item}>
                <Settings className={classes.icon}/>
                <Typography className={classes.text}>Settings</Typography>
           </div>
           <div className={classes.item}>
                <ExitToApp className={classes.icon}/>
                <Typography className={classes.text}>Logout</Typography>
           </div>
       </Container>
    )
}
export default LeftBar;