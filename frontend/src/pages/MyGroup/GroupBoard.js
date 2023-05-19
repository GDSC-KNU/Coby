import { useState, useEffect } from "react";
import "./GroupBoard.css"
import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";
import Pagination from 'react-js-pagination';
import Writeget from "../../sevices/Board";

const GroupBoard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Writeget().then((data) => {
      setPosts(data);
    }).catch((err) => {
      console.log(err.message);
    });
  }, []);

  function WriteHandleClick(event){
    window.location.href="/BoardWrite";
  }

  return (
      <div className="outer1">
        <Layout/>
        <GroupBanner/>
        <div className="boardouter">
          <section className="post-list">
            <table className="table">
              <thead>
              <tr>
                <th className="first-th">제목</th>
                <th className="second-th">작성일</th>
                <th className="third-th">작성자</th>
              </tr>
              </thead>
            </table>
            <div className="post-list-body">
              {
                posts.map((post) => (
                    <div className="post-item">
                      <div className="post-item-title">
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                      </div>
                      <div className="post-item-date">{post.createdAt}</div>
                      <div className="post-item-writer">{post.createdBy}</div>
                    </div>
                ))
              }
            </div>
          </section>
          <button onClick={WriteHandleClick}>글쓰기</button>
          <button>테스트</button>
        </div>
      </div>
  )
}

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