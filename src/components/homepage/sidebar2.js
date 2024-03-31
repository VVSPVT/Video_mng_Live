import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './homepage.css';
import image from '../../public/main.png';

function RightSidebar({ onShowFormChange, on3DViewClick }) {
  const [showForm, setShowForm] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [is3DViewClicked, setIs3DViewClicked] = useState(false); // New state

  const handleAorButtonClick = () => {
    setShowForm(true);
    onShowFormChange(true);
  };

  const handle3DViewButtonClick = () => {
    setIs3DViewClicked(true);
    on3DViewClick(true); // Pass the state to the parent component
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log('Files:', acceptedFiles);
    if (acceptedFiles && acceptedFiles.length > 0) {
      const uploadedImageFile = acceptedFiles[0];
      const imageUrl = URL.createObjectURL(uploadedImageFile);
      setUploadedImage(imageUrl);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="right-sidebar">
  <div className='two3'>
        <button className="arrow-button" onClick={handleAorButtonClick}>Aor</button>
        <button className="arrow-button" onClick={handle3DViewButtonClick}>3D view</button>
      </div>


      {showForm ? (
        <form className="layer-settings-menu1">
          <div className='form-container'>
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>Drag and drop an image here or click to select</p>
            </div>

            {/* Display uploaded image preview */}
            {uploadedImage && (
              <div className="image-preview">
                <img src={uploadedImage} alt="Uploaded" className='preview' />
              </div>
            )}

            <div class="row">
              <div class="col-25">
                <label for="fname">Name</label>
              </div>
              <div class="col-75">
                <input type="text" id="fname" name="firstname" placeholder=" name.."></input>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="lname">Height</label>
              </div>
              <div class="col-75">
                <input type="text" id="lname" name="lastname" placeholder="height"></input>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="country">Country</label>
              </div>
              <div class="col-75">
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="subject">Other details</label>
              </div>
              <div class="col-75">
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
              </div>
            </div>

            {/* Add submit button */}
            <button type="submit">Submit</button>
          </div>


        </form>
      ) : (
        <div className="layer-settings-menu">
          <img src={image} alt="Main" />
        </div>
      )}
    </div>
  );
}

export default RightSidebar;
