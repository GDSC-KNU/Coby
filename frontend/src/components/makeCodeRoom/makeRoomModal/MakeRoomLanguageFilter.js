import React from "react";

import styles from "./MakeRoomModal.module.css";

const MakeRoomLanguageFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={styles.RoomModalControl}>
      <select value={props.selected} onChange={dropdownHandler}>
        <option value="" selected disabled hidden></option>
        <option value="C">C</option>
        <option value="Python3">Python3</option>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="etc">etc</option>
      </select>
    </div>
  );
};

export default MakeRoomLanguageFilter;
