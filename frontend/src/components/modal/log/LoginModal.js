import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import Axios from "axios";
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
        alert('로그인 완료');
        props.setCookie(true);
    /*Axios.post('http://localhost:8080/api/login', {
        userId: inputId,
        password: inputPw,
        })
    .then(res => {
        props.setCookie('token', res.payload.accessToken)
        props.setCookie('ref', res.payload.refreshToken)
        // token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
        Axios.defaults.headers.common['Authorization'] = `Bearer ${res.payload.accessToken}`
        })*/
    }

    return (
        <div className="container">
            <div>
                <img src={logo} alt="로고" className="logo" />
            </div>
            <div className="form">
                <p>이메일</p>
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