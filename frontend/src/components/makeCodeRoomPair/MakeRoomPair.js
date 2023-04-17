import React, { useState } from "react";

import RoomItemPair from "./RoomItemPair";
import Card from "../reuseUI/Card";
import "./MakeRoomPair.css";
import ToolFilterPair from "./ToolFilterPair";

// import NewMakeRoom from "./makeRoomModal/NewMakeRoom";
// import Backdrop from "../reuseUI/Backdrop";

function MakeRoomPair(props) {
  const [filteredTool, setFilteredTool] = useState("");

  const filterToolChangeHandler = (selectTool) => {
    setFilteredTool(selectTool);
  };

  const filteredMakeRooms = props.items.filter((makeRoomPair) => {
    return makeRoomPair.tool === filteredTool;
  });

  return (
    <div className="PageBoxPair">
      <ToolFilterPair
        selected={filteredTool}
        onChangeFilter={filterToolChangeHandler}
      />

      <div className="CodeRoomListBoxPair">
        {filteredMakeRooms.map((makeRoomPair) => (
          <RoomItemPair
            key={makeRoomPair.id}
            title={makeRoomPair.title}
            language={makeRoomPair.language}
            tool={makeRoomPair.tool}
          />
        ))}
      </div>
    </div>
  );
}

export default MakeRoomPair;

/*Axios.post('http://localhost:8080/api/coderooms', {
      name: 방이름
      url: 주소
      tags: 언어 도구
      password: 비밀번호
      personnel: 최대인원
    }).then(()=>{
      alert('등록 완료!');
    })*/
