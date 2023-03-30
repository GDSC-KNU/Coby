import { useState, useEffect } from "react";
import Backdrop from "../../reuseUI/Backdrop";
import Layout from "../../reuseUI/Layout";
import Axios from "axios";
import './MyPageModal.css';


function MyPageModal(setMyPageOpen){
    const [name,setName] = useState('');
    const [group,setGroup] = useState('');
    const [grade, setGrade] = useState('');

    useEffect(() => {
        Axios.get(`http://localhost:8080/api/users/myinfo`)
            .then((res) => {
                setName(res.data.name);
                setGroup(res.data.group);
                setGrade(res.data.exp_point);
            })
            .catch((err) => {
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
                        <p>기여도 : 0000</p>
                    </div>
                    <div className="userphoto"></div>
                    <div className="tier"></div>
                </div>
            </div>
        </div>
    );
}

export default MyPageModal;


