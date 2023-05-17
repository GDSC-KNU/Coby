import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";
import "./GroupInfo.css"
import notice from '../../images/Vector.png'
import medal from '../../images/medal.png'
import group from '../../images/member.png'
import logo from '../../images/minilogo.png'
import pencil from '../../images/pencil.png'

import { useEffect } from "react";
import { useState } from "react";
import Backdrop from "../../components/reuseUI/Backdrop";
import MyInfoEdit from "../../components/modal/myInfoEdit/myInfoEdit";
import MyPage from "../../sevices/MyPage";
import MyGroup from "../../sevices/MyGroup";


const GroupInfo = (props) => {
    const [groupname, setGroupname] = useState("");
    const [groupdescription, setGroupdescription] = useState("");
    const [name, setName] = useState("");
    const [profileImg, setProfileImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        MyGroup().then((data) => {
            setGroupname(data.name);
            setGroupdescription(data.description);
        }).catch((err) => {
            console.log(err.message);
        });
        MyPage().then((data) => {
            setName(data.name);
            setProfileImg(data.profileUrl);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setGroupname(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    const showEditModal = () => {
        props.setInfoEditModalOpen(true);
    };
    const closeEditModal = () => {
        props.setInfoEditModalOpen(false);
    }

    function ExitHandleClick(event){
        alert('탈퇴')
    }


    return (
        <div className="outer">
            <Layout/>
            <GroupBanner/>
            <header>
                <div className="info">
                    <div className="groupName">
                        <p className="group_exit" onClick={ExitHandleClick}>그룹 탈퇴하기</p>
                        <h className="group_detail_name">{groupname}<img src={pencil} alt="pencil" onClick={showEditModal} className="correction"></img></h>
                        <p className="group_detail_info"><img src={medal} alt="medal"></img>&nbsp;1위&nbsp;&nbsp;&nbsp;<img src={group} alt="member"></img>&nbsp;3/20&nbsp;&nbsp;&nbsp;<img src={logo} alt="logo"></img>&nbsp;12,203&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="groupIntro">
                        <p className="subtitle">{groupdescription}<img src={pencil} alt="pencil" onClick={showEditModal} className="correction"></img></p>
                    </div>
                    <div className="groupNotice">
                        <p className="noticeline"><img src={notice} alt="img" className="noticeimg"></img><span className="noticetitle">&nbsp;&nbsp;공지사항&nbsp;&nbsp;&nbsp;</span>코린이를 위한 멘토멘티 프로그램 운영 중입니다. 많은 참여 부탁드립니다.</p>
                    </div>
                    <div className="Myinfo">
                        <div className="profile">
                            <p className="subtitle">내정보&nbsp;&nbsp;<img src={pencil} alt="pencil" onClick={showEditModal} className="correction"></img></p>
                            <div className="profile_outer">
                              <img src={profileImg} alt="ProfileImage" className="profile_Img"></img>
                              <p>{name}</p>
                            </div>
                        </div>
                        <div className="myboard">
                            <p className="subtitle">내가 쓴 글</p>
                        </div>
                    </div>
                </div>
            </header>
            {props.infoEditOpen && <MyInfoEdit setModalOpen={props.setInfoEditModalOpen}/>}
            {props.infoEditOpen && <Backdrop onCancel={closeEditModal} />}
        </div>
  );
}

export default GroupInfo;



