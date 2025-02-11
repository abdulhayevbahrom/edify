import React, { useEffect, useState } from "react";
import "./Messages.css";
import { message } from "antd";
import axios from "../../../api";
import socket from "../../../socket";

function Messages() {
  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const sendTextToServer = () => {
    if (text.trim() === "") return message.warning("Xabar kiriting");

    let data = {
      message: text,
      sender: "Direktor",
    };

    axios
      .post("/message/create", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => res.data.state && message.success(res.data.message))
      .catch((err) => message.error(err.response.data.message))
      .finally(() => setText(""));
  };

  // get message
  useEffect(() => {
    axios
      .get("/message/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setMessages(res.data.innerData))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Yangi xabarni olish
    socket.on("new_message", (data) => {
      setMessages((oldingi_data) => [...oldingi_data, data]);
    });
    return () => {
      socket.off("new_message");
    };
  }, []);

  return (
    <div className="messages-main">
      <div className="messages-left">
        <textarea
          name="mainMessage"
          placeholder="Xodimlar uchun xabar jo’natish"
          id=""
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button onClick={() => sendTextToServer()}>Xabar jo’natish</button>
      </div>
      <div className="messages-right">
        <div className="msg-right-title">
          <p>Barcha xabarlar</p>
        </div>
        <div className="messages-all">
          {messages.map((msg, index) => (
            <div key={index} className="msg-all-item">
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
                  {msg.message}
                </p>
                {msg?.message?.length > 200 && (
                  <span onClick={() => setExpanded(!expanded)}>
                    {expanded ? "Yopish" : "Batafsil"}
                  </span>
                )}
              </div>
              <button>O'chirish</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Messages;
