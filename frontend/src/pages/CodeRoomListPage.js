import { useState } from "react";

import Layout from "../components/reuseUI/Layout";
import MakeRoomModal from "../components/makeCodeRoom/MakeRoomModal";
import Backdrop from "../components/reuseUI/Backdrop";
import Card from "../components/reuseUI/Card";
import "./CodeRoomListPage.css";
import RoomItem from "../components/makeCodeRoom/RoomItem";


const DUMMY_DATA = [
  {
    id: "e1",
    title: "동적 할당 관련 질문있습니다.",
    language: "C++",
    tool: "Visual Studio Code"
  }
]



function CodeRoomListPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const [makeRooms, setMakeRooms] = useState(DUMMY_DATA);

  // const addMakeRoomHandler = (makeRoom) => {
  //   setMakeRooms((prevMakeRooms) => {
  //     return [makeRoom, ...prevMakeRooms];
  //   });
  // };

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
          <RoomItem
          title = {DUMMY_DATA[0].title}
          language = {DUMMY_DATA[0].language}
          tool = {DUMMY_DATA[0].tool}
          />
          <RoomItem/>
          <RoomItem/>
          <RoomItem/>
          {/* <RoomItem/> */}
          {/* <RoomItem/> */}
          {/* <RoomItem/>
          <RoomItem/> */}
          {/* <RoomItem/>
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

export default CodeRoomListPage;
