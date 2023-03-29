import React from "react";

import "./RoomItemPair.css";

function RoomItemPair(props) {
  function handleClick(event){
    window.location.href="/CodeRoom";
  }

  return (
    <div className="Room-itemPair" onClick={handleClick}>
        <div className="Room-item__toolPair">{props.tool}</div>
        <div className="Room-item__descriptionPair">
          <h4>{props.title}</h4>
          <div className="language-pPair">{props.language}</div>
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

export default RoomItemPair;
