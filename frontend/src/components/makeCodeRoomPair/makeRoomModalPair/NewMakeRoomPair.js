import React from "react";

import MakeRoomModalPair from "./MakeRoomModalPair";

function NewMakeRoomPair(props) {
  const saveRoomDataHandler = (enteredRoomDataPair) => {
    const makeRoomDataPair = {
      ...enteredRoomDataPair,
      // id: Math.random().toString(),
    };
    props.onAddData(makeRoomDataPair);
  };


  return (
    <div>
      <MakeRoomModalPair onSaveRoomData={saveRoomDataHandler} />
    </div>
  );
}

export default NewMakeRoomPair;
