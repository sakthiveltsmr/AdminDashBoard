import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Me from "../../img/PRO.jpg";
export default function Top() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">SakthiAdmin</span>
        </div>
        <div className="topright">
          <div className="topIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topIconContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="topIconContainer">
            <Settings />
          </div>
          <img src={Me} alt="me" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
