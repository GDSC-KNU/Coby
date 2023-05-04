import React, { useState } from "react";
import "./ChatRoom.css";
import WebSocket from "../../sevices/WebSocket";
import Sidebar from "./Sidebar";

const ChatRoom = () => {
  const { publicChats, userData, stompClient, setUserData } = WebSocket();
  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData((prevState) => ({ ...prevState, message: value }));
  };
  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        name: userData.username,
        message: userData.message,
        status: "MESSAGE",
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <div>
      <Sidebar>
        <div className="member-list">
          <ul>Member</ul>
          <ul>Member</ul>
          <ul>Member</ul>
          <ul>Member</ul>
          <ul>Member</ul>
          <ul>Member</ul>
        </div>
      </Sidebar>
      <div className="chatContainer">
        <div className="chat-content">
          <ul className="chat-messages">
            {publicChats.map((chat, index) => (
              <li
                className={`message ${
                  chat.name === userData.username && "self"
                }`}
                key={index}
              >
                {chat.name !== userData.username && (
                  <div className="avatar">{chat.name}</div>
                )}
                <div className="message-data">{chat.message}</div>
                {chat.name === userData.username && (
                  <div className="avatar self">{chat.name}</div>
                )}
              </li>
            ))}
          </ul>

          <div className="send-message">
            <input
              type="text"
              placeholder="메시지를 입력하시오"
              value={userData.message}
              onChange={handleMessage}
            />
            <button type="button" onClick={sendValue}>
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
