import { useState, useEffect } from "react";
import styles from "./GroupBoard.module.css";
import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";
import Pagination from "react-js-pagination";
import Writeget from "../../sevices/Board";
import { useNavigate } from "react-router-dom";

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
    <div>
      <Layout />
      <div className={styles.groupBoardOuter}>
      <GroupBanner />
        <div className={styles.boardouter}>
          <section className={styles.post_list}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.first_th}>제목</th>
                  <th className={styles.third_th}>작성자</th>
                  <th className={styles.second_th}>작성일</th>
                </tr>
              </thead>
            </table>
            <div className={styles.post_list_body}>
              {
                posts.map((post) => (
                    <div className={styles.post_item}>
                      <div className={styles.post_item_title}>
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                      </div>
                      <div className={styles.post_item_writer}>{post.createdBy}</div>
                      <div className={styles.post_item_date}>{post.createdAt}</div>
                    </div>
                ))
              }
              {/* <div className={styles.post_item}>
                <div className={styles.post_item_title}>
                  <a>게시글 제목입니다.게시글 제목입니다.게시글 제목입니다.게시글 제목입니다.</a>
                </div>
                <div className={styles.post_item_writer}>작성자</div>
                <div className={styles.post_item_date}>날짜</div>
              </div>
              <div className={styles.post_item}>
                <div className={styles.post_item_title}>
                  <a>게시글 제목입니다.게시글 제목입니다.게시글 제목입니다.게시글 제목입니다.</a>
                </div>
                <div className={styles.post_item_writer}>작성자</div>
                <div className={styles.post_item_date}>날짜</div>
              </div>
              <div className={styles.post_item}>
                <div className={styles.post_item_title}>
                  <a>게시글 제목입니다.게시글 제목입니다.게시글 제목입니다.게시글 제목입니다.</a>
                </div>
                <div className={styles.post_item_writer}>작성자</div>
                <div className={styles.post_item_date}>날짜</div>
              </div>
              <div className={styles.post_item}>
                <div className={styles.post_item_title}>
                  <a>게시글 제목입니다.게시글 제목입니다.게시글 제목입니다.게시글 제목입니다.</a>
                </div>
                <div className={styles.post_item_writer}>작성자</div>
                <div className={styles.post_item_date}>날짜</div>
              </div> */}
            </div>
          </section>
          <button className={styles.writebtn} onClick={WriteHandleClick}>
            글쓰기
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupBoard;

/*
 <Pagination>
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        </Pagination>
*/
