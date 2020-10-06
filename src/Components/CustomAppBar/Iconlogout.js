import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, ButtonBase, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Iconlogout({ logout }) {
  const classes = useStyles();
  return (
    <div className={`${classes.paper} ${classes.modalcontainer}`}>
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              alt="complex"
              src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/August/black+and+white+tuxedo+cat+_+british+prime+minister+downing+street+cat+humphrey.jpg"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Kepler
              </Typography>
              <Typography variant="body2" gutterBottom>
                Buenos Aires
              </Typography>
            </Grid>
            <Grid item>
              <Link to="/profile">
                <Button
                  variant="outlined"
                  className={classes.Singup}
                  color="primary"
                  onClick={() => {}}
                />
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                className={classes.Singup}
                color="primary"
                onClick={() => {
                  logout();
                }}
              >
                Log out
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
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
