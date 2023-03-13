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

  const filterPurposeChangeHandler = (selectedPurpose) =>{
    setFilteredPurpose(selectedPurpose);
  };

  return (
    <div className="RoomModal">
      <div>
        <img src={logo} alt="로고" className="RoomModal-logo" />
      </div>

      <form>
        <div className="RoomModal-control">
          <p>방 이름</p>
          <input />
        </div>
        <div className="RoomModal-control">
          <p>사용 언어</p>
          <MakeRoomLanguageFilter
            selected={filteredLanguage}
            onChangeFilter={filterLanguageChangeHandler}
          />
        </div>
        <div className="RoomModal-control">
          <p>사용 도구</p>
          <MakeRoomToolFilter
            selected={filteredTool}
            onChangeFilter={filterToolChangeHandler}
          />
        </div>
        <div className="RoomModal-control">
          <p>사용 목적</p>
          <MakeRoomPurposeFilter
            selected={filteredPurpose}
            onChangeFilter={filterPurposeChangeHandler}
          />
        </div>
        <div className="RoomModal-control">
          <p>비밀번호</p>
          <input />
        </div>
        <div className="RoomModal-control">
          <p>링크</p>
          <input />
        </div>
      </form>

      <div className="RoomModal-actions">
        <button type="submit">생성하기</button>
      </div>
    </div>
  );
}

export default MakeRoomModal;
