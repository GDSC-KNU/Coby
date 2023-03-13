import React from "react";

import "./MakeRoomModal.css";

const MakeRoomLanguageFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="RoomModal-control">
      <select value={props.selected} onChange={dropdownHandler}>
        <option value="" selected disabled hidden></option>
        <option value="C++">C++</option>
        <option value="C">C</option>
        <option value="C#">C#</option>
        <option value="Python3">Python3</option>
        <option value="PyPy3">PyPy3</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Java">Java</option>
      </select>
    </div>
  );
};

export default MakeRoomLanguageFilter;
