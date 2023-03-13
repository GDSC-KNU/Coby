import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";


import CodeRoomListPage from "./pages/CodeRoomListPage";
import CodeRoom from "./pages/CodeRoom";



function App() {
  return (
    <div>
      {/* <CodeRoomList /> */}
      {/* <CodeRoom /> */}
      <Routes>
        <Route path="/CodeRoomList" element={<CodeRoomListPage/>} />
        <Route path="/CodeRoom" element={<CodeRoom />} />
      </Routes>
    </div>
  );
}

export default App;
