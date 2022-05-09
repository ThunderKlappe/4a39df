import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import SplashPicture from "./components/SplashPage/SplashPicture";
import { useClasses } from "./themes/splashpageStyles";
import SwapSplash from "./components/SplashPage/SwapSplash";
import SplashInput from "./components/SplashPage/SplashInput";

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useClasses();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
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
          header="Already have an account?"
          button="Login"
          link="/login"
        />
        <Box className={classes.mainContainer}>
          <Box className={classes.mainWrapper}>
            <Typography
              className={`${classes.headerText} ${classes.largeText}`}
            >
              Create an account.
            </Typography>
            <form onSubmit={handleRegister}>
              <Grid container direction="column" spacing={3}>
                <SplashInput
                  label="Username"
                  inputName="username"
                  type="text"
                />
                <SplashInput
                  label="E-mail address"
                  inputName="email"
                  type="email"
                />
                <SplashInput
                  label="Password"
                  inputName="password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  formErrorMessage={formErrorMessage}
                />
                <SplashInput
                  label="Confirm Password"
                  inputName="confirmPassword"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  formErrorMessage={formErrorMessage}
                />
                <Grid container className={classes.submitContainer}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="large"
                  >
                    Create
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

export default Signup;
