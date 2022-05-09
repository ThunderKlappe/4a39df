import React, { useState, useEffect } from "react";
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
    marginLeft: 5,
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
  const uninterceptedAxiosInstance = axios.create();
  const [text, setText] = useState("");
  const [previewPics, setPreviewPics] = useState([]);
  const [uploadPhotos, setUploadPhotos] = useState([]);

  const getPhoto = async (event) => {
    setUploadPhotos([...event.target.files]);
    event.target.value = null;
  };

  useEffect(() => {
    const images = [];
    const fileReaders = [];
    let isCancel = false;
    if (uploadPhotos.length) {
      uploadPhotos.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            images.push(result);
          }
          if (images.length === uploadPhotos.length && !isCancel) {
            setPreviewPics(images);
          }
        };
        fileReader.readAsDataURL(file);
      });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [uploadPhotos]);

  const handleImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

      return uninterceptedAxiosInstance.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        formData
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleImages = async () => {
    const attachments = [];
    if (uploadPhotos.length > 0) {
      const uploadPromises = uploadPhotos.map((photo) => handleImage(photo));
      const photoResponses = await Promise.all(uploadPromises);
      return photoResponses.map((response) => response.data.url);
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
    setPreviewPics([]);
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
              {previewPics.length
                ? previewPics.map((preview, index) => {
                    return (
                      <img
                        key={preview}
                        src={preview}
                        alt={`upload preview ${index}`}
                        className={classes.previewImage}
                      />
                    );
                  })
                : null}
              <PhotoUpload getPhoto={getPhoto} />
            </Box>
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;
