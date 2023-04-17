import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import MakeRoom from "./components/makeCodeRoom/MakeRoom";
import CodeRoomListPage from "./pages/CodeRoomListPage";
import CodeRoom from "./pages/CodeRoom";
import Main from "./pages/Main";
import PairCodeRoomListPage from "./pages/PairCodeRoomListPage";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/MakeRoom" element={<MakeRoom/>} />
          <Route path="/CodeRoom" element={<CodeRoom isOpen={isOpen} setIsOpen={setIsOpen} />} />
          <Route path="/CodeRoomList" element={<CodeRoomListPage/>} />
          <Route path="/PairCodeRoomList" element={<PairCodeRoomListPage/>} />
        </Routes>
    </div>
  );
}

export default App;
