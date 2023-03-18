import React, { useState } from "react";

import RoomItem from "./RoomItem";
import Card from "../reuseUI/Card";
import "./MakeRoom.css";
import MakeRoomToolFilter from "./MakeRoomToolFilter";
import NewMakeRoom from "./makeRoomModal/NewMakeRoom";
import Backdrop from "../reuseUI/Backdrop";

function MakeRoom(props) {
  const [filteredTool, setFilteredTool] = useState("");

  const filterToolChangeHandler = (selectTool) => {
    setFilteredTool(selectTool);
  };

  const filteredMakeRooms = props.items.filter((makeRoom) => {
    return makeRoom.tool === filteredTool;
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <Card className="PageBox">
      <MakeRoomToolFilter
        selected={filteredTool}
        onChangeFilter={filterToolChangeHandler}
      />
      <Card className="CodeRoomListBox">
        {filteredMakeRooms.map((makeRoom) => (
          <RoomItem
            title={makeRoom.title}
            language={makeRoom.language}
            tool={makeRoom.tool}
          />
        ))}
      </Card>
      <button className="MakeRoomBtn" onClick={deleteHandler}>
          + 방생성
        </button>
      {modalIsOpen && <NewMakeRoom />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </Card>
  );
}

export default MakeRoom;
