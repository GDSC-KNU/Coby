import { useState } from "react";
import Layout from "../components/reuseUI/Layout";
import SimpleSlider from "../components/main/Carousel";
import "./Main.css";
import MainImg from "../images/Coby_darkBlue.png";
import img from "../images/menu.png";
import Menu from "../components/main/Menu";

function Main(props) {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <div>
      <div className="Bar">
        <Layout cookies={props.cookies} setCookie={props.setCookie} />
      </div>
      <div className="Ad">
        <SimpleSlider />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="Main-title">
        <h1>anyone can develop</h1>
        <p>＜COBY.＞란 Coding의 CO와 BY.의 뜻을 따와 합친 이름입니다.</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <br />
      <br />
      <br />
      <br />
      <div className="fade-in">혼자 코딩하기 힘드셨죠?</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="fade-in2">그런 여러분을 위해 찾아갑니다.</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="fade-in3">
        <div>
          <img src={MainImg} alt="로고" className="Main-logo" />
        </div>
        <p className="title">실시간 개발환경 공유 플랫폼 </p>
        <p className="word">
          코드 리뷰, 멘토링, 페어프로그래밍 Co (함께 개발) by.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="menu">
        <Menu/>
      </div>
    </div>
  );
}

export default Main;
