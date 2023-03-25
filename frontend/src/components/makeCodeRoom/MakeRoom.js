import React, { useState } from "react";

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

  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // function deleteHandler() {
  //   setModalIsOpen(true);
  // }

  // function closeModalHandler() {
  //   setModalIsOpen(false);
  // }

  let makeRoomsContent = <p>💻︎ 위의 카테고리를 선택해주세요 💻︎</p>;

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
