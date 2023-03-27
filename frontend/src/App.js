import React, { useState } from "react";
import { Route, Routes} from "react-router-dom";
import "./App.css";

import MakeRoom from "./components/makeCodeRoom/MakeRoom";
import CodeRoomListPage from "./pages/CodeRoomListPage";
import CodeRoom from "./pages/CodeRoom";
import Main from "./pages/Main";
import MyPageModal from "./components/modal/myPage/MyPageModal";



function App() {
  const [auth, setAuth] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <CodeRoomList /> */}
      {/* <CodeRoom /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MakeRoom" element={<MakeRoom/>} />
        <Route path="/CodeRoomList" element={<CodeRoomListPage/>} />
        <Route path="/MyPage" element={<MyPageModal isOpen={isOpen} setIsOpen={setIsOpen}/>} />
        <Route path="/CodeRoom" element={<CodeRoom isOpen={isOpen} setIsOpen={setIsOpen}/>} />
      </Routes>
    </div>
  );
}

export default App;
