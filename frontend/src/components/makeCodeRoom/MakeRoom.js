import React, { useState } from "react";

import searchimg from "../../images/icon-search.png";
import RoomItem from "./RoomItem";
import styles from "./MakeRoom.module.css";
import SearchRoomList from "../../sevices/SearchRoomList";
import { useNavigate } from "react-router-dom";

function MakeRoom() {
  const [devVscode, setVscode] = useState(false);
  const [devIntellij, setIntellij] = useState(false);
  const [devC, setC] = useState(false);
  const [devCpp, setCpp] = useState(false);
  const [devJava, setJava] = useState(false);
  const [devJavascript, setJavascript] = useState(false);
  const [devRuby, setRuby] = useState(false);
  const [devKotlin, setKotlin] = useState(false);
  const [devSwift, setSwift] = useState(false);
  const [devGo, setGo] = useState(false);
  const [devLinq, setLinq] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const onClickVs = () => {
    setVscode(true);
  };
  const onClickInt = () => {
    setIntellij(true);
  };
  const onClickC = () => {
    setC(true);
  };
  const onClickCpp = () => {
    setCpp(true);
  };
  const onClickJava = () => {
    setJava(true);
  };
  const onClickJs = () => {
    setJavascript(true);
  };
  const onClickRuby = () => {
    setRuby(true);
  };
  const onClickKotlin = () => {
    setKotlin(true);
  };
  const onClickSwift = () => {
    setSwift(true);
  };
  const onClickGo = () => {
    setGo(true);
  };
  const onClickLinq = () => {
    setLinq(true);
  };

  const [enteredSearch, setEnteredSearch] = useState("");
  const navigate = useNavigate();

  const searchChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  };

  const SearchClickHandler = async (event) => {
    event.preventDefault();
    setEnteredSearch("");
    try {
      const SearchResults = await SearchRoomList(enteredSearch);
      setSearchResult(SearchResults);
      console.log(SearchResults);
      const encodedSearch = encodeURIComponent(enteredSearch);
      navigate(`/CodeRoomList?s=${encodedSearch}`);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredResults = searchResult.filter((makeRoom) => {
    if (
      (devVscode && makeRoom.tool === "Visual Studio Code") ||
      (devIntellij && makeRoom.tool === "IntelliJ") ||
      (devC && makeRoom.language === "C") ||
      (devCpp && makeRoom.language === "C++") ||
      (devJava && makeRoom.language === "Java") ||
      (devJavascript && makeRoom.language === "JavaScript") ||
      (devRuby && makeRoom.language === "Ruby") ||
      (devKotlin && makeRoom.language === "Kotlin") ||
      (devSwift && makeRoom.language === "Swift") ||
      (devGo && makeRoom.language === "Go") ||
      (devLinq && makeRoom.language === "C#")
    ) {
      return true;
    }
    return false;
  });
  // ? props.items.filter((makeRoom) => makeRoom.tool === filteredTool)
  // : props.items;

  return (
    <div className={styles.PageBox}>
      <div className={styles.filter_set}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="검색어 입력"
            value={enteredSearch}
            onChange={searchChangeHandler}
          />
          <img
            src={searchimg}
            alt="검색"
            className={styles.searchimg}
            onClick={SearchClickHandler}
          ></img>
        </div>
        <button
          className={styles.filter}
          onClick={onClickVs}
          style={{
            backgroundColor: devVscode ? "#5579fe" : "#ffffff",
            color: devVscode ? "white" : "black",
          }}
        >
          Visual Studio Code
        </button>
        <button
          className={styles.filter}
          onClick={onClickInt}
          style={{
            backgroundColor: devIntellij ? "#5579fe" : "#ffffff",
            color: devIntellij ? "white" : "black",
          }}
        >
          IntelliJ
        </button>
      </div>
      <div className={styles.filter_set}>
        <button
          className={styles.filter}
          onClick={onClickC}
          style={{
            backgroundColor: devC ? "#5579fe" : "#ffffff",
            color: devC ? "white" : "black",
          }}
        >
          C
        </button>
        <button
          className={styles.filter}
          onClick={onClickLinq}
          style={{
            backgroundColor: devLinq ? "#5579fe" : "#ffffff",
            color: devLinq ? "white" : "black",
          }}
        >
          C#
        </button>
        <button
          className={styles.filter}
          onClick={onClickCpp}
          style={{
            backgroundColor: devCpp ? "#5579fe" : "#ffffff",
            color: devCpp ? "white" : "black",
          }}
        >
          C++
        </button>
        <button
          className={styles.filter}
          onClick={onClickJava}
          style={{
            backgroundColor: devJava ? "#5579fe" : "#ffffff",
            color: devJava ? "white" : "black",
          }}
        >
          Java
        </button>
        <button
          className={styles.filter}
          onClick={onClickJs}
          style={{
            backgroundColor: devJavascript ? "#5579fe" : "#ffffff",
            color: devJavascript ? "white" : "black",
          }}
        >
          JavaScript
        </button>
        <button
          className={styles.filter}
          onClick={onClickRuby}
          style={{
            backgroundColor: devRuby ? "#5579fe" : "#ffffff",
            color: devRuby ? "white" : "black",
          }}
        >
          Ruby
        </button>
        <button
          className={styles.filter}
          onClick={onClickKotlin}
          style={{
            backgroundColor: devKotlin ? "#5579fe" : "#ffffff",
            color: devKotlin ? "white" : "black",
          }}
        >
          Kotlin
        </button>
        <button
          className={styles.filter}
          onClick={onClickSwift}
          style={{
            backgroundColor: devSwift ? "#5579fe" : "#ffffff",
            color: devSwift ? "white" : "black",
          }}
        >
          Swift
        </button>
        <button
          className={styles.filter}
          onClick={onClickGo}
          style={{
            backgroundColor: devGo ? "#5579fe" : "#ffffff",
            color: devGo ? "white" : "black",
          }}
        >
          Go
        </button>
      </div>
      <div className={styles.CodeRoomListBox}>
        {filteredResults.map((makeRoom) => (
          <RoomItem
            key={makeRoom.id}
            title={makeRoom.title}
            language={makeRoom.language}
            tool={makeRoom.tool}
            password={makeRoom.password}
            url={makeRoom.url}
          />
        ))}
      </div>
    </div>
  );
}

export default MakeRoom;
