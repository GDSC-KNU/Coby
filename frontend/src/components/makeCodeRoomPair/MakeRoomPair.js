import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import RoomItemPair from "./RoomItemPair";
import searchimg from "../../images/icon-search.png";
import styles from "./MakeRoomPair.module.css";
import SearchRoomListPair from "../../sevices/SearchRoomListPair";

function MakeRoomPair(props) {
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
  const [devScala, setScala] = useState(false);
  const [devPython, setPython] = useState(false);

  const [selectedToolOptions, setSelectedToolOptions] = useState([]);
  const [selectedLanguageOptions, setSelectedLanguageOptions] = useState([]);

  const [searchResult, setSearchResult] = useState([]);

  const [enteredSearch, setEnteredSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const SearchResult = await SearchRoomListPair(
          selectedToolOptions,
          selectedLanguageOptions
        );
        setSearchResult(SearchResult);
        console.log(SearchResult);
        const encodedSearch = encodeURIComponent(selectedToolOptions);
        const encodedLanguage = encodeURIComponent(selectedLanguageOptions);
        navigate(`/CodeRoomList?t=${encodedSearch}&l=${encodedLanguage}`);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [selectedToolOptions, selectedLanguageOptions]);

  const handleToolOptionClick = (option) => {
    if (selectedToolOptions.includes(option)) {
      setSelectedToolOptions(
        selectedToolOptions.filter((item) => item !== option)
      );
      if (option === "Live Share") {
        setVscode(!devVscode);
      } else if (option === "Code With Me") {
        setIntellij(!devIntellij);
      }
    } else {
      setSelectedToolOptions([...selectedToolOptions, option]);
      if (option === "Live Share") {
        setVscode(!devVscode);
      } else if (option === "Code With Me") {
        setIntellij(!devIntellij);
      }
    }
    // console.log(selectedToolOptions);
  };

  const handleLanguageOptionClick = (option) => {
    if (selectedLanguageOptions.includes(option)) {
      setSelectedLanguageOptions(
        selectedLanguageOptions.filter((item) => item !== option)
      );
      if (option === "Clang") {
        setC(!devC);
      } else if (option === "Cplusplus") {
        setCpp(!devCpp);
      } else if (option === "Java") {
        setJava(!devJava);
      } else if (option === "JS") {
        setJavascript(!devJavascript);
      } else if (option === "Ruby") {
        setRuby(!devRuby);
      } else if (option === "Kotlin") {
        setKotlin(!devKotlin);
      } else if (option === "Swift") {
        setSwift(!devSwift);
      } else if (option === "Go") {
        setGo(!devGo);
      } else if (option === "Csharp") {
        setLinq(!devLinq);
      } else if (option === "Scala") {
        setScala(!devScala);
      } else if (option === "Python") {
        setPython(!devPython);
      }
    } else {
      setSelectedLanguageOptions([...selectedLanguageOptions, option]);
      if (option === "Clang") {
        setC(!devC);
      } else if (option === "Cplusplus") {
        setCpp(!devCpp);
      } else if (option === "Java") {
        setJava(!devJava);
      } else if (option === "JS") {
        setJavascript(!devJavascript);
      } else if (option === "Ruby") {
        setRuby(!devRuby);
      } else if (option === "Kotlin") {
        setKotlin(!devKotlin);
      } else if (option === "Swift") {
        setSwift(!devSwift);
      } else if (option === "Go") {
        setGo(!devGo);
      } else if (option === "Csharp") {
        setLinq(!devLinq);
      } else if (option === "Scala") {
        setScala(!devScala);
      } else if (option === "Python") {
        setPython(!devPython);
      }
    }
  };

  const searchChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
    console.log(props.items);
  };

  return (
    <div className={styles.PageBox}>
      <div className={styles.filter_set}>
        <div className={styles.search}>
          <img src={searchimg} alt="검색" className={styles.searchimg} />
          <input
            type="text"
            placeholder="검색어 입력"
            value={enteredSearch}
            onChange={searchChangeHandler}
          />
        </div>
        {/* <button onClick={() => console.log(selectedToolOptions)}>test</button>
        <button onClick={() => console.log(props.items)}>test</button> */}
        <button
          value="Live Share"
          className={styles.filter}
          onClick={() => handleToolOptionClick("Live Share")}
          style={{
            backgroundColor: devVscode ? "#5579fe" : "#ffffff",
            color: devVscode ? "white" : "black",
          }}
        >
          Visual Studio Code
        </button>
        <button
          className={styles.filter}
          onClick={() => handleToolOptionClick("Code With Me")}
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
          onClick={() => handleLanguageOptionClick("Clang")}
          style={{
            backgroundColor: devC ? "#5579fe" : "#ffffff",
            color: devC ? "white" : "black",
          }}
        >
          C
        </button>
        <button
          className={styles.filter}
          onClick={() => handleLanguageOptionClick("Csharp")}
          style={{
            backgroundColor: devLinq ? "#5579fe" : "#ffffff",
            color: devLinq ? "white" : "black",
          }}
        >
          C#
        </button>
        <button
          className={styles.filter}
          onClick={() => handleLanguageOptionClick("Cplusplus")}
          style={{
            backgroundColor: devCpp ? "#5579fe" : "#ffffff",
            color: devCpp ? "white" : "black",
          }}
        >
          C++
        </button>
        <button
          className={styles.filter}
          onClick={() => handleLanguageOptionClick("Java")}
          style={{
            backgroundColor: devJava ? "#5579fe" : "#ffffff",
            color: devJava ? "white" : "black",
          }}
        >
          Java
        </button>
        <button
          className={styles.filter}
          onClick={() => handleLanguageOptionClick("JS")}
          style={{
            backgroundColor: devJavascript ? "#5579fe" : "#ffffff",
            color: devJavascript ? "white" : "black",
          }}
        >
          JavaScript
        </button>
        <button
          className={styles.filter}
          onClick={() => handleLanguageOptionClick("Python")}
          style={{
            backgroundColor: devPython ? "#5579fe" : "#ffffff",
            color: devPython ? "white" : "black",
          }}
        >
          Python
        </button>
        <button
          className={styles.filter}
          onClick={() => handleLanguageOptionClick("Ruby")}
          style={{
            backgroundColor: devRuby ? "#5579fe" : "#ffffff",
            color: devRuby ? "white" : "black",
          }}
        >
          Ruby
        </button>
        <button
          className={styles.filter}
          onClick={() => handleLanguageOptionClick("Kotlin")}
          style={{
            backgroundColor: devKotlin ? "#5579fe" : "#ffffff",
            color: devKotlin ? "white" : "black",
          }}
        >
          Kotlin
        </button>
        <button
          className={styles.filter}
          onClick={() => handleLanguageOptionClick("Swift")}
          style={{
            backgroundColor: devSwift ? "#5579fe" : "#ffffff",
            color: devSwift ? "white" : "black",
          }}
        >
          Swift
        </button>
        <button
          className={styles.filter}
          onClick={() => handleLanguageOptionClick("Go")}
          style={{
            backgroundColor: devGo ? "#5579fe" : "#ffffff",
            color: devGo ? "white" : "black",
          }}
        >
          Go
        </button>
        <button
          className={styles.filter}
          onClick={() => handleLanguageOptionClick("Scala")}
          style={{
            backgroundColor: devScala ? "#5579fe" : "#ffffff",
            color: devScala ? "white" : "black",
          }}
        >
          Scala
        </button>
      </div>
      <div className={styles.CodeRoomListBox}>
        {props.items.length === 0
          ? props.items.map((makeRoom) => (
              <RoomItemPair
                key={makeRoom.id}
                title={makeRoom.name}
                language={makeRoom.language}
                tool={makeRoom.tool}
                password={makeRoom.password}
                url={makeRoom.url}
              />
            ))
          : enteredSearch
          ? searchResult
              .filter((makeRoom) => makeRoom.name.includes(enteredSearch))
              .map((makeRoom) => (
                <RoomItemPair
                  key={makeRoom.id}
                  title={makeRoom.name}
                  language={makeRoom.language}
                  tool={makeRoom.tool}
                  password={makeRoom.password}
                  url={makeRoom.url}
                />
              ))
          : searchResult.map((makeRoom) => (
              <RoomItemPair
                key={makeRoom.id}
                title={makeRoom.name}
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


export default MakeRoomPair;
