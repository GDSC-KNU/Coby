import "./GroupBanner.css"

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
            <button onClick={NoGroupHandleClick}>그룹x</button>
            <button onClick={GroupInfoHandleClick}>그룹정보</button>
            <button onClick={GroupBoardHandleClick}>그룹게시판</button>
            <button onClick={GroupMemberHandleClick}>그룹원정보</button>
        </div>
    );
}

export default GroupBanner;
