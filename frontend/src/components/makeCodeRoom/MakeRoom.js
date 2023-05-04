import React, { useState } from "react";

import searchimg from "../../images/icon-search.png"
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
      {/* <MakeRoomToolFilter
        selected={filteredTool}
        onChangeFilter={filterToolChangeHandler}
      /> */}
      <div className="filter_set">
        <div className="search">
          <input type="text" placeholder="검색어 입력"></input>
          <img src = {searchimg}></img>
        </div>
        
        <button className="filter">Visual Studio Code</button>
        <button className="filter">IntelliJ</button>
      </div>
      <div className="filter_set">
        
        <button className="filter">C</button>
        <button className="filter">C++</button>
        <button className="filter">Java</button>
        <button className="filter">JavaScript</button>
        <button className="filter">Ruby</button>
        <button className="filter">기타</button>
      
      </div>
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