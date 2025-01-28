import React from "react";
import "./Groups.css";

function Groups() {
  return (
    <div className="groups">
      <div className="group-item">
        <div className="item-top">
          <span>Group №:</span>
          <p>{1}</p>
        </div>
        <div className="item-top item-bottom">
          <span>Teacher:</span>
          <p>{"teacher name"}</p>
        </div>
      </div>
      <div className="group-item">
        <div className="item-top">
          <span>Group №:</span>
          <p>{1}</p>
        </div>
        <div className="item-top item-bottom">
          <span>Teacher:</span>
          <p>{"teacher name"}</p>
        </div>
      </div>
    </div>
  );
}

export default Groups;
