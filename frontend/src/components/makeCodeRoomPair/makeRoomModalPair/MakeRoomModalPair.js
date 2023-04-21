import React, { useState } from "react";

import styles from "./MakeRoomModalPair.module.css";
import logo from "../../../images/logo_black.png";
import MakeRoomLanguageFilterPair from "./MakeRoomLanguageFilterPair";
import MakeRoomToolFilterPair from "./MakeRoomToolFilterPair";
import SaveRoomListPair from "../../../sevices/SaveRoomListPair";

function MakeRoomModalPair(props) {
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

  const validateLinkHandler = () => {
    setIsLinkValid(
      enteredLink.includes(
        "https://prod.liveshare.vsengsaas.visualstudio.com/join?"
      )
    );
  };

  const submitHandler = async(event) => {
    event.preventDefault();

    const makeRoomDataPair = {
      title: enteredTitle,
      language: enteredLanguage,
      tool: enteredTool,
      // purpose: enteredPurpose,
      password: enteredPassWord,
      link: enteredLink,
    };

    props.onSaveRoomData(makeRoomDataPair);
    setEnteredTitle("");
    setEnteredLanguage("");
    setEnteredTool("");
    setEnteredPassWord("");
    setEnteredLink("");
    // 임시 전송할 데이터

    try{
      const Create = await SaveRoomListPair(
        enteredTitle,
        enteredLink,
        enteredLanguage,
        enteredTool,
        enteredPassWord
      );
      console.log(Create);
    } catch(error){
      console.error(error);
      throw new Error(error.response.data.message);
    }
  };


  return (
    <div className={styles.RoomModalsPair}>
      <div>
        <img src={logo} alt="로고" className={styles.RoomModalLogoPair} />
      </div>

      <form onSubmit={submitHandler}>
        <div
          className={`${styles.RoomModalControlPair} ${
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
        <div className={styles.RoomModalControlPair}>
          <p>사용 언어</p>
          <MakeRoomLanguageFilterPair
            selected={enteredLanguage}
            onChangeFilter={languageChangeHandler}
          />
          {/* <input
            type="text"
            value={enteredLanguage}
            onChange={languageChangeHandler}
          /> */}
        </div>
        {/* 언어가 너무 다양한데 이거 그냥 글로 쓰는게 낫지 않을까? */}
        <div className={styles.RoomModalControlPair}>
          <p>사용 도구</p>
          <MakeRoomToolFilterPair
            selected={enteredTool}
            onChangeFilter={toolChangeHandler}
          />
          {/* <input
            type="text"
            value={enteredTool}
            onChange={toolChangeHandler}
          /> */}
        </div>
        {/* <div className="RoomModal-control">
          <p>사용 목적</p>
          <MakeRoomPurposeFilter />
        </div> */}
        <div className={styles.RoomModalControlPair}>
          <p>비밀번호</p>
          <input
            type="password"
            value={enteredPassWord}
            onChange={passwordChangeHandler}
          />
        </div>
        <div
          className={`${styles.RoomModalControlPair} ${
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

        <div className={styles.RoomModalActionsPair}>
          <button type="submit" disabled={!formIsValid}>
            생성하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default MakeRoomModalPair;
