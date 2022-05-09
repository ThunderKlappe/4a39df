import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { getAttachments } from "./Messages";
import { useBaseClasses } from "../../themes/messageBubbleStyles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    width: "fit-content",
  },
  messageColor: {
    color: "#91A3C0",
  },
  photoMultRadius: {
    borderRadius: "10px 10px 0 10px",
  },
  photoTextRadius: {
    borderRadius: "10px 10px 0px 0px",
  },
  photoNoTextRadius: {
    borderRadius: "10px 10px 0 10px",
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const baseClasses = useBaseClasses();
  const otherClasses = useStyles();
  const classes = { ...baseClasses, ...otherClasses };

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
            <Typography className={`${classes.text} ${classes.messageColor}`}>
              {text}
            </Typography>
          </Box>
          <Box>{attachmentImages}</Box>
        </Box>
      ) : (
        <Box className={text ? classes.bubble : null}>
          {attachmentImages}
          <Typography className={`${classes.text} ${classes.messageColor}`}>
            {text}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SenderBubble;
