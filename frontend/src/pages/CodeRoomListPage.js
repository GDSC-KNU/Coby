import React, { useState } from "react";

import Layout from "../components/reuseUI/Layout";
import MakeRoom from "../components/makeCodeRoom/MakeRoom";

import "./CodeRoomListPage.css";
import NewMakeRoom from "../components/makeCodeRoom/makeRoomModal/NewMakeRoom";
import Backdrop from "../components/reuseUI/Backdrop";

function CodeRoomListPage(props) {
  const DUMMY_DATA = [
    {
      id: "e1",
      title: "동적 할당 관련 질문있습니다.",
      language: "C++",
      tool: "Visual Studio Code",
    },
    {
      id: "e2",
      title: "왜 안 돌아감?",
      language: "JAVA",
      tool: "Visual Studio Code",
    },
    {
      id: "e3",
      title: "코드에 관해서",
      language: "Python",
      tool: "IntelliJ",
    },
  ];

  const [makeRooms, setMakeRooms] = useState(DUMMY_DATA);

  const addRoomHandler = (makeRoom) => {
    setMakeRooms((prevMakeRooms) => {
      return [makeRoom, ...prevMakeRooms];
    });
    console.log("In CodeRoom.js");
    console.log(makeRoom);
  };

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
      <MakeRoom items={makeRooms} />
      <button className="MakeRoomBtn" onClick={deleteHandler}>
        + 방생성
      </button>
      {modalIsOpen && <NewMakeRoom onAddData={addRoomHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default CodeRoomListPage;
