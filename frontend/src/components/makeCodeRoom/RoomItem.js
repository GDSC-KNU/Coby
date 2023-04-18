import React, { useState, useEffect } from "react";
import styles from "./RoomItem.module.css";
import locked from "../../images/locked.png";
import unlocked from "../../images/unlocked.png";

function RoomItem(props) {
  const [languageColor, setLanguageColor] = useState("");
  const [languageBackgroundColor, setLanguageBackgroundColor] = useState("");
  const [toolColor, setToolColor] = useState("");

  const handleClick = () => {
    if (props.password.trim().length !== 0) {
      const password = prompt("비밀번호를 입력하세요.");
      if (props.password === password) {
        window.location.href = "/CodeRoom";
      } else if (password !== null) {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } else {
      window.location.href = "/CodeRoom";
    }
  };

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
    <div>
      {props.password.trim().length > 0 ? (
        <div className={styles.RoomItem} onClick={handleClick}>
          <div className={styles.RoomItemDescription}>
            <h4 style={{ color: toolColor }}>{props.tool}</h4>
            <h2>{props.title}</h2>
            <span
              style={{
                color: languageColor,
                backgroundColor: languageBackgroundColor,
              }}
            >
              {props.language}
            </span>
          </div>
          <div className={styles.RoomItemLockedDescription}>
            <img src={locked} alt="로고" className={styles.RoomItemLocked} />
            <div className={styles.person}>0명 / 6명</div>
          </div>
        </div>
      ) : (
        <div className={styles.RoomItem} onClick={handleClick}>
          <div className={styles.RoomItemDescription}>
            <h4 style={{ color: toolColor }}>{props.tool}</h4>
            <h2>{props.title}</h2>
            <span
              style={{
                color: languageColor,
                backgroundColor: languageBackgroundColor,
              }}
            >
              {props.language}
            </span>
          </div>
          <div className={styles.RoomItemLockedDescription}>
            <img src={unlocked} alt="로고" className={styles.RoomItemLocked} />
            <div className={styles.person}>0명 / 6명</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomItem;
