import Layout from "../components/reuseUI/Layout";
import styles from "./Help.module.css";
import logo from "../images/Coby_darkBlue.png";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();

  function ReviewClick() {
    navigate("/CodeRoomList");
  }
  
  function PairClick(){
    navigate("/PairCodeRoomList");
  }

  function MyGroupClick(){
    navigate("/GroupInfo");
  }

  return (
    <div>
      <Layout />
      <div className={styles.helpGuide}>
        <img
          src={logo}
          alt="로고"
          className={styles.logo}
          style={{ display: "block" }}
        />
        <div>
          <div className={styles.title}>
            <h2>코드 리뷰</h2>
            <button className={styles.Go} onClick={ReviewClick}>
              ➡
            </button>
          </div>
          <div>
            <p>코딩을 하다가 문제가 생겼을 때, 이곳에서 도움을 얻어요.</p>
            <p>
              방을 만들고, 멘토님과의 소통을 통해 내 코드의 문제점을 알아봅시다!
            </p>
          </div>
          <br />
          <div className={styles.title}>
            <h2>페어프로그래밍</h2>
            <button className={styles.Go} onClick={PairClick}>
              ➡
            </button>
          </div>
          <div>
            <p>여러명이 하나의 프로젝트를 작업할 때 사용해요.</p>
            <p>즉각적으로 지식을 공유하고 함께 고민하며 코딩하는 공간입니다.</p>
          </div>
          <br />
          <h3>코드룸 사용방법</h3>
          <div>
            <p>코드룸 들어갔을시 방을 생성 및 삭제할 수 있습니다.</p>
            <p>
              (🌟주의 : 방장이 방을 없애기 전에 방을 나가면 기여도가 반영되지
              않습니다.)
            </p>
            <p>
              코드룸 들어갔을시 채팅방을 따로 입장해주셔야 대화에 참여하실 수
              있습니다.
            </p>
            <p>
              채팅방에서 방장이 Live Share나 Code With Me 링크를 받아서
              코드리뷰와 페어프로그래밍에 참여해보아요!
            </p>
          </div>
          <br />
          <div className={styles.title}>
            <h2>마이 그룹</h2>
            <button className={styles.Go} onClick={MyGroupClick}>
              ➡
            </button>
          </div>
          <div>
            <p>나와 진로가 비슷한 사람들과 그룹을 통해 소통할 수 있어요.</p>
            <p>이곳에서 그룹간 기여도도 쌓고, 정보도 나누며 함께 성장해봐요!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
