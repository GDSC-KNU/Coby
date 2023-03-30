import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import axios from "axios";
import Backdrop from '../../reuseUI/Backdrop';

import './LoginModal.css';
import logo from '../../../images/logo_black.png'

function Login(props) {
    const [showPswd, setShowPswd] = useState(false);
    const toggleShowPswd = () => {
        setShowPswd(!showPswd);
    }
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    //const [cookies, setCookie] = useCookies(['token', 'ref']);

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {
    axios.post('http://localhost:8080/api/login', {
        userId: inputId,
        password: inputPw,
        })
    .then((res) => {
        const {accessToken} = res.data.accessToken
        props.setCookie('ref', res.data.refreshToken)
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        alert('로그인 완료');    
    })
    .catch((error) => {
        console.log(error.response);
        return "아이디 혹은 비밀번호를 확인하세요.";
    });
    }

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
export default Login;