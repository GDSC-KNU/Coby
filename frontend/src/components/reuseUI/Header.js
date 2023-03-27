import React from "react";
import { useState } from "react";
import Login from "../modal/log/LoginModal";
import Backdrop from "./Backdrop";
import SignIn from "../modal/signin/SigninModal";

import "./Header.css";

function Header() {

  function CodeReviewHandleClick(event){
    window.location.href="/CodeRoomList";
  }

  function MainHandleClick(event){
    window.location.href="/";
  }


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
          <div className="Coby" onClick={MainHandleClick}/>
          <nav className="navigation">
            <ul>
              <li onClick={CodeReviewHandleClick}>
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
