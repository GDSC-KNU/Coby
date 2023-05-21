import "./GroupBanner.css"
import MyGroup from "../../sevices/MyGroup";
import { useState, useEffect } from "react";
import pencil from '../../images/pencil.png'
import Backdrop from "../../components/reuseUI/Backdrop";
import MyGroupEdit from "../../components/modal/myGroupEdit/myGroupEdit";
import { useNavigate } from "react-router-dom";

const GroupBanner = () => {
    const [groupname, setGroupname] = useState("");
    const [groupimage, setGroupimage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const [groupEditOpen, setGroupEditModalOpen] = useState(false);
    const navigate = useNavigate();

    function NoGroupHandleClick(event){
        navigate("/Nogroup");
    }

    function GroupInfoHandleClick(event){
        navigate("/GroupInfo");
    }

    function GroupBoardHandleClick(event){
        navigate("/GroupBoard");
    }

    function GroupMemberHandleClick(event){
        navigate("/GroupMember");
    }

    const showGroupEditModal = () => {
        setGroupEditModalOpen(true);
    };
    const closeGroupEditModal = () => {
        setGroupEditModalOpen(false);
    }

    useEffect(() => {
        MyGroup().then((data) => {
            setGroupname(data.name);
            setGroupimage(data.profileUrl);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (
        <div>
            <div className="groupbanner_body">
                <img src = {groupimage} alt="groupImage" className="group_img"/>
                <img src={pencil} alt="pencil" onClick={showGroupEditModal} className="correction"></img>
                <div className = "group_name">
                    {groupname}
                </div>
                <div>
                    <button onClick={GroupInfoHandleClick} className="groupbtn">그룹정보</button>
                </div>

                <div>
                    <button onClick={GroupBoardHandleClick} className="groupbtn">그룹게시판</button>
                </div>

                <div>
                    <button onClick={GroupMemberHandleClick} className="groupbtn">그룹원목록</button>
                </div>

                <div>
                    <button onClick={NoGroupHandleClick} className="groupbtn">그룹없을때</button>
                </div>

            </div>
            {groupEditOpen && <MyGroupEdit setModalOpen={setGroupEditModalOpen}/>}
            {groupEditOpen && <Backdrop onCancel={closeGroupEditModal} />}
        </div>
    );
}

export default GroupBanner;
