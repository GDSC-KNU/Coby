import React, { useState } from "react";

import RoomItem from "./RoomItem";
import "./MakeRoom.css";
import ToolFilter from "./ToolFilter";


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
      <ToolFilter
        selected={filteredTool}
        onChangeFilter={filterToolChangeHandler}
      />

      <div className="CodeRoomListBox">
        {filteredMakeRooms.map((makeRoom) => (
          <RoomItem
            // key={makeRoom.id}
            title={makeRoom.title}
            language={makeRoom.language}
            tool={makeRoom.tool}
            password={makeRoom.password}
            url = {makeRoom.url}
          />
        ))}
      </div>
    </div>
  );
}

export default MakeRoom;
