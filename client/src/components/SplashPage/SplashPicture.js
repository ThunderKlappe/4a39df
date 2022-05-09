import React from "react";
import { Box, Typography } from "@material-ui/core";
import bubble from "../../assets/bubble.svg";
import { useClasses } from "../../themes/splashpageStyles";

const SplashPicture = () => {
  const classes = useClasses();

  return (
    <Box className={classes.sideImage}>
      <Box
        className={classes.bubbleImage}
        component="img"
        src={bubble}
        alt="A speech bubble icon"
      />
      <Typography className={`${classes.titleText} ${classes.largeText}`}>
        Converse with anyone with any language
      </Typography>
    </Box>
  );
};

export default SplashPicture;
