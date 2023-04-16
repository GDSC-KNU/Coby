import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../modal/log/LoginModal";
import Backdrop from "./Backdrop";
import SignIn from "../modal/signin/SigninModal";
import MypageModal from "../modal/myPage/MyPageModal";

import "./Header.css";
import Logout from "../../sevices/Logout";

function Header(props) {
  function CodeReviewHandleClick(event){
    window.location.href="/CodeRoomList";
  }

  function PairProgrammingHandleClick(event){
    window.location.href="/PairCodeRoomList";
  }

  function MainHandleClick(event){
    window.location.href="/";
  }

  const [logInmodalOpen, setLoginModalOpen] = useState(false);
  const [signInmodalOpen, setSigninModalOpen] = useState(false);
  const [mypagemodalOpen, setMypageModalOpen] = useState(false);

  const navigate = useNavigate();

  const showLoginModal = () => {
      setLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setLoginModalOpen(false)
  }
  const showMypageModal = () => {
    setMypageModalOpen(true);
  };
  const closeMypageModal = () => {
    setMypageModalOpen(false)
  }
  const showSigninModal = () => {
    setSigninModalOpen(true);
  };
  const closeSigninModal = () => {
    setSigninModalOpen(false)
  }
  const logOut = async(event) => {
    event.preventDefault();
    try {
      const message = await Logout();
      // 로그아웃에 성공한 경우, 메시지를 출력하고 페이지를 새로고침합니다.
      alert("로그아웃 완료");
      window.location.reload();
    } catch (error) {
      // 로그아웃에 실패한 경우, 에러 메시지를 출력합니다.
      console.error(error);
      throw new Error(error.response.data.message);
    }
  }

  return (
    <div>
      { localStorage.getItem('token') ? (
      <header className="upside-header">
        <div className="upside-contents">
          <nav className="upside-navigation">
            <ul>
              <button onClick={showMypageModal}  className="Signin">
                마이페이지
              </button>
              {mypagemodalOpen && <MypageModal setModalOpen={setMypageModalOpen} />}
              {mypagemodalOpen && <Backdrop onCancel={closeMypageModal} />}
              <button onClick={logOut} className="Login">
                로그아웃
              </button>
            </ul>
          </nav>
        </div>
      </header>
      ):(
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
              {logInmodalOpen && <Login setLoginModalOpen={setLoginModalOpen} cookies={props.cookies} setCookie = {props.setCookie}/>}
              {logInmodalOpen && <Backdrop onCancel={closeLoginModal} />}
            </ul>
          </nav>
        </div>
      </header>
      )}
      <header className="header">
        <div className="contents">
          <div className="Coby" onClick={MainHandleClick}/>
          <nav className="navigation">
            <ul>
              <li onClick={CodeReviewHandleClick}>
                코드 리뷰
              </li>
              <li onClick={PairProgrammingHandleClick}>
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
