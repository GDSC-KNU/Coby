import { useState, useEffect } from "react";
import Layout from "../../reuseUI/Layout";
import './MyPageModal.css';
import MyPage from "../../../sevices/MyPage";
import MyInfoEdit from "../myInfoEdit/myInfoEdit";
import Backdrop from "../../reuseUI/Backdrop";
import pencil from '../../../images/pencil.png';
import person from '../../../images/person.png';

function MyPageModal(props){
    const [profileImg, setProfileImg] = useState();
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
            data.profileUrl ?
                setProfileImg(data.profileUrl) :
                setProfileImg(person);
            checkGrade(exp);
        }).catch((err) => {
            console.log('마이페이지 수정 모달 불러오기 실패');
        });
    }, []);

    return (
        <div>
            <Layout/>
            <div className="modal1">
                <div className="modal-content1">
                    <div className="upper1">
                        <br />＜COBY.＞
                    </div>
                    <div className="userinfo1">
                        <div className="userinfo2">
                            <p>이름 : {name}</p>
                            <p>그룹 : {group}</p>
                            <p>등급 : {grade}</p>
                            <p>기여도 : {exp}</p>
                        </div>
                        <button onClick={showEditModal} className="editbtn">수정</button>
                        <button onClick={onClickCheck} className="checkbtn">확인</button>
                    </div>
                    <img className="userphoto" src={profileImg} alt="profileimg"></img>
                    <div className="tier"></div>
                </div>
            </div>
            {infoEditOpen && <MyInfoEdit setModalOpen={setInfoEditModalOpen} isLogin={props.isLogin}/>}
            {infoEditOpen && <Backdrop onCancel={closeEditModal} />}
        </div>
    );
}

export default MyPageModal;
