import React from "react";
import { useState } from "react";
import Login from "../modal/log/LoginModal";
import Backdrop from "./Backdrop";

import "./Header.css";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <header className="upside-header">
        <div className="upside-contents">
          <nav className="upside-navigation">
            <ul>
              <button className="Signin">회원가입</button>
              <button onClick={showModal} className="Login">
                로그인
              </button>
              {modalOpen && <Login setModalOpen={setModalOpen} />}
              {modalOpen && <Backdrop onCancel={closeModal} />}
            </ul>
          </nav>
        </div>
      </header>

      <header className="header">
        <div className="contents">
          <div className="Coby" />
          <nav className="navigation">
            <ul>
              <li>
                코드 리뷰
              </li>
              <li>
                {/* <div className="Group" /> */}
                페어 프로그래밍
              </li>
              {/* <div className="MyGroup" /> */}
              <li>마이그룹</li>
              {/* <div className="Question" /> */}
              <li>도움말</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
