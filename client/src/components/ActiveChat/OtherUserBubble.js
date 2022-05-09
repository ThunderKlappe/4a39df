import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import { getAttachments } from "./Messages";
import { useBaseClasses } from "../../themes/messageBubbleStyles";
import MessageBubble from "./MessageBubble";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
    width: "fit-content",
  },
  messageColor: {
    color: "#FFFFFF",
  },
  photoMultRadius: {
    borderRadius: "0 10px 10px 10px",
  },
  photoTextRadius: {
    borderRadius: "0px 10px 0px 0px",
  },
  photoNoTextRadius: {
    borderRadius: "0 10px 10px 10px",
  },
}));

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const baseClasses = useBaseClasses();
  const otherClasses = useStyles();
  const classes = { ...baseClasses, ...otherClasses };

  let attachmentImages = [];
  if (attachments) {
    attachmentImages = getAttachments(text, attachments, classes);
  }

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.date}>
          {otherUser.username} {time}
        </Typography>
        <MessageBubble
          text={text}
          attachments={attachmentImages}
          classes={classes}
        />
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
