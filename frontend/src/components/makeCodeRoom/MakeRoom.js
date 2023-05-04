import React, { useState } from "react";

import RoomItem from "./RoomItem";
// import Card from "../reuseUI/Card";
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




  return (
    <div className="PageBox">
      <MakeRoomToolFilter
        selected={filteredTool}
        onChangeFilter={filterToolChangeHandler}
      />

      <div className="CodeRoomListBox">
        {filteredMakeRooms.map((makeRoom) => (
          <RoomItem
            key={makeRoom.id}
            title={makeRoom.title}
            language={makeRoom.language}
            tool={makeRoom.tool}
          />
        ))}
      </div>
    </div>
  );
}

export default MakeRoom;