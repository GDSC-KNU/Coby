import styles from '../css/SigninModal.module.css';
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import signUp from "../../../../../sevices/signUp";

function SignIn({ setModalOpen }) {

    const [showPswd, setShowPswd] = useState(false);
    const [showPswdTrue, setShowPswdTrue] = useState(false);
    const [newId, setNewId] = useState('')
    const [newName, setNewName] = useState('')
    const [newPw, setNewPw] = useState('')
    const [newPwC, setNewPwC] = useState('')

    const toggleShowPswd1 = () => {
        setShowPswd(!showPswd);
    }

    const toggleShowPswd2 = () => {
        setShowPswdTrue(!showPswdTrue);
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


    const onclickSignin = async () => {
        try {
            const sign = await signUp(newId, newPw, newName);
            alert("회원가입 완료");
            console.log(sign);
            window.location.reload();
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    }

    return (
        <div className={styles.container1}>
            <div className={styles.form1}>
                <p>아이디</p>
                <input  type='text' name='input_id' value={newId} onChange={handleNewId} />
                <p>이름</p>
                <input  type='text' name='input_name' value={newName} onChange={handleNewName} />
                <p>비밀번호</p>
                <input  type={showPswd ? "text" : "password"} name='input_pw' value={newPw} onChange={handleNewPw}></input>
                {showPswd ? (
                    <AiFillEye onClick={toggleShowPswd1} className={styles.icon}/>
                ) : (
                    <AiFillEyeInvisible onClick={toggleShowPswd1} className={styles.icon}/>
                )}
                <p>비밀번호 확인</p>
                <input type={showPswd ? "text" : "password"}  name='input_pwc' value={newPwC} onChange={handleNewPwC}></input>
                {showPswdTrue ? (
                    <AiFillEye onClick={toggleShowPswd2} className={styles.icon}/>
                ) : (
                    <AiFillEyeInvisible onClick={toggleShowPswd2} className={styles.icon}/>
                )}
                <button className={styles.button1} onClick={onclickSignin}>회원가입</button>
            </div>
        </div>
    );
}
export default SignIn;