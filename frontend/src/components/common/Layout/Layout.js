import React from "react";

import Header from "./Header";
import "./css/Layout.css";

function Layout(props) {
    return (
        <div className="layout">
            <Header isLogin={props.isLogin} setIsLogin={props.setIsLogin}/>
        </div>
    );
}

export default Layout;
