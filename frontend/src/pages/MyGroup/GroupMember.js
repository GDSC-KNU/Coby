import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";
import "./GroupMember.css";

const GroupMember = () => {
  return (
    <div>
      <Layout />
      <div className="outer3">
        <GroupBanner />
      </div>
    </div>
  );
};

export default GroupMember;
