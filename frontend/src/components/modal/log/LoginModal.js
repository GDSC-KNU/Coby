import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye} from "react-icons/ai";

import './LoginModal.css';
import logo from '../../../images/logo_black.png'

function Login({ setModalOpen}) {
    const [showPswd, setShowPswd] = useState(false);
    const toggleShowPswd = () => {
        setShowPswd(!showPswd);
    }

    return (
        <div className="container">
            <div>
                <img src={logo} alt="로고" className="logo" />
            </div>
            <div className="form">
                <p>이메일</p>
                <input className="input"></input>
                <p>비밀번호</p>
                <input className="input" type={showPswd ? "text" : "password"}></input>
                    {showPswd ? (
                    <AiFillEyeInvisible onClick={toggleShowPswd} className="icon"/>
                    ) : (
                    <AiFillEye onClick={toggleShowPswd} className="icon"/>
                    )}
            </div>
            <div className="bottom">
                <button className="find_botton">아이디 찾기</button>
                <button className="find_botton">비밀번호 찾기</button>
                <button className="button">로그인</button>
            </div>
        </div>
    );
}
export default Login;