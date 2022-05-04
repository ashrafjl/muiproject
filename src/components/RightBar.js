import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 80,
    height: '100vh',
    position: 'sticky',
    top: '0',
    color: '#555',

  },
}));
const RightBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="body2" component={"div"} style={{fontWeight:'bold'}}>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{marginBottom:10}}>
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          alt="some"
          src="https://images.unsplash.com/photo-1649899052132-f1f17bbae3bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          alt="some"
          src="https://images.unsplash.com/photo-1644982647970-e72b0397e57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          alt="some"
          src="https://images.unsplash.com/photo-1649899111001-f585ce5ec178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </AvatarGroup>
      <Typography>Gallery</Typography>
      <ImageList rowHeight={130} className={classes.imageList} cols={2}>
        <ImageListItem>
          <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://v4.mui.com/static/images/image-list/camera.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://v4.mui.com/static/images/image-list/hats.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://v4.mui.com/static/images/image-list/honey.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://v4.mui.com/static/images/image-list/honey.jpg" />
        </ImageListItem>
      </ImageList>
      
    </Container>
  );
};
export default RightBar;
