import React from "react";

import styles from "./css/MakeRoomModal.module.css";

const MakeRoomToolFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={styles.RoomModalControl}>
      <div className="Tool-filter__control">
        {/* <label>* 참가하고자 하는 방을 선택해주세요.</label> */}
        <select value={props.selected} onChange={dropdownHandler}>
          <option value="" selected disabled hidden></option>
          <option value="Live Share">Visual Studio Code</option>
          <option value="Code With Me">IntelliJ</option>
        </select>
      </div>
    </div>
  );
};

export default MakeRoomToolFilter;
