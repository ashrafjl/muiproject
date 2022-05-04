import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Fab, Modal, Tooltip } from "@material-ui/core";
import { Add } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
  },
}));
const AddPost = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Tooltip title="Add" aria-label="Add" onClick={() => setOpen(true)}>
        <Fab className={classes.fab} color="primary">
          <Add />
        </Fab>
      </Tooltip>
    </React.Fragment>
  );
};
export default AddPost;
