import './SigninModal.css';
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye} from "react-icons/ai";

function SignIn({ setModalOpen}) {
    const [showPswd, setShowPswd] = useState(false);
    const toggleShowPswd = () => {
        setShowPswd(!showPswd);
    }

    return (
        <div className="container1">
            <div className="form1">
                <p>이메일</p>
                <input className="input1"></input>
                <p>이름</p>
                <input className="input1"></input>
                <p>비밀번호</p>
                <input className="input1" type={showPswd ? "text" : "password"}></input>
                    {showPswd ? (
                    <AiFillEyeInvisible onClick={toggleShowPswd} className="icon"/>
                    ) : (
                    <AiFillEye onClick={toggleShowPswd} className="icon"/>
                    )}
                <p>비밀번호 확인</p>
                <input className="input1" type={showPswd ? "text" : "password"}></input>
                    {showPswd ? (
                    <AiFillEyeInvisible onClick={toggleShowPswd} className="icon"/>
                    ) : (
                    <AiFillEye onClick={toggleShowPswd} className="icon"/>
                    )}
                <button className="button1">회원가입</button>
            </div>
        </div>
    );
}
export default SignIn;