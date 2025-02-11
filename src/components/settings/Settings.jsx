import React from 'react';
import "./Settings.css"
import light_img  from "../settings/Group 92.png";
import  tonight_img from "../settings/image copy.png"
import { LuSun } from "react-icons/lu";
import { PiMoonBold } from "react-icons/pi";


function Settings() {
  return (
    <div className="Settings">
      <h1>Settings</h1>
      <div className="settings_box">
        <div className="settings_item">
          <img src={light_img} alt="" />
          <button><LuSun /> Kunduzgi rejim</button>
        </div>
        <div className="settings_item">
          <img src={tonight_img} alt="" />
          <button className="tonight"><PiMoonBold /> Tungi rejim</button>
        </div>
      </div>
    </div>
  )
}

export default Settings