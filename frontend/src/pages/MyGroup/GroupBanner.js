import "./GroupBanner.css"
import MyGroup from "../../sevices/MyGroup";
import { useState, useEffect } from "react";

import groupimg from '../../images/GroupImg.png'

const GroupBanner = () => {
    const [groupname, setGroupname] = useState("");
    const [groupimage, setGroupimage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const [activeMenu, setActiveMenu] = useState("");

    function NoGroupHandleClick(event){
        window.location.href="/Nogroup";
    }

    function GroupInfoHandleClick(event){
        setActiveMenu("groupInfo");
        window.location.href="/GroupInfo";
    }

    function GroupBoardHandleClick(event){
        setActiveMenu("groupBoard");
        window.location.href="/GroupBoard";
    }

    function GroupMemberHandleClick(event){
        setActiveMenu("groupMember");
        window.location.href="/GroupMember";
    }

    useEffect(() => {
        MyGroup().then((data) => {
            setGroupname(data.name);
            setGroupimage(data.image);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (
        <div>
            <div className="groupbanner_body">
                <img src = {groupimage} alt="groupImage" className="group_img"/>
                <div className = "group_name">
                    {groupname}
                </div>

                {/*------------------------------------*/}

                {/* <div>
                    <button className = "groupbtn" onClick={NoGroupHandleClick}>그룹x</button>
                </div>  이부분은 그룹이 없을때만 나타나도록.*/}
                
                <div>
                    <button onClick={GroupInfoHandleClick} className={activeMenu === "groupInfo" ? "activebtn" : "groupbtn"}>그룹정보</button>
                </div>
                
                <div>
                    <button onClick={GroupBoardHandleClick} className={activeMenu === "groupBoard" ? "activebtn" : "groupbtn"}>그룹게시판</button>
                </div>
                
                <div>
                    <button onClick={GroupMemberHandleClick} className={activeMenu === "groupMember" ? "activebtn" : "groupbtn"}>그룹원목록</button>
                </div>

            </div>
        </div>
    );
}

export default GroupBanner;
