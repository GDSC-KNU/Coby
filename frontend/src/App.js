import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";


import CodeRoomList from "./pages/CodeRoomList";


function App() {
  return (
    <div>
      {/* <CodeRoomList /> */}
      
      <Routes>
        <Route path="/CodeRoomList" element={<CodeRoomList />} />
      </Routes>
    </div>
  );
}

export default App;
