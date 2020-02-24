import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  inline: {
    display: "inline"
  }
}));

const Stories = ({ avatar, name }) => {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>{<Avatar>{avatar}</Avatar>}</ListItemAvatar>
      <ListItemText primary={name} secondary="Febrero 24 14:05" />
    </ListItem>
  );
};

export default Stories;
