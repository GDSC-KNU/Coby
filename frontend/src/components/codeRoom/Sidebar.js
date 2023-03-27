import React from "react";

import logo from "../../images/Coby.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const toggle = () => props.setIsOpen(!props.isOpen);

  return (
    <div>
      <div
        style={{ width: props.isOpen ? "280px" : "60px" }}
        className={styles.sidebar}
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
              <div className={styles.profile}>
              </div>
              <div className={styles.profile}>
              </div>
              <div className={styles.profile}>
              </div>
              <div className={styles.chatting}>
              </div>
            </>
          ) : (
            <div style={{ marginLeft: "0px" }}>
              <MdKeyboardArrowRight
                onClick={toggle}
                className={styles.button}
              />
              <div className={styles.profile}>
              </div>
              <div className={styles.profile}>
              </div>
              <div className={styles.profile}>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
