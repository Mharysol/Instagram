import React from "react";
import { AppBar, Toolbar, List, Box } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import "./App.css";
import InstagramIcon from "./Components/CustomAppBar/InstagramIcon";
import SearchBox from "./Components/CustomAppBar/SearchBox";
import IconsProfile from "./Components/CustomAppBar/IconsProfile";
import Feed from "./Components/Feeds/Feed";
import Stories from "./Components/Feeds/Stories";
import apiFeeds from "./apiFeeds";

function App() {
  const classes = useStyles();
  const logged = true;
  const theme = createMuiTheme({ palette: { type: "dark" } });

  return (
    <MuiThemeProvider theme={theme}>
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
            {logged && <IconsProfile />}

            {!logged && <div>Ingresar </div>}
          </Toolbar>
        </AppBar>
        <div>
          <AppBar position="fixed" className={classes.storiescontainer}>
            <List className={classes.root}>
              {apiFeeds.map(stories => {
                return <Stories avatar={stories.avatar} name={stories.name} />;
              })}
            </List>
          </AppBar>

          {apiFeeds.map(feed => {
            return (
              <div className={classes.feedcontainer}>
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
      </Box>
    </MuiThemeProvider>
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
    maxWidth: "25%"
  },
  appBar: {
    backgroundColor: theme.palette.primary.dark
  },
  App: {
    backgroundColor: theme.palette.background.default
  }
}));

export default App;
