import React, { useState } from "react";

import RoomItemPair from "./RoomItemPair";
import "./MakeRoomPair.css";
import ToolFilterPair from "./ToolFilterPair";


function MakeRoomPair(props) {
  const [filteredTool, setFilteredTool] = useState("");

  const filterToolChangeHandler = (selectTool) => {
    setFilteredTool(selectTool);
  };

  const filteredMakeRooms = filteredTool
    ? props.items.filter((makeRoom) => makeRoom.tool === filteredTool)
    : props.items;

  return (
    <div className="PageBoxPair">
      <ToolFilterPair
        selected={filteredTool}
        onChangeFilter={filterToolChangeHandler}
      />

      <div className="CodeRoomListBoxPair">
        {filteredMakeRooms.map((makeRoomPair) => (
          <RoomItemPair
            // key={makeRoomPair.id}
            title={makeRoomPair.title}
            language={makeRoomPair.language}
            tool={makeRoomPair.tool}
            password = {makeRoomPair.password}
            url = {makeRoomPair.url}
          />
        ))}
      </div>
    </div>
  );
}

export default MakeRoomPair;