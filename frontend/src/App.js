import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState,useEffect } from 'react';
import "./App.css";

import Main from "./pages/Main";
import CodeRoomList from "./pages/CodeRoomList";
import CodeRoom from "./pages/CodeRoom";

function App() {
  const [auth, setAuth] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <CodeRoomList /> */}
      {/* <CodeRoom /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CodeRoomList" element={<CodeRoomList />} />
        <Route path="/CodeRoom" element={<CodeRoom isOpen={isOpen} setIsOpen={setIsOpen}/>} />
      </Routes>
    </div>
  );
}

export default App;
