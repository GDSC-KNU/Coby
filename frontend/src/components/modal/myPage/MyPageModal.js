import { useState } from "react";
import Backdrop from "../../reuseUI/Backdrop";
import Layout from "../../reuseUI/Layout";
import './MyPageModal.css';


function MyPageModal(setMyPageOpen){
    
    return (
        <div>
            <Layout/>
            <div className="modal">
                <div className="modal-content">
                    <div className="upper">
                        <br />＜COBY.＞
                    </div>
                    <div className="userinfo">
                        <p><br/><br/><br/>이름 : name</p>
                        <p>그룹 : none</p>
                        <p>등급 : grade</p>
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


