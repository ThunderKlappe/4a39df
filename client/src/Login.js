import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  InputAdornment,
  Link,
} from "@material-ui/core";
import { useClasses } from "./themes/splashpageStyles";
import SplashPicture from "./components/SplashPicture";

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
        <Box className={classes.topContainer}>
          <Box className={classes.topWrapper}>
            <Typography className={classes.instructionText}>
              Don't have an account?
            </Typography>
            <Button
              href="/register"
              to="/register"
              color="secondary"
              variant="contained"
              size="large"
            >
              Create Account
            </Button>
          </Box>
        </Box>
        <Box className={classes.mainContainer}>
          <Box className={classes.mainWrapper}>
            <Typography
              className={`${classes.headerText} ${classes.largeText}`}
            >
              Welcome Back!
            </Typography>
            <form onSubmit={handleLogin}>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Typography className={classes.instructionText}>
                    Username
                  </Typography>
                  <FormControl fullWidth margin="normal" required>
                    <TextField
                      aria-label="username"
                      name="username"
                      type="text"
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography className={classes.instructionText}>
                    Password
                  </Typography>
                  <FormControl fullWidth margin="normal" required>
                    <TextField
                      aria-label="password"
                      type="password"
                      name="password"
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
                  </FormControl>
                </Grid>
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
