import Layout from "../../../../common/Layout/Layout";
import { useState } from "react";
import styles from "../css/NoGroup.module.css"
import logo from '../../../../../assets/NoGroup.png'
import Backdrop from "../../../../common/Backdrop";

import MyGroupMake from "../components/makeGroup";
import FindGroupModal from "../components/findGroup";

const Nogroup = () => {
  const [groupMakeOpen, setGroupMakeModalOpen] = useState(false);
  const [groupFindOpen, setGroupFindModalOpen] = useState(false);

  const showGroupMakeModal = () => {
    setGroupMakeModalOpen(true);
  };
  const closeGroupMakeModal = () => {
    setGroupMakeModalOpen(false);
  };
  const showGroupFindModal = () => {
    setGroupFindModalOpen(true);
  };
  const closeGroupFindModal = () => {
    setGroupFindModalOpen(false);
  };


  return (
    <div className={styles.outer}>
        <Layout />
        <div className={styles.nogroup_main}>
            <p className={styles.nogroup_font}>가입된 그룹이 없습니다.</p>
            <img src={logo} alt="그룹" />
        </div>
        <div className={styles.sub}>
            <button className={styles.search_btn1} onClick={showGroupFindModal}>+그룹 탐색하기</button>
            <button className={styles.search_btn1} onClick={showGroupMakeModal}>+그룹 생성하기</button>
        </div>
          {groupMakeOpen && <MyGroupMake setModalOpen={setGroupMakeModalOpen}/>}
          {groupMakeOpen && <Backdrop onCancel={closeGroupMakeModal} />}
          {groupFindOpen && <FindGroupModal setModalOpen={setGroupFindModalOpen}/>}
          {groupFindOpen && <Backdrop onCancel={closeGroupFindModal} />}
    </div>
  );
}

export default Nogroup;
