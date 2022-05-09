import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { getAttachments } from "./Messages";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    width: "fit-content",
  },
  photoMessageMult: {
    height: 75,
    margin: 5,
    borderRadius: "10px 10px 0 10px",
  },
  photoMessageText: {
    height: 100,
    borderRadius: "10px 10px 0px 0px",
  },
  photoMessageNoText: {
    height: 100,
    borderRadius: "10px 10px 0 10px",
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();

  let attachmentImages = [];
  if (attachments) {
    attachmentImages = getAttachments(text, attachments, classes);
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>

      {attachmentImages.length > 1 ? (
        <Box className={classes.root}>
          <Box className={text ? classes.bubble : null}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
          <Box>{attachmentImages}</Box>
        </Box>
      ) : (
        <Box className={text ? classes.bubble : null}>
          {attachmentImages}
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default SenderBubble;
