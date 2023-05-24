import logo from "../../../../assets/Coby.png";

import "./css/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
        <div className="up_menu">
            <img src={logo} alt="로고" className="logo-menu"/>
            <div className="sev">
                <h1>멘토링</h1>
                <br/>
                <p>멘토링 이란</p>
                <p>멘토와 멘티</p>
            </div>
            <div className="sev">
                <h1>코드 리뷰</h1>
                <br/>
                <p>코드 리뷰란</p>
                <p>방 생성 및 참여</p>
            </div>
            <div className="sev">
                <h1>그룹</h1>
                <br/>
                <p>그룹 시스템</p>
                <p>기여도</p>
                <p>생성 및 가입</p>
            </div>
            <div className="sev">
                <h1>도움말</h1>
                <br/>
                <p>이용방법</p>
                <p>자주묻는 질문</p>
            </div>
        </div>
        <div className="down_menu">
            <p className="explain">
                © 2023 All Rights Reserved. {'<'}GDSC-KNU-2{'>'} 
            </p>
            <p>

            </p>
            <p className="explain">
                Team 5 project : {'<'}COBY.{'>'}
            </p>
            <p className="explain">
                Member : 김규회 남성훈 이승운 이창윤 이다현
            </p>
        </div>
    </div>
  );
}

export default Menu;
