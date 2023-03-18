import React, { useState } from "react";

import Layout from "../components/reuseUI/Layout";
import MakeRoom from "../components/makeCodeRoom/MakeRoom";


import "./CodeRoomListPage.css";


function CodeRoomListPage(props) {
 

  const DUMMY_DATA = [
    {
      id: "e1",
      title: "동적 할당 관련 질문있습니다.",
      language: "C++",
      tool: "Visual Studio Code",
    },
    {
      id: "e2",
      title: "왜 안 돌아감?",
      language: "JAVA",
      tool: "Visual Studio Code"
    },
    {
      id: "e3",
      title: "코드에 관해서",
      language: "Python",
      tool: "Visual Studio Code"
    }
  ];

  const [makeRooms, setMakeRooms] = useState(DUMMY_DATA);

  const addRoomHandler = (makeRoom) => {
    setMakeRooms((prevMakeRooms) => {
      return [makeRoom, ...prevMakeRooms];
    });
  };

  return (
    <div>
      <Layout />
      <MakeRoom items={makeRooms} />
        
    </div>
  );
}

export default CodeRoomListPage;
