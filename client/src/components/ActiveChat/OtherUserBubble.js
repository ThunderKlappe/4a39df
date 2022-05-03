import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
    width: "fit-content",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8,
  },
  photoMessageMult: {
    height: 75,
    margin: 5,
    borderRadius: "0 10px 10px 10px",
  },
  photoMessageText: {
    height: 100,
    borderRadius: "0px 10px 0px 0px",
  },
  photoMessageNoText: {
    height: 100,
    borderRadius: "0 10px 10px 10px",
  },
}));

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const classes = useStyles();

  const attachmentImages = [];
  if (attachments) {
    attachments.forEach((att, index) => {
      attachmentImages.push(
        <img
          key={index}
          alt={`attachment ${index}`}
          src={att}
          className={
            attachments.length > 1
              ? classes.photoMessageMult
              : text
              ? classes.photoMessageText
              : classes.photoMessageNoText
          }
        />
      );
    });
  }

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
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
    </Box>
  );
};

export default OtherUserBubble;
