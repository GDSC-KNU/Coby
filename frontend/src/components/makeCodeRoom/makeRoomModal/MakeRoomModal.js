import React, { useState } from "react";

import "./MakeRoomModal.css";

import logo from "../../../images/logo_black.png";
import MakeRoomLanguageFilter from "./MakeRoomLanguageFilter";
import MakeRoomToolFilter from "../MakeRoomToolFilter";
import MakeRoomPurposeFilter from "./MakeRoomPurposeFilter";

function MakeRoomModal(props) {
  const [enteredTitle, setEnteredTitle] = useState("");

  const [enteredPassWord, setEnteredPassWord] = useState("");
  const [enteredLink, setEnteredLink] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassWord(event.target.value);
  };

  const linkChangeHandler = (event) => {
    setEnteredLink(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const makeRoomData = {
      title: enteredTitle,
      // language: enteredLanguage,
      // tool: enteredTool,
      // purpose: enteredPurpose,
      password: enteredPassWord,
      link: enteredLink,
    };

    props.onSaveMakeRoomData(makeRoomData);
    setEnteredTitle("");
    // setEnteredLanguage("");
    // setEnteredTool("");
    // setEnteredPurpose("");
    setEnteredPassWord("");
  }; // 임시 전송할 데이터

  return (
    <div className="RoomModals">
      <div>
        <img src={logo} alt="로고" className="RoomModal-logo" />
      </div>

      <form onSubmit={submitHandler}>
        <div className="RoomModal-control">
          <p>방 이름</p>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="RoomModal-control">
          <p>사용 언어</p>
          <MakeRoomLanguageFilter />
        </div>
        <div className="RoomModal-control">
          <p>사용 도구</p>
          <MakeRoomToolFilter />
        </div>
        {/* <div className="RoomModal-control">
          <p>사용 목적</p>
          <MakeRoomPurposeFilter />
        </div> */}
        <div className="RoomModal-control">
          <p>비밀번호</p>
          <input
            type="text"
            value={enteredPassWord}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className="RoomModal-control">
          <p>링크</p>
          <input type="text" value={enteredLink} onChange={linkChangeHandler} />
        </div>
      </form>

      <div className="RoomModal-actions">
        <button type="submit">생성하기</button>
      </div>
    </div>
  );
}

export default MakeRoomModal;
