import React from "react";

import "./MakeRoomModal.css";

const MakeRoomPurposeFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="RoomModal-control">
      <select value={props.selected} onChange={dropdownHandler}>
        <option value="" selected disabled hidden></option>
        <option value="Code Review">Code Review</option>
        <option value="Pair Programming">Pair Programming</option>
      </select>
    </div>
  );
};

export default MakeRoomPurposeFilter;
