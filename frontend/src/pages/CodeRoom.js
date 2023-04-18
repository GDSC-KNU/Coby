import React from "react";

import Sidebar from "../components/codeRoom/Sidebar";
import img from "../images/test.png";
import "./CodeRoom.css";

const CodeRoom = (props) => {
  return (
    <div>
      <Sidebar isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
      <div className="code" style={{ width: props.isOpen ? "84.1vw" : "96vw" }}>
        <iframe
          width="103%"
          height="100vh"
          frameborder="0"
          scrolling="no"
          src="https://prod.liveshare.vsengsaas.visualstudio.com/join?"
        />
      </div>
    </div>
  );
};

export default CodeRoom;
