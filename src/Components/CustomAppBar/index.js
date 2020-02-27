import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

export const CustomAppBar = props => {
  return (
    <AppBar position="sticky" color={props.color}>
      {props.toolbar ? <Toolbar>{props.toolbar}</Toolbar> : ""}
    </AppBar>
  );
};
