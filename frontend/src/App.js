import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import MakeRoom from "./components/makeCodeRoom/MakeRoom";
import CodeRoomListPage from "./pages/CodeRoomListPage";
import CodeRoom from "./pages/CodeRoom";
import Main from "./pages/Main";



function App() {
  return (
    <div>
      {/* <CodeRoomList /> */}
      {/* <CodeRoom /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MakeRoom" element={<MakeRoom/>} />
        <Route path="/CodeRoomList" element={<CodeRoomListPage/>} />
        <Route path="/CodeRoom" element={<CodeRoom />} />
      </Routes>
    </div>
  );
}

export default App;
