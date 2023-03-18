import React from "react";

import MakeRoomModal from "./MakeRoomModal";
import "./NewMakeRoom.css";

function NewMakeRoom(props){
    const saveRoomDataHandler = (enteredRoomData) =>{
        const makeRoomData = {
            ...enteredRoomData,
            id: Math.random().toString(),
     };
    props.onAddData(makeRoomData);
};
    return(
        <div>
            <MakeRoomModal onSaveRoomData={saveRoomDataHandler} />
        </div>
    )
}

export default NewMakeRoom;