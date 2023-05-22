import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";
import "./GroupMember.css";

import React, { useState, useEffect } from "react";
import MyGroup from "../../sevices/MyGroup";

const GroupMember = () => {
  const [groupimage, setGroupimage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [members, setMembers] = useState([]);

  useEffect(() => {
    MyGroup()
      .then((data) => {
        setMembers(data.members);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <Layout />
      <div className="outer3">
        <GroupBanner />
          <div className="group_Member_list_body">
            {/* {members.map((member) => (
              <div className="group_Member_list_item">
                <img
                  src={groupimage}
                  alt="groupImage"
                  className="groupMember_img"
                />
                <p>{member.name}</p>
                <div>{member.profileUrl}</div>
              </div>
            ))} */}
            <div className="group_Member_list_item">
              <img
                src={groupimage}
                alt="groupImage"
                className="groupMember_img"
              />
              <p>이름</p>
            </div>
            <div className="group_Member_list_item">
              <img
                src={groupimage}
                alt="groupImage"
                className="groupMember_img"
              />
              <p>이름</p>
            </div>
            <div className="group_Member_list_item">
              <img
                src={groupimage}
                alt="groupImage"
                className="groupMember_img"
              />
              <p>이름</p>
            </div>
            <div className="group_Member_list_item">
              <img
                src={groupimage}
                alt="groupImage"
                className="groupMember_img"
              />
              <p>이름</p>
            </div>
            <div className="group_Member_list_item">
              <img
                src={groupimage}
                alt="groupImage"
                className="groupMember_img"
              />
              <p>이름</p>
            </div>
            <div className="group_Member_list_item">
              <img
                src={groupimage}
                alt="groupImage"
                className="groupMember_img"
              />
              <p>이름</p>
            </div>
            <div className="group_Member_list_item">
              <img
                src={groupimage}
                alt="groupImage"
                className="groupMember_img"
              />
              <p>이름</p>
            </div>
            <div className="group_Member_list_item">
              <img
                src={groupimage}
                alt="groupImage"
                className="groupMember_img"
              />
              <p>이름</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default GroupMember;
