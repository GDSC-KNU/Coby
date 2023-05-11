import React, { useState } from "react";

import RoomItemPair from "./RoomItemPair";
import Card from "../reuseUI/Card";
import "./MakeRoomPair.css";
import MakeRoomToolFilterPair from "./MakeRoomToolFilterPair";
import searchimg from "../../images/icon-search.png"
//import RoomItem from "./RoomItem";
import styles from "../makeCodeRoom/MakeRoom.module.css";


// import NewMakeRoom from "./makeRoomModal/NewMakeRoom";
// import Backdrop from "../reuseUI/Backdrop";

function MakeRoomPair(props) {

  const [filteredTool, setFilteredTool] = useState("");

  const [devVscode, setVscode] = useState(false);
  const [devIntellij, setIntellij] = useState(false);
  const [devC, setC] = useState(false);
  const [devCpp, setCpp] = useState(false);
  const [devJava, setJava] = useState(false);
  const [devJavascript, setJavascript] = useState(false);
  const [devRuby, setRuby] = useState(false);
  const [devEtc, setEtc] = useState(false);

  const filterToolChangeHandler = (selectTool) => {
    setFilteredTool(selectTool)
  }
  const onClickVs = () => {
    setVscode(!devVscode);
  };
  const onClickInt = () => {
    setIntellij(!devIntellij);
  };
  const onClickC = () => {
    setC(!devC);
  };
  const onClickCpp = () => {
    setCpp(!devCpp);
  };
  const onClickJava = () => {
    setJava(!devJava);
  };
  const onClickJs = () => {
    setJavascript(!devJavascript);
  };
  const onClickRuby = () => {
    setRuby(!devRuby);
  };
  const onClickEtc = () => {
    setEtc(!devEtc);
  };

  const filteredMakeRooms = props.items.filter((makeRoomPair) => {
    return makeRoomPair.tool === filteredTool;
  });

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
      <button className={styles.filter} onClick={onClickVs} style={{ backgroundColor: devVscode ? '#5579fe' : '' , color: devVscode ? 'white' : 'black'}}>Visual Studio Code</button>
      <button className={styles.filter} onClick={onClickInt} style={{ backgroundColor: devIntellij ? '#5579fe' : '' , color: devIntellij ? 'white' : 'black'}}>IntelliJ</button>
    </div>
    <div className={styles.filter_set}>
      <button className={styles.filter} onClick={onClickC} style={{ backgroundColor: devC ? '#5579fe' : '' , color: devC ? 'white' : 'black'}}>C</button>
      <button className={styles.filter} onClick={onClickCpp} style={{ backgroundColor: devCpp ? '#5579fe' : '' , color: devCpp ? 'white' : 'black'}}>C++</button>
      <button className={styles.filter} onClick={onClickJava} style={{ backgroundColor: devJava ? '#5579fe' : '' , color: devJava ? 'white' : 'black'}}>Java</button>
      <button className={styles.filter} onClick={onClickJs} style={{ backgroundColor: devJavascript ? '#5579fe' : '' , color: devJavascript ? 'white' : 'black'}}>JavaScript</button>
      <button className={styles.filter} onClick={onClickRuby} style={{ backgroundColor: devRuby ? '#5579fe' : '' , color: devRuby ? 'white' : 'black'}}>Ruby</button>
      <button className={styles.filter} onClick={onClickEtc} style={{ backgroundColor: devEtc ? '#5579fe' : '' , color: devEtc ? 'white' : 'black'}}>기타</button>
    </div>
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
