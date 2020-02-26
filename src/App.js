import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  List,
  Box,
  IconButton,
  Modal,
  Input,
  Button
} from "@material-ui/core";
import { PersonOutline } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import InstagramIcon from "./Components/CustomAppBar/InstagramIcon";
import SearchBox from "./Components/CustomAppBar/SearchBox";
import IconsProfile from "./Components/CustomAppBar/IconsProfile";
import Feed from "./Components/Feeds/Feed";
import Stories from "./Components/Feeds/Stories";
import apiFeeds from "./apiFeeds";

function App() {
  const classes = useStyles();

  const [logged, setlogged] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");

  const updateuser = event => {
    setuser(event.target.value);
  };
  const updatepassword = event => {
    setpassword(event.target.value);
  };

  const login = () => {
    setlogged(true);
  };
  const logout = () => {
    setlogged(false);
  };

  const openmodal = () => {
    setShowModal(true);
  };
  const closemodal = () => {
    setShowModal(false);
  };

  return (
    <Box className="App">
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <InstagramIcon />

          {logged && (
            <div className={classes.searchBox}>
              <SearchBox />
            </div>
          )}
          <div className={classes.grow}></div>
          {logged && <IconsProfile logout={logout} />}

          {!logged && (
            <IconButton onClick={openmodal}>
              <PersonOutline className={classes.rightIcons} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {showModal && (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={showModal}
          onClose={closemodal}
        >
          <div className={`${classes.paper} ${classes.modalcontainer}`}>
            <h2 id="simple-modal-title">Inicie Sesion</h2>
            <form className={classes.modal} noValidate autoComplete="off">
              <Input
                inputProps={{ "aria-label": "user or email" }}
                placeholder="User or Email"
                type="email"
                onChange={updateuser}
              />
              <Input
                placeholder="PassWord"
                inputProps={{ "aria-label": "password" }}
                type="password"
                onChange={updatepassword}
              />
              <Button
                variant="outlined"
                disabled={!user || !password}
                className={classes.Singup}
                color="primary"
                onClick={() => {
                  login();
                  closemodal();
                }}
              >
                Log in
              </Button>
            </form>
          </div>
        </Modal>
      )}
      {logged && (
        <div>
          <AppBar position="fixed" className={classes.storiescontainer}>
            <List className={classes.root}>
              {apiFeeds.map((stories, index) => {
                return (
                  <Stories
                    key={`${index}-feed`}
                    avatar={stories.avatar}
                    name={stories.name}
                  />
                );
              })}
            </List>
          </AppBar>

          {apiFeeds.map((feed, index) => {
            return (
              <div key={`${index}-feed`} className={classes.feedcontainer}>
                <Feed
                  image={feed.image}
                  avatar={feed.avatar}
                  name={feed.name}
                  city={feed.city}
                  description={feed.description}
                  comments={feed.comments}
                />
              </div>
            );
          })}
        </div>
      )}
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
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

export default App;
