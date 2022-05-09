import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from ".";
import moment from "moment";

export const getAttachments = (text, attachments, classes) =>
  attachments.map((att, index) => (
    <img
      key={att}
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
  ));

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            text={message.text}
            time={time}
            attachments={message.attachments}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
            attachments={message.attachments}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
