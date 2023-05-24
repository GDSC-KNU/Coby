import React,{useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import MakeRoom from "./components/pages/DetailPage/CodeReview/components/MakeRoom";
import CodeRoomListPage from "./components/pages/DetailPage/CodeReview/containers/CodeRoomListPage";
import CodeRoom from "./components/pages/DetailPage/CodeRoom/CodeReview/containers/CodeRoom";
import CodeRoomPair from "./components/pages/DetailPage/CodeRoom/PairProgramming/containers/CodeRoomPair";
import Main from "./components/pages/MainPages/containers/Main";
import PairCodeRoomListPage from "./components/pages/DetailPage/PairProgramming/containers/PairCodeRoomListPage";
import Nogroup from "./components/pages/DetailPage/MyGroup/containers/NoGroup";
import GroupInfo from "./components/pages/DetailPage/MyGroup/containers/GroupInfo";
import GroupBoard from "./components/pages/DetailPage/MyGroup/containers/GroupBoard";
import GroupMember from "./components/pages/DetailPage/MyGroup/containers/GroupMember";
import Write from "./components/pages/DetailPage/MyGroup/containers/BoardWirte";
import PostDetail from "./components/pages/DetailPage/MyGroup/containers/PostsDetail";
import PostsModify from "./components/pages/DetailPage/MyGroup/containers/PostsModify";
import Help from "./components/pages/DetailPage/Help/containers/Help";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(localStorage.getItem("token") ? true : false);
  }, [localStorage.getItem("token")]);

  return (
      <div>
        <Routes>
          <Route path="/" element={<Main isLogin = {isLogin} setIsLogin = {setIsLogin} />} />
          <Route path="/MakeRoom" element={<MakeRoom/>} />
          <Route path="/CodeRoom" element={<CodeRoom />} />
          <Route path="/CodeRoomPair" element={<CodeRoomPair />} />
          <Route path="/CodeRoomList" element={<CodeRoomListPage isLogin={isLogin}/>} />
          <Route path="/PairCodeRoomList" element={<PairCodeRoomListPage isLogin={isLogin}/>} />
          <Route path="/NoGroup" element={<Nogroup/>} />
          <Route path="/GroupInfo" element={<GroupInfo />}/>
          <Route path="/GroupBoard" element={<GroupBoard/>} />
          <Route path="/NoGroup" element={<Nogroup/>} />
          <Route path="/BoardWrite" element={<Write/>} />
          <Route path='/posts/:id' element = {<PostDetail/>} />
          <Route path='/posts/:id/modify' element = {<PostsModify/>} />
          <Route path="/GroupMember" element={<GroupMember/>} />
          <Route path="/Help" element={<Help/>} />
        </Routes>
      </div>
  );
}

export default App;
