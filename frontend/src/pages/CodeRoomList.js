import { useState } from "react";

import Layout from "../components/reuseUI/Layout";
import MakeRoomModal from "../components/makeCodeRoom/MakeRoomModal";
import Backdrop from "../components/reuseUI/Backdrop";
import Card from "../components/reuseUI/Card";
import "./CodeRoomList.css";
import RoomItem from "../components/makeCodeRoom/RoomItem";



function CodeRoomList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <Layout />
      <Card className="PageBox">
        <Card className="CodeRoomListBox">
          <RoomItem/>
          <RoomItem/>
          <RoomItem/>
          {/* <RoomItem/>
          <RoomItem/>
          <RoomItem/>
          <RoomItem/>
          <RoomItem/>
          <RoomItem/>
          <RoomItem/> */}
        </Card>
        <button className="MakeRoomBtn" onClick={deleteHandler}>
          + 방생성
        </button>
      </Card>

      {modalIsOpen && <MakeRoomModal />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default CodeRoomList;
