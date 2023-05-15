import React from "react";

import styles from "./MakeRoomModalPair.module.css";

const MakeRoomPurposeFilterPair = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={styles.RoomModalsPair}>
      <select value={props.selected} onChange={dropdownHandler}>
        <option value="" selected disabled hidden></option>
        <option value="Live Share">Visual Studio Code</option>
        <option value="Code With Me">IntelliJ</option>
      </select>
    </div>
  );
};

export default MakeRoomPurposeFilterPair;
