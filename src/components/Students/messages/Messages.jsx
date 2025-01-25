import React, { useState } from "react";
import "./Messages.css";
import { Link } from "react-router-dom";

function Messages() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="messages-main">
      <div className="messages-left">
        <textarea
          name="mainMessage"
          placeholder="Xodimlar uchun xabar jo’natish"
          id=""
        ></textarea>
        <button>Xabar jo’natish</button>
      </div>
      <div className="messages-right">
        <div className="msg-right-title">
          <p>Barcha xabarlar</p>
        </div>
        <div className="messages-all">
          <div className="msg-all-item">
            <div className="all-item-top">
              <p
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: expanded ? "unset" : "3",
                  WebkitBoxOrient: "vertical",
                  overflow: expanded ? "visible" : "hidden",
                  textOverflow: expanded ? "unset" : "ellipsis",
                }}
              >
                Lorem ipsum dolor sit amet doloris. dolor sit amet doloris.
                Lorem ipsum dolor sit amet doloris. dolor sit amet doloris.Lorem
                ipsum dolor Lorem ipsum dolor sit amet doloris. dolor sit amet
                doloris. Lorem ipsum dolor sit amet doloris. dolor sit amet
                doloris.Lorem ipsum dolor Lorem ipsum dolor sit amet doloris.
                dolor sit amet doloris. Lorem ipsum dolors
              </p>
              <span onClick={() => setExpanded(!expanded)}>
                {expanded ? "Yopish" : "Batafsil"}
              </span>
            </div>
            <button>O'chirish</button>
          </div>
          <div className="msg-all-item">
            <div className="all-item-top">
              <p
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: expanded ? "unset" : "3",
                  WebkitBoxOrient: "vertical",
                  overflow: expanded ? "visible" : "hidden",
                  textOverflow: expanded ? "unset" : "ellipsis",
                }}
              >
                Lorem ipsum dolor sit amet doloris. dolor sit amet doloris.
                Lorem ipsum dolor sit amet doloris. dolor sit amet doloris.Lorem
                ipsum dolor Lorem ipsum dolor sit amet doloris. dolor sit amet
                doloris. Lorem ipsum dolor sit amet doloris. dolor sit amet
                doloris.Lorem ipsum dolor Lorem ipsum dolor sit amet doloris.
                dolor sit amet doloris. Lorem ipsum dolors
              </p>
              <span onClick={() => setExpanded(!expanded)}>
                {expanded ? "Yopish" : "Batafsil"}
              </span>
            </div>
            <button>O'chirish</button>
          </div>
          <div className="msg-all-item">
            <div className="all-item-top">
              <p
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: expanded ? "unset" : "3",
                  WebkitBoxOrient: "vertical",
                  overflow: expanded ? "visible" : "hidden",
                  textOverflow: expanded ? "unset" : "ellipsis",
                }}
              >
                Lorem ipsum dolor sit amet doloris. dolor sit amet doloris.
                Lorem ipsum dolor sit amet doloris. dolor sit amet doloris.Lorem
                ipsum dolor Lorem ipsum dolor sit amet doloris. dolor sit amet
                doloris. Lorem ipsum dolor sit amet doloris. dolor sit amet
                doloris.Lorem ipsum dolor Lorem ipsum dolor sit amet doloris.
                dolor sit amet doloris. Lorem ipsum dolors
              </p>
              <span onClick={() => setExpanded(!expanded)}>
                {expanded ? "Yopish" : "Batafsil"}
              </span>
            </div>
            <button>O'chirish</button>
          </div>
          <div className="msg-all-item">
            <div className="all-item-top">
              <p
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: expanded ? "unset" : "3",
                  WebkitBoxOrient: "vertical",
                  overflow: expanded ? "visible" : "hidden",
                  textOverflow: expanded ? "unset" : "ellipsis",
                }}
              >
                Lorem ipsum dolor sit amet doloris. dolor sit amet doloris.
                Lorem ipsum dolor sit amet doloris. dolor sit amet doloris.Lorem
                ipsum dolor Lorem ipsum dolor sit amet doloris. dolor sit amet
                doloris. Lorem ipsum dolor sit amet doloris. dolor sit amet
                doloris.Lorem ipsum dolor Lorem ipsum dolor sit amet doloris.
                dolor sit amet doloris. Lorem ipsum dolors
              </p>
              <span onClick={() => setExpanded(!expanded)}>
                {expanded ? "Yopish" : "Batafsil"}
              </span>
            </div>
            <button>O'chirish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
