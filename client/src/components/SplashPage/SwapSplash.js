import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useClasses } from "../../themes/splashpageStyles";

const SwapSplash = ({ header, button, link }) => {
  const classes = useClasses();
  return (
    <Box className={classes.topContainer}>
      <Box className={classes.topWrapper}>
        <Typography className={classes.instructionText}>{header}</Typography>
        <Button
          href={link}
          to={link}
          color="secondary"
          variant="contained"
          size="large"
        >
          {button}
        </Button>
      </Box>
    </Box>
  );
};
export default SwapSplash;
