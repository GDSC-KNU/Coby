import React, { useState } from 'react';
import logo from '../images/logo.png';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";
import styles from "./sidebar.module.css";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen); 

    return (
        <div>
           <div style={{width: isOpen ? "280px" : "50px"}} className={styles.sidebar}>
           <div>
                <img src={logo} alt="로고" className={styles.logo} style={{display: isOpen ? "block" : "none"}}/>
                {isOpen ?
                    <div style={{marginLeft:"240px"}}>
                        <MdKeyboardArrowLeft  onClick={toggle} className={styles.button}/>
                    </div>
                :
                    <div style={{marginLeft:"0px"}}>
                        <MdKeyboardArrowRight onClick={toggle} className={styles.button}/>
                    </div>
                }
           </div>
           </div>
        </div>
    );
};

export default Sidebar;