import { useState, useEffect } from "react";
import styles from "../css/GroupBoard.module.css";
import Layout from "../../../../../components/common/Layout/Layout";
import GroupBanner from "./GroupBanner";
import Writeget from "../../../../../sevices/Writeget";
import { useNavigate } from "react-router-dom";
import notice from "../../../../../assets/Vector.png";
import person from "../../../../../assets/person.png";

import moment from 'moment'

const GroupBoard = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Writeget()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function WriteHandleClick(event) {
    navigate("/BoardWrite");
  }

  return (
    <div className={styles.groupBoardOuter}>
      <Layout/>
      <GroupBanner />
        <div className={styles.boardouter}>
          <section className={styles.post_list}>
            <h className={styles.boardTitle}>그룹 게시판</h>
            <div className={styles.groupNotice}>
              <p className={styles.noticeline}><img src={notice} alt="img" className={styles.noticeimg}></img><span className={styles.noticetitle}>&nbsp;&nbsp;공지사항&nbsp;&nbsp;&nbsp;</span>코린이를 위한 멘토멘티 프로그램 운영 중입니다. 많은 참여 부탁드립니다.</p>
            </div>
            <div className={styles.post_list_body}>
              {
                posts.map((post) => (
                    <div className={styles.post_item}>
                      <div className={styles.post_item_title}>
                        <a href={`/posts/${post.id}`} className={styles.post_title}>{post.title}</a>
                      </div>
                      <div className={styles.post_item_writer}>
                        <p className={styles.writer}><img src={person} alt="profileImg" className={styles.profileImg}></img>&nbsp;{post.createdBy}</p>
                      </div>
                      <div className={styles.post_item_date}>{moment(post.createdAt).format('YYYY.MM.DD')}</div>
                    </div>
                ))}
            </div>
          </section>
          <button className={styles.writebtn} onClick={WriteHandleClick}>
            글쓰기
          </button>
        </div>
    </div>
  );
};

export default GroupBoard;
