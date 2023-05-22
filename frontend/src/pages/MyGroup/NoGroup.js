import Layout from "../../components/reuseUI/Layout";
import { useState } from "react";
import styles from "./NoGroup.module.css"
import logo from '../../images/NoGroup.png'
import Backdrop from "../../components/reuseUI/Backdrop";
import MyGroupMake from "../../components/modal/makeGroup/makeGroup";

const Nogroup = () => {
  const [groupMakeOpen, setGroupMakeModalOpen] = useState(false);

  const showGroupMakeModal = () => {
    setGroupMakeModalOpen(true);
  };
  const closeGroupMakeModal = () => {
    setGroupMakeModalOpen(false);
  }

  return (
    <div className={styles.outer}>
        <Layout />
        <div className={styles.sogroup_main}>
            <p className={styles.nogroup_font}>가입된 그룹이 없습니다.</p>
            <img src={logo} alt="그룹" className= {styles.nogroup_image} />
        </div>
        <div className={styles.sub}>
            <button className={styles.search_btn1}>+그룹 탐색하기</button>
            <button className={styles.search_btn1} onClick={showGroupMakeModal}>+그룹 생성하기</button>
        </div>
          {groupMakeOpen && <MyGroupMake setModalOpen={setGroupMakeModalOpen}/>}
          {groupMakeOpen && <Backdrop onCancel={closeGroupMakeModal} />}
    </div>
  );
}

export default Nogroup;
