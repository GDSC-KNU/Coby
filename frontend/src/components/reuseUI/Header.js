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
      setModalOpen(false)
  }

  return (
    <div>
      <header className="upside-header">
        <div className="upside-contents">
          <nav className="upside-navigation">
            <ul>
              <button className="Signin">
                회원가입
              </button>
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
                <div className="Group" />
                그룹 참여
              </li>
              <li>
                <div className="MyGroup" />내 그룹
              </li>
              <li>
                <div className="Question" />
                도움말
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
