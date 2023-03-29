import React from "react";

import logo from "../../images/Coby.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const toggle = () => props.setIsOpen(!props.isOpen);

  return (
    <div className={styles.out}>
      <div
        style={{ width: props.isOpen ? "280px" : "60px" }}
        className={styles.sidebar1}
      >
        <div>
          <img
            src={logo}
            alt="로고"
            className={styles.logo}
            style={{ display: props.isOpen ? "block" : "none" }}
          />
          {props.isOpen ? (
            <>
              <div style={{ marginLeft: "240px" }}>
                <MdKeyboardArrowLeft onClick={toggle} className={styles.button} />
              </div>
              <div className={styles.profile} style = {{ background : "blue"}}>
                <p className={styles.name}>철수</p>
              </div>
              <div className={styles.profile} style = {{ background : "red"}}>
              <p className={styles.name}>영희</p>
              </div>
              <div className={styles.chatting}>
                <p className={styles.font}>
                  철수 : 안녕하세요. 저는 철수입니다.
                </p>
                <p className={styles.font}>
                  영희 : 안녕하세요. 저는 영희입니다.
                </p>
                <p className={styles.font}>
                  철수 : 저는 당신의 코드를 도와드리고 싶어요.
                </p>
                <p className={styles.font}>
                  영희 : 감사합니다.
                </p>
              </div>
            </>
          ) : (
            <div style={{ marginLeft: "0px" }}>
              <MdKeyboardArrowRight
                onClick={toggle}
                className={styles.button}
              />
              <div className={styles.profile} style = {{ background : "blue"}}>
              </div>
              <div className={styles.profile} style = {{ background : "red"}}>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;