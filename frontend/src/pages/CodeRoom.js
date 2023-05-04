import React from "react";
import Layout from "../components/reuseUI/Layout";
import exit from "../images/exit.png";
import "./CodeRoom.css";

const CodeRoom = () => {
  const deleteHandler = () => {
    const confirmed = window.confirm(
      "정말 나가시겠습니까? 방장이 아닌 경우 포인트를 얻지 못합니다."
    );
    if (confirmed) {
      window.location.href = "/CodeRoomList";
    }
  };
  return (
    <div>
      <Layout />
      <div className="IframeBox">
        <div>
          <img src={exit} alt="로고" className="Exit" onClick={deleteHandler} />
        </div>
        <p align="middle">
          <iframe
            src="https://www.vchatcloud.com/chat-demo/iframe/iframe_rtc_1/v4/index.html?
channelkey=yCjJFXDKvi-tB2VfcAJPe-20230504154859"
            allow="camera *;microphone *;"
            frameborder="no"
            scrolling="no"
            marginwidth="0"
            marginheight="0"
            width="1216"
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
