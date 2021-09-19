import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UploadFormPage.css";
import { addSong, getSongs } from "../../store/song";

function UploadFormPage({ setShowModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const song = {
      title,
      url,
      userId: sessionUser.id,
    };
    setErrors([]);
    if (title === "" || url === "") {
      setErrors(["Please fill out all required fields"]);
    } else {
      dispatch(addSong(song));
      setShowModal(false);
      dispatch(getSongs());
      setTitle("");
      setAlbum("");
      setUrl("");
    }
  };

  return (
    <div className="upload-div">
      <h2>Upload New Song</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <div className="upload-form-errors">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <label>
          Song Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          MP3 File:
          <input
            type="text"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UploadFormPage;
