import React from "react";
import { useState, useEffect } from "react";
import Login from "../modal/log/LoginModal";
import Backdrop from "./Backdrop";
import SignIn from "../modal/signin/SigninModal";
import MypageModal from "../modal/myPage/MyPageModal";
import Help from "../modal/help/HelpModal";
import HelpWindow from "../../pages/Help";

import "./Header.css";
import Logout from "../../sevices/Logout";
import { useNavigate, useLocation } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  function CodeReviewHandleClick() {
    setActiveMenu("codeReview");
    navigate("/CodeRoomList");
  }

  function PairProgrammingHandleClick() {
    navigate("/PairCodeRoomList");
    setActiveMenu("pairProgramming");
  }

  function MainHandleClick() {
    navigate("/");
  }

  function MyGroupClick() {
    navigate("/GroupInfo");
    setActiveMenu("myGroup");
  }

  useEffect(() => {
    // 페이지 이동 후 activeMenu 상태가 변경되면 색상 업데이트
    const currentPath = location.pathname;
    if (currentPath === "/CodeRoomList") {
      setActiveMenu("codeReview");
    } else if (currentPath === "/PairCodeRoomList") {
      setActiveMenu("pairProgramming");
    } else if (currentPath === "/GroupInfo") {
      setActiveMenu("myGroup");
    } else {
      setActiveMenu("");
    }
  }, [location.pathname]);

  const [logInmodalOpen, setLoginModalOpen] = useState(false);
  const [signInmodalOpen, setSigninModalOpen] = useState(false);
  const [mypagemodalOpen, setMypageModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);


  const showLoginModal = () => {
    setLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };
  const showMypageModal = () => {
    setMypageModalOpen(true);
  };
  const closeMypageModal = () => {
    setMypageModalOpen(false);
  };
  const showSigninModal = () => {
    setSigninModalOpen(true);
  };
  const closeSigninModal = () => {
    setSigninModalOpen(false);
  };

  const showHelpModal = () => {
    setHelpModalOpen(true);
  }
  const closeHelpModal = () => {
    setHelpModalOpen(false);
  }


  const logOut = async (event) => {
    event.preventDefault();
    try {
      const message = await Logout();
      // 로그아웃에 성공한 경우, 메시지를 출력하고 페이지를 새로고침합니다.
      alert("로그아웃 완료");
      console.log(message);
      window.location.reload();
    } catch (error) {
      // 로그아웃에 실패한 경우, 에러 메시지를 출력합니다.
      console.error(error);
      throw new Error(error.response.data.message);
    }
  };

  return (
    <div>
      {localStorage.getItem("token") ? (
        <header className="upside-header">
          <div className="upside-contents">
            <nav className="upside-navigation">
              <ul>
                <button onClick={showMypageModal} className="Signin">
                  마이페이지
                </button>
                {mypagemodalOpen && (
                  <MypageModal setModalOpen={setMypageModalOpen} />
                )}
                {mypagemodalOpen && <Backdrop onCancel={closeMypageModal} />}
                <button onClick={logOut} className="Login">
                  로그아웃
                </button>
              </ul>
            </nav>
          </div>
        </header>
      ) : (
        <header className="upside-header">
          <div className="upside-contents">
            <nav className="upside-navigation">
              <ul>
                <button onClick={showSigninModal} className="Signin">
                  회원가입
                </button>
                {signInmodalOpen && (
                  <SignIn setModalOpen={setSigninModalOpen} />
                )}
                {signInmodalOpen && <Backdrop onCancel={closeSigninModal} />}
                <button onClick={showMypageModal} className="Signin">
                  마이페이지
                </button>
                {mypagemodalOpen && (
                  <MypageModal setModalOpen={setMypageModalOpen} />
                )}
                {mypagemodalOpen && <Backdrop onCancel={closeMypageModal} />}
                <button onClick={showLoginModal} className="Login">
                  로그인
                </button>
                {logInmodalOpen && (
                  <Login
                    setLoginModalOpen={setLoginModalOpen}
                    cookies={props.cookies}
                    setCookie={props.setCookie}
                  />
                )}
                {logInmodalOpen && <Backdrop onCancel={closeLoginModal} />}
              </ul>
            </nav>
          </div>
        </header>
      )}
      <header className="header">
        <div className="contents">
          <div className="Coby" onClick={MainHandleClick} />
          <nav className="navigation">
            <ul>
              <li
                onClick={CodeReviewHandleClick}
                className={activeMenu === "codeReview" ? "active" : ""}
              >
                코드 리뷰
              </li>
              <li
                onClick={PairProgrammingHandleClick}
                className={activeMenu === "pairProgramming" ? "active" : ""}
              >
                페어 프로그래밍
              </li>
              <li
                onClick={MyGroupClick}
                className={activeMenu === "myGroup" ? "active" : ""}
              >
                마이그룹
              </li>
              <li  onClick={showHelpModal} className="Help">도움말</li>
              {helpModalOpen && <Help setHelpModalOpen={setHelpModalOpen} />}
              {helpModalOpen && <HelpWindow onCancel={closeHelpModal} />}

            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
