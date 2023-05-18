import { useState, useEffect } from "react";
import Layout from "../../reuseUI/Layout";
import './MyPageModal.css';
import MyPage from "../../../sevices/MyPage";
import MyInfoEdit from "../myInfoEdit/myInfoEdit";
import Backdrop from "../../reuseUI/Backdrop";
import pencil from '../../../images/pencil.png';

function MyPageModal(){
    const [profileImg, setProfileImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const [name,setName] = useState('');
    const [group,setGroup] = useState('');
    const [exp, setExp] = useState('');
    const [grade, setGrade] = useState('');
    const [infoEditOpen, setInfoEditModalOpen] = useState(false);

    const showEditModal = () => {
        setInfoEditModalOpen(true);
    };
    const closeEditModal = () => {
        setInfoEditModalOpen(false);
    }
    const onClickCheck = () => {
        window.location.reload();
    }

    function checkGrade(exp) {
        if (exp < 1000) {
            setGrade('Bronze');
        } else if (exp < 2000) {
            setGrade('Silver');
        } else if (exp < 3000) {
            setGrade('Gold');
        }
    }

    useEffect(() => {
        MyPage().then((data) => {
            setName(data.name);
            setGroup(data.groupName);
            setExp(data.exp_point);
            setProfileImg(data.profileUrl);
            checkGrade(exp);
            console.log(data);
        }).catch((err) => {
            console.log(err.message);
        });
      }, []);
    
    return (
        <div>
            <Layout/>
            <div className="modal">
                <div className="modal-content">
                    <div className="upper">
                        <br />＜COBY.＞
                    </div>
                    <div className="userinfo">
                        <p>이름 : {name}</p>
                        <p>그룹 : {group}</p>
                        <p>등급 : {grade}</p>
                        <p>기여도 : {exp}</p>
                        <button onClick={showEditModal} className="editbtn">수정</button>
                        <button onClick={onClickCheck} className="checkbtn">확인</button>
                    </div>
                    <img className="userphoto" src={profileImg} alt="profileimg"></img>
                    <div className="tier"></div>
                </div>
            </div>
            {infoEditOpen && <MyInfoEdit setModalOpen={setInfoEditModalOpen}/>}
            {infoEditOpen && <Backdrop onCancel={closeEditModal} />}
        </div>
    );
}

export default MyPageModal;
