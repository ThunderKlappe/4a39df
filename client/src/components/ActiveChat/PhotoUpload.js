import React from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
import AddAPhotoTwoTone from "@material-ui/icons/AddAPhotoTwoTone";

const PhotoUpload = ({ getPhoto }) => {
  return (
    <InputAdornment position="end">
      <label htmlFor="photo-upload">
        <input
          multiple
          name="photo-upload"
          accept="image/*"
          id="photo-upload"
          type="file"
          hidden
          onChange={(event) => getPhoto(event)}
        />
        <IconButton
          color="primary"
          aria-label="upload photo"
          component="span"
          id="photo-upload-button"
        >
          <AddAPhotoTwoTone />
        </IconButton>
      </label>
    </InputAdornment>
  );
};
export default PhotoUpload;
