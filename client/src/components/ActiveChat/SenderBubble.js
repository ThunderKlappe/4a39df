import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

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
  },
  photoMessage: {
    height: 100,
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();

  const attachmentImages = [];
  if (attachments) {
    attachments.forEach((att, index) => {
      attachmentImages.push(
        <img
          key={index}
          alt={`attachment ${index}`}
          src={att}
          className={classes.photoMessage}
        />
      );
    });
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.bubble}>
        {attachmentImages}
        <Typography className={classes.text}>{text}</Typography>
      </Box>
    </Box>
  );
};

export default SenderBubble;
