import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Login from "../../../sevices/Login";

import styles from "./LoginModal.module.css";
import logo from "../../../images/logo_black.png";

function LoginModal(props) {
    const [showPswd, setShowPswd] = useState(false);
    const toggleShowPswd = () => {
        setShowPswd(!showPswd);
    };
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };
    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    const onClickLogin = async (event) => {
        event.preventDefault();
        try {
            const token = await Login(inputId, inputPw);
            localStorage.setItem("token", token.accessToken);
            window.location.reload();
            window.alert("로그인 성공");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <div>
                <img src={logo} alt="로고" className={styles.logo_login} />
            </div>
            <div className={styles.form}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="아이디"
                    name="input_id"
                    value={inputId}
                    onChange={handleInputId}
                />
            </div>
            <div className={styles.form}>
                <input
                    className={styles.input}
                    type={showPswd ? "text" : "password"}
                    placeholder="비밀번호"
                    name="input_pw"
                    value={inputPw}
                    onChange={handleInputPw}
                />
                {showPswd ? (
                    <AiFillEye
                        onClick={toggleShowPswd}
                        className={styles.icon}
                    />
                ) : (
                    <AiFillEyeInvisible onClick={toggleShowPswd} className={styles.icon} />
                )}
            </div>
            <div className={styles.bottom}>
                {/* <button className={styles.find_botton}>아이디 찾기</button>
                <button className={styles.find_botton}>비밀번호 찾기</button> */}
                <button className={styles.button} onClick={onClickLogin}>
                    로그인
                </button>
            </div>
        </div>
    );
}
export default LoginModal;