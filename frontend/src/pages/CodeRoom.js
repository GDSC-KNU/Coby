import React from "react";

import Sidebar from "../components/codeRoom/Sidebar";
import img from "../images/test.png"
import './CodeRoom.css'

const CodeRoom = (props) => {
  return (
    <div>
      <Sidebar isOpen={props.isOpen} setIsOpen={props.setIsOpen}/>
      <div className='code'
        style={{ width: props.isOpen ? "84.1vw" : "96vw" }}
      >
        <img src={img} alt="sample" className="img"/>
      </div>
    </div>
  );
};

export default CodeRoom;