import React, { useState } from "react";
import styled from "styled-components";

import RoomItem from "./RoomItem";
import Card from "../reuseUI/Card";
import "./MakeRoom.css";
import MakeRoomToolFilter from "./MakeRoomToolFilter";

// import NewMakeRoom from "./makeRoomModal/NewMakeRoom";
// import Backdrop from "../reuseUI/Backdrop";

function MakeRoom(props) {
  const [filteredTool, setFilteredTool] = useState("");

  const filterToolChangeHandler = (selectTool) => {
    setFilteredTool(selectTool);
  };

  const filteredMakeRooms = props.items.filter((makeRoom) => {
    return makeRoom.tool === filteredTool;
  });

  let makeRoomsContent = <p>💻︎ 방을 생성해주세요. 💻︎</p>;

  if (filteredMakeRooms.length > 0) {
    makeRoomsContent = filteredMakeRooms.map((makeRoom) => (
      <RoomItem
        title={makeRoom.title}
        language={makeRoom.language}
        tool={makeRoom.tool}
      />
    ));
  }



  return (
    <div className="PageBox">
      <MakeRoomToolFilter
        selected={filteredTool}
        onChangeFilter={filterToolChangeHandler}
      />
      
      <Card className="CodeRoomListBox">{makeRoomsContent}</Card>
    </div>
  );
}

export default MakeRoom;
