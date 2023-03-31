import React, { useState } from "react";


import RoomItemPair from "./RoomItemPair";
import Card from "../reuseUI/Card";
import "./MakeRoomPair.css";
import MakeRoomToolFilterPair from "./MakeRoomToolFilterPair";

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

  let makeRoomsContent = <p></p>;

  if (filteredMakeRooms.length > 0) {
    makeRoomsContent = filteredMakeRooms.map((makeRoomPair) => (
      <RoomItemPair
        title={makeRoomPair.title}
        language={makeRoomPair.language}
        tool={makeRoomPair.tool}
      />
    ));
  }



  return (
    <div className="PageBoxPair">
      <MakeRoomToolFilterPair
        selected={filteredTool}
        onChangeFilter={filterToolChangeHandler}
      />
      
      <Card className="CodeRoomListBoxPair">{makeRoomsContent}</Card>
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
