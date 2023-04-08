import React, { useState, useEffect } from "react";

import styles from "./RoomItemPair.module.css";

function RoomItemPair(props) {
  const [languageColor, setLanguageColor] = useState("");
  const [languageBackgroundColor, setLanguageBackgroundColor] = useState("");
  const [toolColor, setToolColor] = useState("");

  function handleClick(event){
    window.location.href="/CodeRoom";
  }

  useEffect(() => {
    if (props.language === "C") {
      setLanguageColor("#7B88FF");
      setLanguageBackgroundColor("#E5F6FF");
    } else if (props.language === "Python3") {
      setLanguageColor("#FFB800");
      setLanguageBackgroundColor("#FFF7B0");
    } else if (props.language === "Java") {
      setLanguageColor("#FF5C5C");
      setLanguageBackgroundColor("#FFE5E5");
    } else if (props.language === "JavaScript") {
      setLanguageColor("#FFB800");
      setLanguageBackgroundColor("#FFF7B0");
    } else if (props.language === "etc") {
      setLanguageColor("#C17400");
      setLanguageBackgroundColor("#FCDBAB");
    } 
  }, [props.language]);

  useEffect(() => {
    if (props.tool === "Visual Studio Code") {
      setToolColor("#29A0F1");
    } else if (props.tool === "IntelliJ") {
      setToolColor("#FD7864");
    }
  }, [props.tool]);

  return (
    <div className={styles.RoomItemPair} onClick={handleClick}>
      <div className={styles.RoomItemDescriptionPair}>
        <h4 style={{ color: toolColor}}>{props.tool}</h4>
        <h2>{props.title}</h2>
        <span style={{ color: languageColor, backgroundColor: languageBackgroundColor}}>{props.language}</span>
      </div>
    </div>
    // <Link to="/CodeRoom">
    //   <div className="Room-item">
    //     <div className="Room-item__tool">{props.tool}</div>
    //     <div className="Room-item__description">
    //       <h4>{props.title}</h4>
    //       <p>{props.language}</p>
    //     </div>
    //   </div>
    // </Link>
  );
}

export default RoomItemPair;
