import React from "react";
import { useState } from "react";
import Login from "../modal/log/LoginModal";
import SignIn from "../modal/signin/SigninModal";
import Backdrop from "./Backdrop";

import "./Header.css";

function Header() {
    const [logInmodalOpen, setLoginModalOpen] = useState(false);
    const [signInmodalOpen, setSigninModalOpen] = useState(false);
    const showLoginModal = () => {
        setLoginModalOpen(true);
    };
    const closeLoginModal = () => {
      setLoginModalOpen(false)
    }
    const showSigninModal = () => {
      setSigninModalOpen(true);
    };
    const closeSigninModal = () => {
      setSigninModalOpen(false)
    }

  return (
    <div>
      <header className="upside-header">
        <div className="upside-contents">
          <nav className="upside-navigation">
            <ul>
              <button onClick={showSigninModal}  className="Signin">
                회원가입
              </button>
              {signInmodalOpen && <SignIn setModalOpen={setSigninModalOpen} />}
              {signInmodalOpen && <Backdrop onCancel={closeSigninModal} />}
              <button onClick={showLoginModal} className="Login">
                로그인
              </button>
              {logInmodalOpen && <Login setLoginModalOpen={setLoginModalOpen} />}
              {logInmodalOpen && <Backdrop onCancel={closeLoginModal} />}
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
