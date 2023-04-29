import "./GroupBanner.css"

import groupimg from '../../images/GroupImg.png'

const GroupBanner = () => {
    function NoGroupHandleClick(event){
        window.location.href="/Nogroup";
    }

    function GroupInfoHandleClick(event){
        window.location.href="/GroupInfo";
    }

    function GroupBoardHandleClick(event){
        window.location.href="/GroupBoard";
    }

    function GroupMemberHandleClick(event){
        window.location.href="/GroupMember";
    }

    return (
        <div>
            <div className="groupbanner_body">
                
                <div className = "group_imgbox">
                    <img src = {groupimg}/>
                </div>
                
                <div className = "group_name">
                    (그룹 이름)
                </div>

                {/*------------------------------------*/}

                {/* <div>
                    <button className = "groupbtn" onClick={NoGroupHandleClick}>그룹x</button>
                </div>  이부분은 그룹이 없을때만 나타나도록.*/}
                
                <div>
                    <button className = "groupbtn" onClick={GroupInfoHandleClick}>그룹정보</button>
                </div>
                
                <div>
                    <button className = "groupbtn" onClick={GroupBoardHandleClick}>그룹게시판</button>
                </div>
                
                <div>
                    <button className = "groupbtn" onClick={GroupMemberHandleClick}>그룹원목록</button>
                </div>

            </div>
        </div>
    );
}

export default GroupBanner;
