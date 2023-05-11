import React from "react";

import "./CodeRoom.css";
import Sidebar from "../components/codeRoom/Sidebar";

const CodeRoom = () => {
  return (
    <div>
      <Sidebar />
      <div className="IframeBox">
        <p align="middle">
          <iframe
            src="https://www.vchatcloud.com/chat-demo/iframe/iframe_rtc_1/v4/index.html?channelkey=yCjJFXDKvi-tB2VfcAJPe-20230504154859"
            allow="camera *;microphone *;"
            title="example of WebChatting"
            frameBorder="no"
            scrolling="no"
            marginWidth="0"
            marginHeight="0"
            width="1180"
            height="691"
          />
        </p>
      </div>

      {/* <Sidebar isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
      <div className="code" style={{ width: props.isOpen ? "84.1vw" : "96vw" }}>
        <iframe
          width="103%"
          height="100vh"
          frameborder="0"
          scrolling="no"
          src="https://prod.liveshare.vsengsaas.visualstudio.com/join?"
        />
      </div> */}
    </div>
  );
};

export default CodeRoom;
