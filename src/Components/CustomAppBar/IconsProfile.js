import React from "react";
import { makeStyles } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Explore, FavoriteBorder, PersonOutline } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  rightIcons: {
    margin: "5px",
    color: theme.palette.common.white
  }
}));

const IconsProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.sectionDesktop}>
      <IconButton>
        <Explore className={classes.rightIcons} />
      </IconButton>

      <IconButton>
        <FavoriteBorder className={classes.rightIcons} />
      </IconButton>

      <IconButton>
        <PersonOutline className={classes.rightIcons} />
      </IconButton>
    </div>
  );
};
export default IconsProfile;
