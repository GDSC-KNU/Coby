import React from "react";

import "./ToolFilter.css";

const ToolFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="Tool-filter">
      <div className="Tool-filter__control">
        {/* <label>* 참가하고자 하는 방을 선택해주세요.</label> */}
        <select value={props.selected} onChange={dropdownHandler}>
          <option value="">카테고리를 선택해주세요</option>
          <option value="Live Share">Visual Studio Code</option>
          <option value="Code With Me">IntelliJ</option>
        </select>
      </div>
    </div>
  );
};

export default ToolFilter;
