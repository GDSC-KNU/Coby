import React, { useState, Link } from "react";

import Layout from "../components/reuseUI/Layout";
import MakeRoomPair from "../components/makeCodeRoomPair/MakeRoomPair";

import "./PairCodeRoomListPage.css";
import NewMakeRoomPair from "../components/makeCodeRoomPair/makeRoomModalPair/NewMakeRoomPair";
import Backdrop from "../components/reuseUI/Backdrop";

function PairCodeRoomListPage() {
  const DUMMY_DATA = [
    // {
    //   id: "e1",
    //   title: "동적 할당 관련 질문있습니다.",
    //   language: "C++",
    //   tool: "Visual Studio Code",
    // },
    // {
    //   id: "e2",
    //   title: "왜 안 돌아감?",
    //   language: "JAVA",
    //   tool: "Visual Studio Code",
    // },
    // {
    //   id: "e3",
    //   title: "코드에 관해서",
    //   language: "Python",
    //   tool: "IntelliJ",
    // },
  ];

  const [makeRooms, setMakeRooms] = useState(DUMMY_DATA);

  const addRoomHandler = (makeRoomPair) => {
    setMakeRooms((prevMakeRoomsPair) => {
      return [makeRoomPair, ...prevMakeRoomsPair];
    });
    console.log("In CodeRoomListPage.js");
    console.log(makeRoomPair);
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
      {/* <Link to="/CodeRoom"><MakeRoom items={makeRooms} /></Link> */}
      <MakeRoomPair items={makeRooms} />
      <div className="ListPage__actionsPair">
        <button className="MakeRoomBtnPair" onClick={deleteHandler}>
          + 방생성
        </button>
      </div>
      {modalIsOpen && <NewMakeRoomPair onAddData={addRoomHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default PairCodeRoomListPage;
