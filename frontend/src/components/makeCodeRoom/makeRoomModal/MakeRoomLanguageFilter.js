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
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="C">C</option>
        <option value="C++">C++</option>
        <option value="Kotlin">Kotlin</option>
        <option value="Swift">Swift</option>
        <option value="Go">Go</option>
        <option value="C#">C#</option>
        <option value="Scala">Scala</option>
        <option value="Ruby">Ruby</option>
      </select>
    </div>
  );
};

export default MakeRoomLanguageFilter;
