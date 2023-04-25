import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";
import "./GroupInfo.css"

const GroupInfo = () => {
  return (
    <div className="outer">
        <Layout/>
        <GroupBanner/>
        <div className="groupName">
            그룹이름
        </div>
        <div className="groupIntro">
            그룹소개
        </div>
        <div className="groupNotice">
            공지사항
        </div>
        <div className="Myinfo">
            내정보
        </div>
    </div>
  );
}

export default GroupInfo;
