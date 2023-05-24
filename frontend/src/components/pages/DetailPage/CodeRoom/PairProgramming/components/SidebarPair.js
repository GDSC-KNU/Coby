import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../../../assets/Coby.png";

import styles from "./css/SidebarPair.module.css";
import exit from "../../../../../../assets/exit.png";
import MyPage from "../../../../../../sevices/MyPage";
import DeleteRoom from "../../../../../../sevices/DeleteRoom";
import ShowRoomListPair from "../../../../../../sevices/ShowRoomListPair";

const SidebarPair = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await MyPage();
        const data = response.userId;
        setUserList((prevUserList) => {
          const updatedUserList = prevUserList.filter((user) => user !== data);
          return [...updatedUserList, data];
        });
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
      const currentUser = await MyPage();
      const currentUserId = currentUser.userId;
      const roomData = await ShowRoomListPair();
      const roomId = roomData
        .filter((makeRoom) => makeRoom.createdBy === currentUserId)
        .map((makeRoom) => makeRoom.id);
      await DeleteRoom(roomId, userList);
      setUserList([]);
    } catch (error) {
      alert(error.response.data);
      throw new Error(error.response.data.message);
    }
  };

  const deleteHandler = async () => {
    const confirmed = window.confirm(
      "정말 나가시겠습니까? 방장이 아닌 경우 포인트를 얻지 못합니다."
    );
    if (confirmed) {
      const currentUser = await MyPage();
      const currentUserId = currentUser.userId;
      const makeUserList = await ShowRoomListPair();
      const makeUserIds = makeUserList.map((makeRoom) => makeRoom.createdBy);
      const isCurrentUserMakeUser = makeUserIds.includes(currentUserId);

      if (isCurrentUserMakeUser) {
        await DeleteRoomHandler();
      }

      navigate("/PairCodeRoomList");
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

export default SidebarPair;
