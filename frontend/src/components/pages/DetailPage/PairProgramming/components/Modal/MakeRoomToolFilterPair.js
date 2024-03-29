import React from "react";

import styles from "../Modal/css/MakeRoomModalPair.module.css";

const MakeRoomToolFilterPair = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={styles.RoomModalControlPair}>
      <div className="Tool-filter__controlPair">
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

export default MakeRoomToolFilterPair;
