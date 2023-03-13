import React, { useState } from "react";

import "./MakeRoomModal.css";

import logo from "../../images/logo_black.png";
import MakeRoomLanguageFilter from "./MakeRoomLanguageFilter";
import MakeRoomToolFilter from "./MakeRoomToolFilter";
import MakeRoomPurposeFilter from "./MakeRoomPurposeFilter";

function MakeRoomModal(props) {
  const [filteredLanguage, setFilteredLanguage] = useState("");
  const [filteredTool, setFilteredTool] = useState("");
  const [filteredPurpose, setFilteredPurpose] = useState("");

  const filterLanguageChangeHandler = (selectedLanguage) => {
    setFilteredLanguage(selectedLanguage);
  };

  const filterToolChangeHandler = (selectedTool) => {
    setFilteredTool(selectedTool);
  };

  const filterPurposeChangeHandler = (selectedPurpose) => {
    setFilteredPurpose(selectedPurpose);
  };

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredLanguage, setEnteredLanguage]= useState("");
  const [enteredTool, setEnteredTool] = useState("");
  const [enteredPurpose, setEnteredPurpose] = useState("");
  const [enteredPassWord, setEnteredPassWord] = useState("");
  const [enteredLink, setEnteredLink] = useState("");
 

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const languageChangeHandler = (event) =>{
    setEnteredLanguage(event.target.value);
  }

  const toolChangeHandler = (event) =>{
    setEnteredTool(event.target.value);
  }

  const purposeChangeHandler = (event) =>{
    setEnteredPurpose(event.target.value);
  }

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
      language: enteredLanguage,
      tool: enteredTool,
      purpose: enteredPurpose,
      password: enteredPassWord,
      link: enteredLink,
    };

    props.onSaveMakeRoomData(makeRoomData);
    setEnteredTitle("");
    setEnteredLanguage("");
    setEnteredTool("");
    setEnteredPurpose("");
    setEnteredPassWord("");
  };  // 임시 전송할 데이터

  return (
    <div className="RoomModal">
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
          <MakeRoomLanguageFilter
            selected={filteredLanguage}
            onChangeFilter={filterLanguageChangeHandler}

            type="text"
            value={enteredLanguage}
            onChange={languageChangeHandler}
          />
        </div>
        <div className="RoomModal-control">
          <p>사용 도구</p>
          <MakeRoomToolFilter
            selected={filteredTool}
            onChangeFilter={filterToolChangeHandler}
          
            type="text"
            value={enteredTool}
            onChange={toolChangeHandler}
          />
        </div>
        <div className="RoomModal-control">
          <p>사용 목적</p>
          <MakeRoomPurposeFilter
            selected={filteredPurpose}
            onChangeFilter={filterPurposeChangeHandler}
          
            type="text"
            value={enteredPurpose}
            onChange={purposeChangeHandler}
          />
        </div>
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
