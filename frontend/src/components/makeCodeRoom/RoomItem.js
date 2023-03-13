import React from "react";

import "./RoomItem.css";

function RoomItem(props) {
  return (
    <div className="Room-item">
      <div className="Room-item__tool">{props.tool}</div>
      <div className="Room-item__description">
        <h4>{props.title}</h4>
        <p>{props.language}</p>
      </div>
    </div>
  );
}

export default RoomItem;
