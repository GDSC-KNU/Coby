import React from "react";

import MakeRoomModal from "./MakeRoomModal";
import Axios from "axios";

function NewMakeRoom(props) {
  const saveRoomDataHandler = (enteredRoomData) => {
    const makeRoomData = {
      ...enteredRoomData,
      id: Math.random().toString(),
    };
    props.onAddData(makeRoomData);

    
   Axios.post('http://localhost:8080/api/coderooms', {
      name: makeRoomData.enteredTitle,
      url: makeRoomData.enteredLink,
      tags: makeRoomData.enteredLanguage,
      //tags에 enteredLanduage, enteredTool 넣어야함
      password: makeRoomData.enteredPassWord,
      //personel: 최대인원
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  /*
    Axios.post('http://localhost:8080/api/coderooms', {
      name: enteredTitle,
      url: enteredLink,
      tags: enteredLanguage,
      //tags에 enteredLanguage, enteredTool 넣어야함
      password: enteredPassWord,
      personel: 6,
      id: id,
    }).then(()=>{
      alert('등록 완료!');
    })*/

  return (
    <div>
      <MakeRoomModal onSaveRoomData={saveRoomDataHandler} />
    </div>
  );
}

export default NewMakeRoom;
