import React, { useEffect, useRef, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
  app.use(
    "/ws-stomp",
    createProxyMiddleware({ target: "http://localhost:8080", ws: true })
  );
};

const ROOM_SEQ = 1;

const Server = () => {
  const client = useRef({});
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new StompJs.Client({
      webSokcketFactory: () => new SockJS("/ws-stomp"),
      connenctHeaders: {
        "auth-token": "spring-chat-auth-token",
      },
      debug: function (str) {
        console.log(str);
      },
      reconnenctDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.actviate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(`sub/chat/${ROOM_SEQ}`, ({ body }) => {
      setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
    });
  };

  const publish = (message) => {
    if (!client.current.connected) {
      return;
    }

    client.current.publish({
      destination: "/pub/chat",
      body: JSON.stringify({ roomSeq: ROOM_SEQ, message }),
    });
    setMessage("");
  };

  return (
    <div>
        {chatMessages && chatMessages.length > 0 && (
            <ul>
                {chatMessages.map((_chatMessages, index) => (
                    <li key={index}>{_chatMessages.message}</li>
                ))}
            </ul>
        )}
        <div>
            <input
            type={"text"}
            placeholder={"message"}
            value={message}
            onChange={(e) => e.which === 13 && publish(message)}
            />
            <button onClick={() => publish(message)}> send</button>
        </div>
    </div>
  )
};

export default Server;
