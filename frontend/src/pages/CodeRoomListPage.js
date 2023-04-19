import React, {useEffect, useState} from "react";

import Layout from "../components/reuseUI/Layout";
import MakeRoom from "../components/makeCodeRoom/MakeRoom";

import "./CodeRoomListPage.css";
import NewMakeRoom from "../components/makeCodeRoom/makeRoomModal/NewMakeRoom";
import Backdrop from "../components/reuseUI/Backdrop";
import ShowRoomList from "../sevices/ShowRoomList";

function CodeRoomListPage() {
  // const DUMMY_DATA = [
  //   {
  //     id: "e1",
  //     title: "동적 할당 관련 질문있습니다.",
  //     language: "C++",
  //     tool: "Visual Studio Code",
  //   },
  //   {
  //     id: "e2",
  //     title: "왜 안 돌아감?",
  //     language: "JAVA",
  //     tool: "Visual Studio Code",
  //   },
  //   {
  //     id: "e3",
  //     title: "코드에 관해서",
  //     language: "Python",
  //     tool: "IntelliJ",
  //   },
  // ];

  const [makeRooms, setMakeRooms] = useState([]);

  // useEffect(() => {
  //   const fetchRooms = async () => {
  //     try{
  //       const newRooms = await ShowRoomList();
  //       setMakeRooms(newRooms);
  //     }catch(error){
  //       console.error(error);
  //     }
  //   };
  //   const intervalId = setInterval(fetchRooms, 5000);
  //
  //   return () => clearInterval(intervalId);
  // }, []);

  const addRoomHandler = (makeRoom) => {
    setMakeRooms((prevMakeRooms) => {
      return [makeRoom, ...prevMakeRooms];
    });
    console.log("In CodeRoomListPage.js");
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
      <div className="ListPage__actions">
        <button className="MakeRoomBtn" onClick={deleteHandler}>
          + 방생성
        </button>
      </div>
      {modalIsOpen && <NewMakeRoom onAddData={addRoomHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default CodeRoomListPage;
