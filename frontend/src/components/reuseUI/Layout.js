import React from "react";

import Header from "./Header";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="layout">
      <Header cookies = {props.cookies} setCookie = {props.setCookie} />
    </div>
  );
}

export default Layout;
