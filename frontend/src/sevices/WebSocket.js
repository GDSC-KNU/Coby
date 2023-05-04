import { useState, useEffect } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import MyPage from "./MyPage";
import getRoomId from "./getRoomId.js";
import { BASE_URL } from "../constants/Url";


var stompClient = null;
const WebSocket = () => {
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
    let Sock = new SockJS(`${BASE_URL}/ws/`);

    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = async () => {
    setUserData({ ...userData, connected: true });
    const roomId = await getRoomId();
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

  return {
    publicChats,
    userData,
    stompClient,
    setUserData,
    registerUser,
  };
};

export default WebSocket;
