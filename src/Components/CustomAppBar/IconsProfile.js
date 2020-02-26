import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { IconButton, Modal } from "@material-ui/core";
import { Explore, FavoriteBorder, PersonOutline } from "@material-ui/icons";
import Profile from "../Profile/Profile";

const IconsProfile = ({ logout }) => {
  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);
  const openmodal = () => {
    setShowModal(true);
  };
  const closemodal = () => {
    setShowModal(false);
  };
  return (
    <div className={classes.sectionDesktop}>
      <IconButton>
        <Explore className={classes.rightIcons} />
      </IconButton>

      <IconButton>
        <FavoriteBorder className={classes.rightIcons} />
      </IconButton>

      <IconButton onClick={openmodal}>
        <PersonOutline className={classes.rightIcons} />
      </IconButton>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={showModal}
        onClose={closemodal}
      >
        <Profile logout={logout} />
      </Modal>
    </div>
  );
};
export default IconsProfile;

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
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.default,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  modal: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  modalcontainer: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  Singup: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
