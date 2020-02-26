import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  letters: {
    color: "#fff"
  }
}));

const Stories = ({ avatar, name }) => {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>{<Avatar>{avatar}</Avatar>}</ListItemAvatar>
      <ListItemText
        className={classes.letters}
        primary={name}
        secondary={<p className={classes.letters}>Febrero 24 14:05</p>}
      />
    </ListItem>
  );
};

export default Stories;
