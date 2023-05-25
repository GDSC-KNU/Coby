import React from "react";

import "../css/CodeRoom.css";
import Sidebar from "../components/Sidebar";

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
    </div>
  );
};

export default CodeRoom;