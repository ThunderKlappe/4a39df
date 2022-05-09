import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { getAttachments } from "./Messages";
import { useBaseClasses } from "../../themes/messageBubbleStyles";
import MessageBubble from "./MessageBubble";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  messageWrapper: {
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

      <MessageBubble
        text={text}
        attachments={attachmentImages}
        classes={classes}
      />
    </Box>
  );
};

export default SenderBubble;
