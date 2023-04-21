import React, { useState } from "react";

import styles from "./MakeRoomModal.module.css";
import logo from "../../../images/logo_black.png";
import MakeRoomLanguageFilter from "./MakeRoomLanguageFilter";
import MakeRoomToolFilter from "./MakeRoomToolFilter";
import SaveRoomList from "../../../sevices/SaveRoomList";

function MakeRoomModal(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [isTitleValid, setIsTitleValid] = useState();
  const [enteredLanguage, setEnteredLanguage] = useState("");
  const [enteredTool, setEnteredTool] = useState("");
  const [enteredPassWord, setEnteredPassWord] = useState("");
  const [enteredLink, setEnteredLink] = useState("");
  const [isLinkValid, setIsLinkValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const titleChangeHandler = (event) => {
    console.log("Title Changed");
    console.log(event.target.value.trim().length);
    setEnteredTitle(event.target.value);
    setFormIsValid(
      event.target.value.trim().length < 16 &&
        event.target.value.trim().length > 0 &&
        enteredLink.includes(
          "https://prod.liveshare.vsengsaas.visualstudio.com/join?"
        )
    );
  };

  const validateTitleHandler = () => {
    setIsTitleValid(
      enteredTitle.trim().length < 16 && enteredTitle.trim().length > 0
    );
  };

  const languageChangeHandler = (selectLanguage) => {
    setEnteredLanguage(selectLanguage);
  };

  const toolChangeHandler = (selectTool) => {
    setEnteredTool(selectTool);
  };

  const passwordChangeHandler = (event) => {
    console.log("Password Changed");
    setEnteredPassWord(event.target.value);
  };

  const linkChangeHandler = (event) => {
    console.log("Link Changed");
    setEnteredLink(event.target.value);
    setFormIsValid(
      event.target.value.includes(
        "https://prod.liveshare.vsengsaas.visualstudio.com/join?"
      ) &&
        enteredTitle.trim().length < 16 &&
        enteredTitle.trim().length > 0
    );
  };
  /*https://prod.liveshare.vsengsaas.visualstudio.com/join? 예시 링크*/
  /* Intellij 링크도 추가해주어야함. 이것 나중에 CodeWithMe 공통 링크 알아낼것 */
  
  const validateLinkHandler = () => {
    setIsLinkValid(
      enteredLink.includes(
        "https://prod.liveshare.vsengsaas.visualstudio.com/join?"
      )
    );
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const makeRoomData = {
      title: enteredTitle,
      language: enteredLanguage,
      tool: enteredTool,
      // purpose: enteredPurpose,
      password: enteredPassWord,
      link: enteredLink,
    };
    props.onSaveRoomData(makeRoomData);
    setEnteredTitle("");
    setEnteredLanguage("");
    setEnteredTool("");
    setEnteredPassWord("");
    setEnteredLink("");

    try {
      const Create = await SaveRoomList(
        enteredTitle,
        enteredLink,
        enteredLanguage,
        enteredTool,
        enteredPassWord
      );
      console.log(Create);
    } catch (error) {
      console.error(error);
      throw new Error(error.response.data.message);
    }
  };

  return (
    <div className={styles.RoomModals}>
      <div>
        <img src={logo} alt="로고" className={styles.RoomModalLogo} />
      </div>

      <form onSubmit={submitHandler}>
        <div
          className={`${styles.RoomModalControl} ${
            isTitleValid === false ? styles.invalid : ""
          }`}
        >
          <p>방 이름 (15자 이내로 작성해주세요.)</p>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={validateTitleHandler}
          />
        </div>
        <div className={styles.RoomModalControl}>
          <p>사용 언어</p>
          <MakeRoomLanguageFilter
            selected={enteredLanguage}
            onChangeFilter={languageChangeHandler}
          />
        </div>
        <div className={styles.RoomModalControl}>
          <p>사용 도구</p>
          <MakeRoomToolFilter
            selected={enteredTool}
            onChangeFilter={toolChangeHandler}
          />
        </div>
        <div className={styles.RoomModalControl}>
          <p>비밀번호</p>
          <input
            type="password"
            value={enteredPassWord}
            onChange={passwordChangeHandler}
          />
        </div>
        <div
          className={`${styles.RoomModalControl} ${
            isLinkValid === false ? styles.invalid : ""
          }`}
        >
          <p>링크</p>
          <input
            type="text"
            value={enteredLink}
            onChange={linkChangeHandler}
            onBlur={validateLinkHandler}
          />
        </div>

        <div className={styles.RoomModalActions}>
          <button type="submit" disabled={!formIsValid}>
            생성하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default MakeRoomModal;
