import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Login from '../../../sevices/Login';
import Backdrop from '../../reuseUI/Backdrop';

import './LoginModal.css';
import logo from '../../../images/logo_black.png'

function LoginModal(props) {
    const navigate = useNavigate();
    const [showPswd, setShowPswd] = useState(false);
    const toggleShowPswd = () => {
        setShowPswd(!showPswd);
    }
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')


    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = async (event) => {
        event.preventDefault();
        try {
            const token = await Login(inputId, inputPw);
            localStorage.setItem("token", token.accessToken);
            window.location.reload();
            window.alert("로그인 성공")
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    };

    return (
        <div className="container">
            <div>
                <img src={logo} alt="로고" className="logo-login" />
            </div>
            <div className="form">
                <p>아이디</p>
                <input className="input" type='text' name='input_id' value={inputId} onChange={handleInputId}></input>
                <p>비밀번호</p>
                <input className="input" type={showPswd ? "text" : "password"} name='input_pw' value={inputPw} onChange={handleInputPw}></input>
                    {showPswd ? (
                    <AiFillEyeInvisible onClick={toggleShowPswd} className="icon"/>
                    ) : (
                    <AiFillEye onClick={toggleShowPswd} className="icon"/>
                    )}
            </div>
            <div className="bottom">
                <button className="find_botton">아이디 찾기</button>
                <button className="find_botton">비밀번호 찾기</button>
                <button className="button" onClick={onClickLogin}>로그인</button>
            </div>
        </div>
    );
}
export default LoginModal;