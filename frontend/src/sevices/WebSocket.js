import { useState, useEffect } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import MyPage from "./MyPage";
import getRoomId from "./getRoomId.js";

const WebSocket = () => {
  const [publicChats, setPublicChats] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    connencted: false,
    message: "",
  });
  useEffect(() => {
    MyPage()
      .then((data) => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          username: data.name,
        }));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

 let stompClient = null;

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/api/ws/");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = async () => {
    setUserData({ ...userData, connected: true });
    const roomId = await getRoomId();
   
    stompClient.subscribe(`/chatroom/chat/${roomId}`, onMessageReceived);
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN",
    };
    stompClient.send("/message", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (payloadData.senderName !== userData.username) {
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
    console.log(err);
  };

  const registerUser = () => {
    connect();
  };

  return {
    publicChats,
    userData,
    stompClient,
    setUserData,
    registerUser,
  };
};

export default WebSocket;
