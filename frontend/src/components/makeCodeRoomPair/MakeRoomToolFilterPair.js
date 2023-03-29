import React from "react";

import "./MakeRoomToolFilterPair.css";

const MakeRoomToolFilterPair = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="Tool-filterPair">
      <div className="Tool-filter__controlPair">
        {/* <label>* 참가하고자 하는 방을 선택해주세요.</label> */}
        <select value={props.selected} onChange={dropdownHandler}>
          <option value="" selected disabled hidden></option>
          <option value="Visual Studio Code">Visual Studio Code</option>
          <option value="IntelliJ">IntelliJ</option>
        </select>
      </div>
    </div>
  );
};

export default MakeRoomToolFilterPair;
