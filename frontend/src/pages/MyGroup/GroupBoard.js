import "./GroupBoard.css"
import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";

const GroupBoard = () => {
  return (
    <div className="outer">
        <Layout/>
        <GroupBanner/>
        게시판
    </div>
  );
}

export default GroupBoard;
