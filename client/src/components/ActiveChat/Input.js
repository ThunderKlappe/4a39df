import React, { useState } from "react";
import axios from "axios";
import { FormControl, FilledInput, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhotoUpload from "./PhotoUpload";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  photosContainer: {
    display: "flex",
    alignItems: "center",
    maxWidth: "50%",
  },
  previewImage: {
    height: 50,
    borderRadius: 5,
    transition: ".25s",
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(.7)",
    },
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [uploadPhotos, setUploadPhotos] = useState([]);

  const getPhoto = (photos) => {
    const reader = new FileReader();
    reader.readAsDataURL(photos[0]);
    reader.onloadend = () => {
      setPreviewSrc(reader.result);
    };
    setUploadPhotos([...photos]);
  };

  const handleImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

      const uninterceptedAxiosInstance = axios.create();
      const response = await uninterceptedAxiosInstance.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        formData
      );
      return response.data.url;
    } catch (error) {
      console.error(error);
    }
  };

  const handleImages = async () => {
    const attachments = [];
    if (uploadPhotos.length > 0) {
      for (const photo of uploadPhotos) {
        const photoUrl = await handleImage(photo);
        attachments.push(photoUrl);
      }
    }
    return attachments;
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const attachments = await handleImages();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachments,
    };
    await postMessage(reqBody);
    setText("");
    setPreviewSrc("");
    setUploadPhotos([]);
  };

  return (
    <form id="text-form" className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <Box className={classes.photosContainer}>
              {previewSrc && (
                <img
                  src={previewSrc}
                  alt="upload preview"
                  className={classes.previewImage}
                />
              )}
              <PhotoUpload getPhoto={getPhoto} />
            </Box>
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;
