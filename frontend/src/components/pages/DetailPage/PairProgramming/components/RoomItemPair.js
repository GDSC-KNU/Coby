import React, { useState, useEffect } from "react";

import styles from "./css/RoomItemPair.module.css";
import locked from "../../../../../assets/locked.png";
import unlocked from "../../../../../assets/unlocked.png";
import { useNavigate } from "react-router";

function RoomItemPair(props) {
  const [languageColor, setLanguageColor] = useState("");
  const [languageBackgroundColor, setLanguageBackgroundColor] = useState("");
  const [toolColor, setToolColor] = useState("");
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const handleClick = () => {
    if (count === 6) {
      alert("입장 가능한 인원 수를 초과하였습니다.");
    } else {
      if (props.password.trim().length !== 0) {
        const password = prompt("비밀번호를 입력하세요.");
        if (props.password === password) {
          navigate("/CodeRoomPair");
          setCount(count + 1);
        } else if (password !== null) {
          alert("비밀번호가 일치하지 않습니다.");
        }
      } else {
        navigate("/CodeRoomPair");
        setCount(count + 1);
      }
    }
  };

  useEffect(() => {
    if (props.language === "C") {
      setLanguageColor("#7B88FF");
      setLanguageBackgroundColor("#E5F6FF");
    } else if (props.language === "C++") {
      setLanguageColor("#7B88FF");
      setLanguageBackgroundColor("#E5F6FF");
    } else if (props.language === "C#") {
      setLanguageColor("#7B88FF");
      setLanguageBackgroundColor("#E5F6FF");
    } else if (props.language === "Python") {
      setLanguageColor("#FFB800");
      setLanguageBackgroundColor("#FFF7B0");
    } else if (props.language === "Java") {
      setLanguageColor("#FF5C5C");
      setLanguageBackgroundColor("#FFE5E5");
    } else if (props.language === "Ruby") {
      setLanguageColor("#FF5C5C");
      setLanguageBackgroundColor("#FFE5E5");
    } else if (props.language === "Swift") {
      setLanguageColor("#F05138");
      setLanguageBackgroundColor("#FFE5E5");
    } else if (props.language === "JavaScript") {
      setLanguageColor("#FFB800");
      setLanguageBackgroundColor("#FFF7B0");
    } else if (props.language === "Scala") {
      setLanguageColor("#DE3835");
      setLanguageBackgroundColor("#FFE5E5");
    } else if (props.language === "Go") {
      setLanguageColor("#00ACD7");
      setLanguageBackgroundColor("#E5F6FF");
    } else if (props.language === "Kotlin") {
      setLanguageColor("#A532F1");
      setLanguageBackgroundColor("#ECDEF5");
    }
  }, [props.language]);

  useEffect(() => {
    if (props.tool === "Live Share") {
      setToolColor("#29A0F1");
    } else if (props.tool === "Code With Me") {
      setToolColor("#FD7864");
    }
  }, [props.tool]);

  return (
    <div>
      {props.password.trim().length > 0 ? (
        <div className={styles.RoomItemPair} onClick={handleClick}>
          <div className={styles.RoomItemDescriptionPair}>
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
          <div className={styles.RoomItemLockedDescriptionPair}>
            <img
              src={locked}
              alt="로고"
              className={styles.RoomItemLockedPair}
            />
          </div>
        </div>
      ) : (
        <div className={styles.RoomItemPair} onClick={handleClick}>
          <div className={styles.RoomItemDescriptionPair}>
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
          <div className={styles.RoomItemLockedDescriptionPair}>
            <img
              src={unlocked}
              alt="로고"
              className={styles.RoomItemLockedPair}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomItemPair;
