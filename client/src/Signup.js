import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import SplashPicture from "./components/SplashPicture";
import { useClasses } from "./themes/splashpageStyles";

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

  return (
    <Grid container className={classes.root}>
      <SplashPicture />
      <Box className={classes.contentContainer}>
        <Box className={classes.topContainer}>
          <Box className={classes.topWrapper}>
            <Typography className={classes.instructionText}>
              Already have an account?
            </Typography>
            <Button
              href='/login'
              to='/login'
              color='secondary'
              variant='contained'
              size='large'
            >
              Login
            </Button>
          </Box>
        </Box>
        <Box className={classes.mainContainer}>
          <Box className={classes.mainWrapper}>
            <Typography
              className={`${classes.headerText} ${classes.largeText}`}
            >
              Create an account.
            </Typography>
            <form onSubmit={handleRegister}>
              <Grid container direction='column' spacing={3}>
                <Grid item>
                  <Typography className={classes.instructionText}>
                    Username
                  </Typography>
                  <FormControl fullWidth margin='normal' required>
                    <TextField
                      aria-label='username'
                      name='username'
                      type='text'
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography className={classes.instructionText}>
                    E-mail address
                  </Typography>
                  <FormControl fullWidth margin='normal' required>
                    <TextField
                      aria-label='e-mail address'
                      name='email'
                      type='email'
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography className={classes.instructionText}>
                    Password
                  </Typography>
                  <FormControl
                    error={!!formErrorMessage.confirmPassword}
                    fullWidth
                    margin='normal'
                    required
                  >
                    <TextField
                      aria-label='password'
                      type='password'
                      name='password'
                      inputProps={{ minLength: 6 }}
                      required
                    />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography className={classes.instructionText}>
                    Confirm Password
                  </Typography>
                  <FormControl
                    error={!!formErrorMessage.confirmPassword}
                    fullWidth
                    margin='normal'
                    required
                  >
                    <TextField
                      aria-label='confirm password'
                      type='password'
                      name='confirmPassword'
                      inputProps={{ minLength: 6 }}
                      required
                    />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid container className={classes.submitContainer}>
                  <Button
                    type='submit'
                    color='primary'
                    variant='contained'
                    size='large'
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
