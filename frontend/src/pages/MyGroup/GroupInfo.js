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
import MyGroupInfoEdit from "../../sevices/MyGroupInfoEdit";
import MyPage from "../../sevices/MyPage";
import MyGroup from "../../sevices/MyGroup";


const GroupInfo = (props) => {
    const [groupname, setGroupname] = useState("");
    const [groupdescription, setGroupdescription] = useState("그룹소개 글꼴 테스트중입니다. 만나서 반갑습니다.");
    const [name, setName] = useState("");
    const [profileImg, setProfileImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const [introEdit, setIntroEdit] = useState(false);
    const [expPoint, setExpPoint] = useState(0);

    useEffect(() => {
        MyGroup().then((data) => {
            setGroupname(data.name);
            setGroupdescription(data.description);
            setExpPoint(data.exp_point);
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

    const handleInputChange = (e) => {
        setGroupdescription(e.target.value);
    };

    const onClickIntroduce = (e) => {
        e.preventDefault();
        setIntroEdit(!introEdit);
        try {
            const formData = new FormData();
            const jsonData = JSON.stringify({ name: "groupname", description: "groupdescription" });
            formData.append("jsonData", jsonData);

            MyGroupInfoEdit(formData).then((data) => {
                setIntroEdit(!introEdit);
            });
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    };

    function ExitHandleClick(event){
        alert('탈퇴')
    }

    return (
        <div className="outer1">
            <Layout/>
            <GroupBanner/>
            <header>
                <div className="info1">
                    <div className="groupName">
                        <p className="group_exit" onClick={ExitHandleClick}>그룹 탈퇴하기</p>
                        <h className="group_detail_name">{groupname}</h>
                        <p className="group_detail_info"><img src={medal} alt="medal"></img>&nbsp;1위&nbsp;&nbsp;&nbsp;<img src={group} alt="member"></img>&nbsp;3/20&nbsp;&nbsp;&nbsp;<img src={logo} alt="logo"></img>&nbsp;{expPoint}&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="groupIntro">
                        { introEdit ? (
                            <div>
                                <input className="introEditInput" type="text" value={groupdescription} onChange={handleInputChange} defaultValue={groupdescription}></input>
                                <button className="introEditBtn" onClick={onClickIntroduce}>수정</button>
                            </div>
                        ) : (
                            <div>
                                <p className="subtitle">그룹 소개 <img src={pencil} alt="pencil" onClick={onClickIntroduce} className="correction"></img></p>
                                <p className="groupdescription">{groupdescription}</p>
                            </div>
                        )}
                    </div>
                    <div className="groupNotice">
                        <p className="noticeline"><img src={notice} alt="img" className="noticeimg"></img><span className="noticetitle">&nbsp;&nbsp;공지사항&nbsp;&nbsp;&nbsp;</span>코린이를 위한 멘토멘티 프로그램 운영 중입니다. 많은 참여 부탁드립니다.</p>
                    </div>
                    <div className="Myinfo">
                        <div className="profile">
                            <p className="subtitle">내정보</p>
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
        </div>
  );
}

export default GroupInfo;



