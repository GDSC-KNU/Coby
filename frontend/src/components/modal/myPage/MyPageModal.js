import { useState, useEffect } from "react";
import Backdrop from "../../reuseUI/Backdrop";
import Layout from "../../reuseUI/Layout";
import MyPage from "../../../sevices/MyPage";
import './MyPageModal.css';


function MyPageModal(setMyPageOpen){
    const [name,setName] = useState('');
    const [group,setGroup] = useState('');
    const [exp, setExp] = useState('');
    const [grade, setGrade] = useState('');

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
            setGroup(data.group);
            setExp(data.exp_point);
            checkGrade(data.exp_point);
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
                        <p><br/><br/><br/>이름 : {name}</p>
                        <p>그룹 : {group}</p>
                        <p>등급 : {grade}</p>
                        <p>기여도 : {exp}</p>
                    </div>
                    <div className="userphoto"></div>
                    <div className="tier"></div>
                </div>
            </div>
        </div>
    );
}

export default MyPageModal;


