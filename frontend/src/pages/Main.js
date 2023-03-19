import { useState } from "react";
import Layout from "../components/reuseUI/Layout";
import SimpleSlider from "../components/main/Carousel";
import './Main.css'

function Main() {
  return (
    <div className="App">
      <div className="Bar">
        <Layout />
      </div>
      <div className="Ad">
        <SimpleSlider />
      </div>
      <div className="introduce">
        <p className="title">실시간 개발환경 공유 플랫폼 </p>
        <p className="word">  
        코드 리뷰, 멘토링, 페어프로그래밍 Co (함께 개발) by.
        </p>
      </div>
    </div>
  );
}

export default Main;
