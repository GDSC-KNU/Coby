import './SigninModal.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import Axios from "axios";

function SignIn({ setModalOpen}) {
    const navigate = useNavigate();

    const [showPswd, setShowPswd] = useState(false);
    const [newId, setNewId] = useState('')
    const [newName, setNewName] = useState('')
    const [newPw, setNewPw] = useState('')
    const [newPwC, setNewPwC] = useState('')

    const toggleShowPswd = () => {
        setShowPswd(!showPswd);
    }

    const handleNewId = (e) => {
        setNewId(e.target.value)
    }
    const handleNewPw = (e) => {
        setNewPw(e.target.value)
    }
    const handleNewPwC = (e) => {
        setNewPwC(e.target.value)
    }
    const handleNewName = (e) => {
        setNewName(e.target.value)
    }
    const onclickSignin = () => {
        alert('회원가입 완료');
        /*Axios.post('http://localhost:8000/insert', {
            id: newId,
            pw: newPw,
            name: newName,
          }).then(()=>{
            alert('등록 완료!');
          })*/
    }

    return (
        <div className="container1">
            <div className="form1">
                <p>이메일</p>
                <input className="input1" type='text' name='input_id' value={newId} onChange={handleNewId} />
                <p>이름</p>
                <input className="input1" type='text' name='input_name' value={newName} onChange={handleNewName} />
                <p>비밀번호</p>
                <input className="input1" type={showPswd ? "text" : "password"} name='input_pw' value={newPw} onChange={handleNewPw}></input>
                    {showPswd ? (
                    <AiFillEyeInvisible onClick={toggleShowPswd} className="icon"/>
                    ) : (
                    <AiFillEye onClick={toggleShowPswd} className="icon"/>
                    )}
                <p>비밀번호 확인</p>
                <input className="input1" type={showPswd ? "text" : "password"}  name='input_pwc' value={newPwC} onChange={handleNewPwC}></input>
                    {showPswd ? (
                    <AiFillEyeInvisible onClick={toggleShowPswd} className="icon"/>
                    ) : (
                    <AiFillEye onClick={toggleShowPswd} className="icon"/>
                    )}
                <button className="button1" onClick={onclickSignin}>회원가입</button>
            </div>
        </div>
    );
}
export default SignIn;