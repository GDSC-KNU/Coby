import React, { useState, useEffect } from "react";
import "./ChatRoom.css";
import MyPage from "../../sevices/MyPage";
import Sidebar from "./Sidebar";
import getRoomId from "../../sevices/getRoomId";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { BASE_URL } from "../../constants/Url";

var stompClient = null;
const ChatRoom = () => {
  const [memberList, setMemberList] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    connected: false,
    message: "",
  });
  useEffect(() => {
    MyPage()
      .then((data) => {
        setUserData(() => ({
          username: data.name,
        }));
        console.log(data.name);
      })
      .catch((err) => {
        console.log("useEffect에러입니다. " + err.message);
      });
  }, []);

  const connect = () => {
    let Sock = new SockJS(`${BASE_URL}/coby/ws/`);

    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = async () => {
    const roomId = await getRoomId();
    console.log(roomId);
    setUserData({ ...userData, connected: true });
    stompClient.subscribe(`/chatroom/chat/${roomId}`, onMessageReceived);
    userJoin();
  };

  const userJoin = async () => {
    const roomId = await getRoomId();
    var chatMessage = {
      name: userData.username,
      roomId: roomId,
      status: "JOIN",
    };
    stompClient.send("/coby/chat", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (payloadData.name !== userData.username) {
          setPublicChats((prevChats) => [...prevChats, payloadData]);
        }
        break;
      case "MESSAGE":
        setPublicChats((prevChats) => [...prevChats, payloadData]);
        break;
      default:
        break;
    }
  };

  const onError = (err) => {
    console.log("onError 함수 에러입니다. " + err);
  };

  const registerUser = () => {
    connect();
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData((prevState) => ({ ...prevState, message: value }));
  };
  const sendValue = async () => {
    const roomId = await getRoomId();
    if (stompClient) {
      var chatMessage = {
        name: userData.username,
        message: userData.message,
        roomId: roomId,
        status: "MESSAGE",
      };
      console.log(chatMessage);
      stompClient.send("/coby/chat", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <div>
      {userData.connected ? (
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
                환영합니다!
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
      ) : (
        <div className="register">
          <button type="button" onClick={registerUser}>
            connect
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
