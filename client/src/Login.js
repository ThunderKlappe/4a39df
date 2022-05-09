import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  InputAdornment,
  Link,
} from "@material-ui/core";
import { useClasses } from "./themes/splashpageStyles";
import SplashPicture from "./components/SplashPage/SplashPicture";
import SwapSplash from "./components/SplashPage/SwapSplash";
import SplashInput from "./components/SplashPage/SplashInput";

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useClasses();

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

  const windowSize = window.innerWidth;
  const windowThreshold = 850;

  return (
    <Grid container className={classes.root}>
      {windowSize > windowThreshold && <SplashPicture />}
      <Box className={classes.contentContainer}>
        <SwapSplash
          header="Don't have an account?"
          button="Create Account"
          link="/register"
        />
        <Box className={classes.mainContainer}>
          <Box className={classes.mainWrapper}>
            <Typography
              className={`${classes.headerText} ${classes.largeText}`}
            >
              Welcome Back!
            </Typography>
            <form onSubmit={handleLogin}>
              <Grid container direction="column" spacing={3}>
                <SplashInput
                  label="Username"
                  inputName="username"
                  type="text"
                />
                <SplashInput
                  label="Password"
                  inputName="password"
                  type="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Link
                          className={classes.forgotLink}
                          href="/forgot"
                          to="/forgot"
                        >
                          Forgot?
                        </Link>
                      </InputAdornment>
                    ),
                  }}
                />
                <Grid container className={classes.submitContainer}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="large"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Login;
