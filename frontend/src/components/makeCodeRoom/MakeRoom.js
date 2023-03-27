import React, { useState } from "react";


import RoomItem from "./RoomItem";
import Card from "../reuseUI/Card";
import "./MakeRoom.css";
import MakeRoomToolFilter from "./MakeRoomToolFilter";

// import NewMakeRoom from "./makeRoomModal/NewMakeRoom";
// import Backdrop from "../reuseUI/Backdrop";

function MakeRoom(props) {
  const [filteredTool, setFilteredTool] = useState("");

  const filterToolChangeHandler = (selectTool) => {
    setFilteredTool(selectTool);
  };

  const filteredMakeRooms = props.items.filter((makeRoom) => {
    return makeRoom.tool === filteredTool;
  });

  let makeRoomsContent = <p>💻︎ 여기는 코드리뷰 방입니다. 💻︎</p>;

  if (filteredMakeRooms.length > 0) {
    makeRoomsContent = filteredMakeRooms.map((makeRoom) => (
      <RoomItem
        title={makeRoom.title}
        language={makeRoom.language}
        tool={makeRoom.tool}
      />
    ));
  }



  return (
    <div className="PageBox">
      <MakeRoomToolFilter
        selected={filteredTool}
        onChangeFilter={filterToolChangeHandler}
      />
      
      <Card className="CodeRoomListBox">{makeRoomsContent}</Card>
    </div>
  );
}

export default MakeRoom;


  /*Axios.post('http://localhost:8080/api/coderooms', {
      name: 방이름
      url: 주소
      tags: 언어 도구
      password: 비밀번호
      personnel: 최대인원
    }).then(()=>{
      alert('등록 완료!');
    })*/
