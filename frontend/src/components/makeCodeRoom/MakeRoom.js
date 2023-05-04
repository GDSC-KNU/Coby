import React, { useState } from "react";

import searchimg from "../../images/icon-search.png"
import RoomItem from "./RoomItem";
// import Card from "../reuseUI/Card";
import styles from "./MakeRoom.module.css";
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

  // 위쪽 (사용하는 환경) const[상태 값 저장 변수, 상태값 갱신 함수] = useState(상태 초기 값);
  //const [Dev_Environment, setDev] = useState(True);
  // 아래쪽 (사용언어)
  //const [Dev_Language, setLang] = useState(True);

  return (
    <div className={styles.PageBox}>
      {/* <MakeRoomToolFilter
        selected={filteredTool}
        onChangeFilter={filterToolChangeHandler}/>  
      */}
      <div className={styles.filter_set}>
        <div className={styles.search}>
          <input type="text" placeholder="검색어 입력"></input>
          <img src ={searchimg} className={styles.searchimg}></img>
        </div>
        
        <button className={styles.filter}>Visual Studio Code</button>
        <button className={styles.filter}>IntelliJ</button>
      </div>
      <div className={styles.filter_set}>
        
        <button className={styles.filter}>C</button>
        <button className={styles.filter}>C++</button>
        <button className={styles.filter}>Java</button>
        <button className={styles.filter}>JavaScript</button>
        <button className={styles.filter}>Ruby</button>
        <button className={styles.filter}>기타</button>
      
      </div>
      <div className={styles.CodeRoomListBox}>
        {filteredMakeRooms.map((makeRoom) => (
          <RoomItem
            key={makeRoom.id}
            title={makeRoom.title}
            language={makeRoom.language}
            tool={makeRoom.tool}
          />
        ))}
      </div>
    </div>
  );
}

export default MakeRoom;