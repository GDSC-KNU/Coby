import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";
import "./GroupMember.css"

const GroupMember = () => {
    return (
        <div className="outer">
            <Layout/>
            <GroupBanner/>
        </div>                
  );
}

export default GroupMember;



