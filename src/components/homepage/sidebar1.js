import React, { useState } from "react";
import "./homepage.css"; // Assuming CSS file is named LeftSidebar.css
import sound from '../../public/soundbass.png'

function LeftSidebar() {
  const [activeItem, setActiveItem] = useState(null); // Track active list item

  const handleClick = (item) => {
    setActiveItem(item); // Update active state on click
  };

  return (
    <div className="left-sidebar">
      <div className="part-1">
        
        <div className="sidebar-header">
          <div className="camera">CAMERA</div>
        </div>
        <ul className="sidebar-list">
          <li
            className={`sidebar-item ${activeItem === "Web Cam 1" ? "active" : ""
              }`}
            onClick={() => handleClick("Web Cam 1")}
          >
            <span className="camera-icon"></span> Cam controls
          </li>
          <li
            className={`sidebar-item ${activeItem === "Web Cam 2" ? "active" : ""
              }`}
            onClick={() => handleClick("Web Cam 2")}
          >
            <span className="camera-icon"></span> Cam records
          </li>
          <li
            className={`sidebar-item ${activeItem === "Web Cam 3" ? "active" : ""
              }`}
            onClick={() => handleClick("Web Cam 3")}
          >
            <i class="fa-solid fa-volume-high" style={{ color: 'white' }}></i>

            <span className="camera-icon"></span> Cam settings          </li>
          
        </ul>




      </div>
      <div className="audio-sources">

        <div className="" style={{ marginLeft: '5px', padding: '5px' }}>3 Audio Sources</div>
        <div className="slider">
        
          <label htmlFor="microphone-slider" style={{ marginLeft: '5px', padding: '5px' }}>Build-in Microphone </label>
          <input type="range" id="microphone-slider" name="microphone-slider" min="0" max="100" defaultValue="50" className="sliders" style={{ marginLeft: '8px', width: '270px' }} />
          <img src={sound} alt="sound" width={30} height={30} style={{ marginTop: '3px', marginLeft: '8px', width: '270px' }} />

        </div>
        <div className="slider">
       
          <label htmlFor="video-sound-slider" style={{ marginLeft: '5px', padding: '5px' }}>Video Sound </label>
          <input type="range" id="video-sound-slider" name="video-sound-slider" min="0" max="100" defaultValue="50" className="sliders" style={{ marginLeft: '8px', width: '270px' }} />
          <img src={sound} alt="sound" width={30} height={30} style={{ marginTop: '3px', marginLeft: '8px', width: '270px' }} />
        </div>
       
      </div>

    </div>
  );
}

export default LeftSidebar;
const part1ContainerStyle = {
  alignSelf: "stretch",
  height: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "9px",
};

const innerContainerStyle = {

  alignSelf: "stretch",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "0px 14px 0px 9px",
};

const globalLayersStyle = {
  flex: "1",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",

};

const globalLayersTextStyle = {

  alignItems: "center",
  flexShrink: "0",
  zIndex: "2",
};



const inputStyle = {
  width: "178px",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  height: "11px",
  // display: "flex",
  flexDirection: "column",
  // alignItems: "flex-start",
  // justifyContent: "flex-start",
  // padding: "14px 3px 14px 5px",
  boxSizing: "border-box",
  fontFamily: "Inter",
  fontSize: "20px",
  color: "#a5a9ac",
};

