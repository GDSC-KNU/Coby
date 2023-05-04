import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";
import "./GroupInfo.css"
import notice from '../../images/Vector.png'
import medal from '../../images/medal.png'
import group from '../../images/member.png'
import logo from '../../images/minilogo.png'
import pencil from '../../images/pencil.png'

import { useState } from "react";
import Backdrop from "../../components/reuseUI/Backdrop";
import MyInfoEdit from "../../components/modal/myInfoEdit/myInfoEdit";


const GroupInfo = (props) => {
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
                        <h className="group_detail_name">그룹이름</h>
                        <p className="group_detail_info"><img src={medal} alt="medal"></img>&nbsp;1위&nbsp;&nbsp;&nbsp;<img src={group} alt="member"></img>&nbsp;3/20&nbsp;&nbsp;&nbsp;<img src={logo} alt="logo"></img>&nbsp;12,203&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="groupIntro">
                        <p className="subtitle">그룹소개</p>
                    </div>
                    <div className="groupNotice">
                        <p className="noticeline"><img src={notice} alt="img" className="noticeimg"></img><span className="noticetitle">&nbsp;&nbsp;공지사항&nbsp;&nbsp;&nbsp;</span>코린이를 위한 멘토멘티 프로그램 운영 중입니다. 많은 참여 부탁드립니다.</p>
                    </div>
                    <div className="Myinfo">
                        <div className="profile">
                            <p className="subtitle">내정보&nbsp;&nbsp;<img src={pencil} alt="pencil" onClick={showEditModal} className="correction"></img></p>
                            <div className="profile_outer">
                                <div className="profile_img">
                                </div>
                                <div className="profile_myinfo">
                                    <p>내이름</p>
                                </div>
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



