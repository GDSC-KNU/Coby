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
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  return (
    <div>
        <Routes>
          <Route path="/" element={<Main cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}/>} />
          <Route path="/MakeRoom" element={<MakeRoom cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}/>} />
          <Route path="/CodeRoom" element={<CodeRoom isOpen={isOpen} setIsOpen={setIsOpen} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}/>} />
          <Route path="/CodeRoomList" element={<CodeRoomListPage cookies={cookies} setCookie={setCookie}  removeCookie={removeCookie}/>} />
          <Route path="/PairCodeRoomList" element={<PairCodeRoomListPage cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}/>} />
        </Routes>
    </div>
  );
}

export default App;
