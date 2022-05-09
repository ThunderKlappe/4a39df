import {
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useClasses } from "../../themes/splashpageStyles";

const SplashInput = ({
  label,
  inputName,
  type,
  inputProps,
  InputProps,
  formErrorMessage,
}) => {
  const classes = useClasses();
  if (!formErrorMessage) {
    formErrorMessage = {};
  }
  return (
    <Grid item>
      <Typography className={classes.instructionText}>{label}</Typography>
      <FormControl
        error={!!formErrorMessage.confirmPassword}
        fullWidth
        margin="normal"
        required
      >
        <TextField
          aria-label={label}
          type={type}
          name={inputName}
          inputProps={inputProps}
          InputProps={InputProps}
          required
        />
        <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
      </FormControl>
    </Grid>
  );
};
export default SplashInput;
