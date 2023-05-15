import React, {useEffect, useState} from "react";

import Layout from "../components/reuseUI/Layout";
import MakeRoomPair from "../components/makeCodeRoomPair/MakeRoomPair";

import "./PairCodeRoomListPage.css";
import NewMakeRoomPair from "../components/makeCodeRoomPair/makeRoomModalPair/NewMakeRoomPair";
import Backdrop from "../components/reuseUI/Backdrop";
import ShowRoomListPair from "../sevices/ShowRoomListPair";

function PairCodeRoomListPage() {

  const [makeRooms, setMakeRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const newRooms = await ShowRoomListPair();
        const mappedRooms = newRooms.map((makeRoom) => ({
          title: makeRoom.name,
          language: makeRoom.language,
          tool: makeRoom.tool,
          password: makeRoom.password,
          url: makeRoom.url
        }));
        setMakeRooms(mappedRooms);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRooms().then();
  }, []);

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
