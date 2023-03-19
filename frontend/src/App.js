import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main";
import CodeRoomList from "./pages/CodeRoomList";
import CodeRoom from "./pages/CodeRoom";

function App() {
  return (
    <div>
      {/* <CodeRoomList /> */}
      {/* <CodeRoom /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CodeRoomList" element={<CodeRoomList />} />
        <Route path="/CodeRoom" element={<CodeRoom />} />
      </Routes>
    </div>
  );
}

export default App;
