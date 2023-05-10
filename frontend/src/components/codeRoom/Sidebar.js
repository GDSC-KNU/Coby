import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/Coby.png";

import styles from "./Sidebar.module.css";
import exit from "../../images/exit.png";
import MyPage from "../../sevices/MyPage";
import getRoomId from "../../sevices/getRoomId";
import DeleteRoom from "../../sevices/DeleteRoom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await MyPage();
        setUserList(response.data);
      } catch (error) {
        console.log(error);
        console.log(
          "useEffect 에러입니다. 사용자 리스트를 가져오는 데 실패했습니다."
        );
      }
    };

    fetchUserList();
  }, []);

  const DeleteRoomHandler = async () => {
    try {
      const roomData = await getRoomId();
      await DeleteRoom(roomData, userList);
    } catch (error) {
      console.error(error);
      alert(error.response.data);

      throw new Error(error.response.data.message);
    }
  };

  const deleteHandler = () => {
    const confirmed = window.confirm(
      "정말 나가시겠습니까? 방장이 아닌 경우 포인트를 얻지 못합니다."
    );
    if (confirmed) {
      DeleteRoomHandler();
      navigate("/CodeRoomList");
    }
  };

  return (
    <div className={styles.out}>
      <div style={{ width: "320px" }} className={styles.sidebar1}>
        <img
          src={logo}
          alt="로고"
          className={styles.logo}
          style={{ display: "block" }}
        />
        <div className={styles.memberlist}>
          <ul>
            {userList.map((user) => (
              <li key={user.userid}>{user.name}</li>
            ))}
          </ul>
          {/* <ul>member2</ul>
          <ul>member3</ul> */}
        </div>

        <div className={styles.imgbox}>
          <img
            src={exit}
            alt="나가기"
            className={styles.exit}
            onClick={deleteHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
