import React, { Component, useState }  from 'react';
import { alpha, AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Mail, Notifications, Search } from '@material-ui/icons';
import useStyles from './NavStyle';

const Navabar = ()=>{
    const classes = useStyles();
    const inputHandler = (e)=>{
        console.log(e.target.value)
    }
    return (
        <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' className={classes.logo}>
                        Material UI
                </Typography>
                <Typography variant='h6' className={classes.mobileLogo}>
                     Material UI 
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder='Search' className={classes.input} onChange={inputHandler}/>
                </div>
                <div className={classes.icons}>
                    <Badge badgeContent={4} color={'secondary'}>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={4} color={'secondary'}>
                        <Notifications />
                    </Badge>
                    <Avatar src='https://images.pexels.com/photos/3594262/pexels-photo-3594262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Navabar;