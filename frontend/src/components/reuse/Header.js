import React from "react";

import "./Header.css";

function Header() {
  return (
    <div>
      <header className="upside-header">
        <div className="upside-contents">
          <nav className="upside-navigation">
            <ul>
              <li>
                <div className="Signup" />
                회원가입
              </li>
              <li>
                <div className="Login" />
                로그인
              </li>
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
