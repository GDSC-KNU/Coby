import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye} from "react-icons/ai";

import styles from './FindIdModal.css';
import logo from '../../../images/logo_black.png'

function Findid({ setModalOpen}) {
    return (
        <div className={styles.container}>
            아이디찾기
        </div>
    );
}
export default Findid;