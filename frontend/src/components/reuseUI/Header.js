import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../modal/log/LoginModal";
import Backdrop from "./Backdrop";
import SignIn from "../modal/signin/SigninModal";
import MypageModal from "../modal/myPage/MyPageModal";
import { useCookies } from 'react-cookie';
import client from "../../sevices/Client";

import axios from "axios";

import "./Header.css";

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
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

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
  const logOut = () => {
    client.post('/logout', {
        accessToken : cookies.token,
        //refreshToken :
        })
        .then(() => {
          removeCookie('token');
          navigate(-1);
          setLoginModalOpen(false);
        })
        .catch((error) => {
            console.log(error.message);
        });
  }

  return (
    <div>
      { cookies.token ? (
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
