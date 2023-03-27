import React from "react";
import { Route, Routes, useState} from "react-router-dom";
import "./App.css";

import MakeRoom from "./components/makeCodeRoom/MakeRoom";
import CodeRoomListPage from "./pages/CodeRoomListPage";
import CodeRoom from "./pages/CodeRoom";
import Main from "./pages/Main";
<<<<<<< HEAD
=======

>>>>>>> main


function App() {
  const [auth, setAuth] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <CodeRoomList /> */}
      {/* <CodeRoom /> */}
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Main/>} />
=======
        <Route path="/" element={<Main />} />
>>>>>>> main
        <Route path="/MakeRoom" element={<MakeRoom/>} />
        <Route path="/CodeRoomList" element={<CodeRoomListPage/>} />
        <Route path="/CodeRoom" element={<CodeRoom isOpen={isOpen} setIsOpen={setIsOpen}/>} />
      </Routes>
    </div>
  );
}

export default App;
