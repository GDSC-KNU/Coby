import React from "react";

import "./RoomItem.css";

function RoomItem(props) {
  function handleClick(event){
    window.location.href="/CodeRoom";
  }

  return (
    <div className="Room-item" onClick={handleClick}>
        <div className="Room-item__tool">{props.tool}</div>
        <div className="Room-item__description">
          <h4>{props.title}</h4>
          <div className="language-p">{props.language}</div>
        </div>
      </div>
    // <Link to="/CodeRoom">
    //   <div className="Room-item">
    //     <div className="Room-item__tool">{props.tool}</div>
    //     <div className="Room-item__description">
    //       <h4>{props.title}</h4>
    //       <p>{props.language}</p>
    //     </div>
    //   </div>
    // </Link>
  );
}

export default RoomItem;
