import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";
import styles from "./GroupInfo.module.css";
import notice from '../../images/Vector.png'
import medal from '../../images/medal.png'
import group from '../../images/member.png'
import logo from '../../images/minilogo.png'
import pencil from '../../images/pencil.png'

import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyGroupInfoEdit from "../../sevices/MyGroupInfoEdit";
import MyPage from "../../sevices/MyPage";
import MyGroup from "../../sevices/MyGroup";
import leaveGroup from "../../sevices/DeleteGroup";


const GroupInfo = (props) => {
    const [groupname, setGroupname] = useState("");
    const [groupdescription, setGroupdescription] = useState("");
    const [name, setName] = useState("");
    const [profileImg, setProfileImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const [introEdit, setIntroEdit] = useState(false);
    const [expPoint, setExpPoint] = useState(0);
    const [groupId, setGroupId] = useState('');
    const [createdBy, setCreatedBy] = useState("");
    const [userId, setUserId] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        MyGroup().then((data) => {
            setGroupname(data.name);
            setGroupdescription(data.description);
            setExpPoint(data.exp_point);
            setGroupId(data.id);
            setCreatedBy(data.createdBy);
        }).catch((err) => {
            console.log(err.message);
        });
        MyPage().then((data) => {
            setName(data.name);
            setProfileImg(data.profileUrl);
            setUserId(data.userId);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    const handleInputChange = (e) => {
        setGroupdescription(e.target.value);
    };

    const handleIntroduce = (e) => {
        e.preventDefault();
        setIntroEdit(!introEdit);
        try {
            const formData = new FormData();
            formData.append("description", groupdescription);

            MyGroupInfoEdit(formData, groupId).then((data) => {
                alert("수정 완료!");
            });
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    };

    const onClickIntroduce = (e) => {
        e.preventDefault();
        setIntroEdit(!introEdit);
    };

    const ExitHandleClick = async (e) => {
        e.preventDefault();
        try {
            leaveGroup(groupId).then((data) => {
                alert("그룹 탈퇴 완료!");
                navigate(`/`);
            });
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    };


    return (
        <div className={styles.outer}>
            <Layout/>
            <GroupBanner/>
            <header>
                <div className={styles.info}>
                    <div className={styles.groupName}>
                        <p className={styles.group_exit} onClick={ExitHandleClick}>그룹 탈퇴하기</p>
                        <h className={styles.group_detail_name}>{groupname}</h>
                        <p className={styles.group_detail_info}><img src={medal} alt="medal"></img>&nbsp;1위&nbsp;&nbsp;&nbsp;<img src={group} alt="member"></img>&nbsp;3/20&nbsp;&nbsp;&nbsp;<img src={logo} alt="logo"></img>&nbsp;{expPoint}&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className={styles.groupIntro}>
                        { introEdit ? (
                            <div>
                                <input className={styles.introEditInput} type="text" value={groupdescription} onChange={handleInputChange} defaultValue={groupdescription}></input>
                                <button className={styles.introEditBtn} onClick={handleIntroduce}>수정</button>
                            </div>
                        ) : (
                            <div>
                            { createdBy === userId ? (
                                <div>
                                <p className={styles.subtitle}>그룹 소개 <img src={pencil} alt="pencil" onClick={onClickIntroduce} className="correction"></img></p>
                                <p className={styles.groupdescription}>{groupdescription}</p>
                                </div>
                            ):(
                                <div>
                                <p className={styles.subtitle}>그룹 소개</p>
                                <p className={styles.groupdescription}>{groupdescription}</p>
                                </div>
                            )}
                            </div>
                        )}
                    </div>
                    <div className={styles.groupNotice}>
                        <p className={styles.noticeline}><img src={notice} alt="img" className={styles.noticeimg}></img><span className={styles.noticetitle}>&nbsp;&nbsp;공지사항&nbsp;&nbsp;&nbsp;</span>코린이를 위한 멘토멘티 프로그램 운영 중입니다. 많은 참여 부탁드립니다.</p>
                    </div>
                    <div className={styles.Myinfo}>
                        <div className={styles.profile}>
                            <p className={styles.subtitle}>내정보</p>
                            <div className={styles.profile_outer}>
                              <img src={profileImg} alt="ProfileImage" className={styles.profile_Img}></img>
                              <p>{name}</p>
                            </div>
                        </div>
                        <div className={styles.myboard}>
                            <p className={styles.subtitle}>내가 쓴 글</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
  );
}

export default GroupInfo;


