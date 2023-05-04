import React from "react";

import logo from "../../images/Coby.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const toggle = () => props.setIsOpen(!props.isOpen);

  return (
    <div className={styles.out}>
      <div
        style={{ width: props.isOpen ? "350px" : "60px" }}
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
              <div style={{ marginLeft: "310px" }}>
                <MdKeyboardArrowLeft
                  onClick={toggle}
                  className={styles.button}
                />
              </div>
              {/* <div className={styles.profile} style={{ background: "blue" }}>
                <p className={styles.name}>철수</p>
              </div>
              <div className={styles.profile} style={{ background: "red" }}>
                <p className={styles.name}>영희</p>
              </div> */}
            </>
          ) : (
            <div style={{ marginLeft: "0px" }}>
              <MdKeyboardArrowRight
                onClick={toggle}
                className={styles.button}
              />
              <div
                className={styles.profile}
                style={{ background: "blue" }}
              ></div>
              <div
                className={styles.profile}
                style={{ background: "red" }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
