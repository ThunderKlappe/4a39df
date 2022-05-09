import { Box, Typography } from "@material-ui/core";
import React from "react";

const MessageBubble = ({ text, attachments, classes }) => {
  return (
    <Box>
      {attachments.length > 1 ? (
        <Box className={classes.messageContainer}>
          <Box className={classes.messageWrapper}>
            <Box className={text ? classes.bubble : null}>
              {text && (
                <Typography
                  className={`${classes.text} ${classes.messageColor}`}
                >
                  {text}
                </Typography>
              )}
            </Box>
            <Box>{attachments}</Box>
          </Box>
        </Box>
      ) : (
        <Box className={text ? classes.bubble : null}>
          {attachments}
          {text && (
            <Typography className={`${classes.text} ${classes.messageColor}`}>
              {text}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default MessageBubble;
