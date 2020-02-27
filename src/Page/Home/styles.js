import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360
  },
  grow: {
    flexGrow: 1
  },
  searchBox: {
    marginLeft: "25%"
  },
  feedcontainer: {
    marginLeft: "15%",
    marginTop: "5%"
  },
  storiescontainer: {
    marginLeft: "70%",
    marginRight: "10%",
    marginTop: "10%",
    maxWidth: "25%",
    backgroundColor: "#000"
  },
  appBar: {
    backgroundColor: "#000"
  },
  App: {
    backgroundColor: theme.palette.background.default
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

  rightIcons: {
    margin: "5px",
    color: theme.palette.common.white
  },

  Singup: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
