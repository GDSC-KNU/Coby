import { useState } from "react";

import Layout from "../components/reuseUI/Layout";
import MakeRoomModal from "../components/makeCodeRoom/MakeRoomModal";
import Backdrop from "../components/reuseUI/Backdrop";
import "./CodeRoomList.css";

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
      <div className="PageBox">
        {/* <main>
          <h2>코드룸 리스트입니다.</h2>
        </main> */}
        <button className="MakeRoomBtn" onClick={deleteHandler}>+ 방생성</button>
      </div>

      {modalIsOpen && <MakeRoomModal />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default CodeRoomList;
