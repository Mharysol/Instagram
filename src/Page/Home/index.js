import React, { useState } from "react";
import {
  AppBar,
  List,
  Box,
  IconButton,
  Modal,
  Input,
  Button
} from "@material-ui/core";
import { PersonOutline } from "@material-ui/icons";
import InstagramIcon from "../../Components/CustomAppBar/InstagramIcon";
import SearchBox from "../../Components/CustomAppBar/SearchBox";
import IconsProfile from "../../Components/CustomAppBar/IconsProfile";
import Feed from "../../Components/Feeds/Feed";
import Stories from "../../Components/Feeds/Stories";
import apiFeeds from "../../apiFeeds";

import { useStyles } from "./styles";
import { CustomAppBar } from "../../Components/CustomAppBar";
import Profile from "./Profile";

const Home = match => {
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
      <CustomAppBar
        color="secondary"
        toolbar={
          <>
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
          </>
        }
      ></CustomAppBar>
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
      {!match.match.path.includes("profile") && logged && (
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
      {match.match.path.includes("profile") && logged && <Profile />}
    </Box>
  );
};

export default Home;
