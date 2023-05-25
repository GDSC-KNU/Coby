import React from "react";

import styles from "./MakeRoomModal.module.css";

const MakeRoomPurposeFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={styles.RoomModalControl}>
      <select value={props.selected} onChange={dropdownHandler}>
        <option value="" selected disabled hidden></option>
        <option value="Code Review">Code Review</option>
        <option value="Pair Programming">Pair Programming</option>
      </select>
    </div>
  );
};

export default MakeRoomPurposeFilter;
