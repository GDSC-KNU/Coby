import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import "./App.css";

import MakeRoom from "./components/makeCodeRoom/MakeRoom";
import CodeRoomListPage from "./pages/CodeRoomListPage";
import CodeRoom from "./pages/CodeRoom";
import Main from "./pages/Main";
import PairCodeRoomListPage from "./pages/PairCodeRoomListPage";



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie] = useCookies(['token', 'ref']);
  //const [cookies, setCookie] = useState(false);
  return (
    <div>
      <CookiesProvider>
        <Routes>
          <Route path="/" element={<Main cookies={cookies} setCookie={setCookie} />} />
          <Route path="/MakeRoom" element={<MakeRoom cookies={cookies} setCookie={setCookie} />} />
          <Route path="/CodeRoom" element={<CodeRoom isOpen={isOpen} setIsOpen={setIsOpen} cookies={cookies} setCookie={setCookie} />} />
          <Route path="/CodeRoomList" element={<CodeRoomListPage cookies={cookies} setCookie={setCookie}  />} />
          <Route path="/PairCodeRoomList" element={<PairCodeRoomListPage cookies={cookies} setCookie={setCookie} />} />
        </Routes>
      </CookiesProvider>
    </div>
  );
}

export default App;
