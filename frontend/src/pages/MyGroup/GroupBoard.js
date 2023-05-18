import { useState } from "react";
import "./GroupBoard.css"
import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";
import Pagination from 'react-js-pagination';

const GroupBoard = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
  };

  function WriteHandleClick(event){
    window.location.href="/BoardWrite";
  }

  return (
    <div className="outer1">
      <Layout/>
      <GroupBanner/>
      <div className="boardouter">
        <h2>그룹게시판</h2>
        <Pagination>
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        </Pagination>
        <button onClick={WriteHandleClick}>글쓰기</button>
      </div>
    </div>
  )
}

export default GroupBoard;

