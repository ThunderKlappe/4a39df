import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bgImg from "./assets/bg-img.png";
import bubble from "./assets/bubble.svg";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100vh",
    fontFamily: "open sans",
  },
  sideImage: {
    height: "calc(425/700 * 100vw)",
    width: "calc(425/700 * 100vh)",
    backgroundSize: "100% auto",
    background: [
      "linear-gradient(180deg, rgba(58, 141, 255, .85) 0%, rgba(134, 185, 255, .85) 100%)",
      `url(${bgImg})`,
    ],
    backgroundBlendMode: "normal",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bubbleImage: {
    height: "10%",
    marginTop: "25vh",
    marginBottom: "5vh",
  },
  titleText: {
    width: "60%",
    fontSize: "3.5vh",
    color: "white",
    textAlign: "center",
  },
}));

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Grid container className={classes.root}>
      <Box className={classes.sideImage}>
        <Box
          className={classes.bubbleImage}
          component='img'
          src={bubble}
          alt='A speech bubble icon'
        />
        <Box className={classes.titleText}>
          Converse with anyone with any language
        </Box>
      </Box>
      <Box>
        <Grid container item>
          <Typography>Need to register?</Typography>
          <Link href='/register' to='/register'>
            <Button>Register</Button>
          </Link>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid>
            <Grid>
              <FormControl margin='normal' required>
                <TextField
                  aria-label='username'
                  label='Username'
                  name='username'
                  type='text'
                />
              </FormControl>
            </Grid>
            <FormControl margin='normal' required>
              <TextField
                label='password'
                aria-label='password'
                type='password'
                name='password'
              />
            </FormControl>
            <Grid>
              <Button type='submit' variant='contained' size='large'>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

export default Login;
