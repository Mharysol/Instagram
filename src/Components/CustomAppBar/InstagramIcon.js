import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Instagram } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    color: theme.palette.common.white
  }
}));

const InstagramIcon = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <IconButton
        onClick={() => {
          alert("Vamos a Instagram");
        }}
      >
        <Instagram className={classes.icon} />
      </IconButton>
      <Typography variant="h6" noWrap>
        InstaCats
      </Typography>
    </div>
  );
};
export default InstagramIcon;
