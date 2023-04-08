import React from "react";

import styles from "./MakeRoomModalPair.module.css";

const MakeRoomLanguageFilterPair = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={styles.RoomModalControlPair}>
      <select value={props.selected} onChange={dropdownHandler}>
        <option value="" selected disabled hidden></option>
        <option value="C++">C++</option>
        <option value="C">C</option>
        <option value="C#">C#</option>
        <option value="Python3">Python3</option>
        <option value="React">React</option>
        <option value="Java">Java</option>
      </select>
    </div>
  );
};

export default MakeRoomLanguageFilterPair;
