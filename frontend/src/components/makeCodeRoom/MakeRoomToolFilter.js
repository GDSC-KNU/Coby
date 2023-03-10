import React from "react";

import "./MakeRoomModal.css";

const MakeRoomToolFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="RoomModal-control">
      <select value={props.selected} onChange={dropdownHandler}>
        <option value="" selected disabled hidden></option>
        <option value="Visual Studio Code">Visual Studio Code</option>
        <option value="IntelliJ">IntelliJ</option>
      </select>
    </div>
  );
};

export default MakeRoomToolFilter;
