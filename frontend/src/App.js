import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import MakeRoom from "./components/makeCodeRoom/MakeRoom";
import CodeRoomListPage from "./pages/CodeRoomListPage";
import CodeRoom from "./pages/CodeRoom";
import CodeRoomPair from "./pages/CodeRoomPair";
import Main from "./pages/Main";
import PairCodeRoomListPage from "./pages/PairCodeRoomListPage";
import Nogroup from "./pages/MyGroup/NoGroup";
import GroupInfo from "./pages/MyGroup/GroupInfo";
import GroupBoard from "./pages/MyGroup/GroupBoard";
import GroupMember from "./pages/MyGroup/GroupMember";
import Write from "./pages/MyGroup/BoardWirte";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MakeRoom" element={<MakeRoom />} />
        <Route path="/CodeRoom" element={<CodeRoom />} />
        <Route path="/CodeRoomPair" element={<CodeRoomPair />} />
        <Route path="/CodeRoomList" element={<CodeRoomListPage />} />
        <Route path="/PairCodeRoomList" element={<PairCodeRoomListPage />} />
        <Route path="/NoGroup" element={<Nogroup />} />
        <Route path="/GroupInfo" element={<GroupInfo />} />
        <Route path="/GroupBoard" element={<GroupBoard />} />
        <Route path="/NoGroup" element={<Nogroup />} />
        <Route path="/BoardWrite" element={<Write />} />
        <Route path="/GroupMember" element={<GroupMember />} />
      </Routes>
    </div>
  );
}

export default App;
