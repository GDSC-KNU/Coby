import Layout from "../../components/reuseUI/Layout";
import GroupBanner from "./GroupBanner";
import styles from "./GroupMember.module.css";
import person from "../../images/person.png";
import logo from '../../images/minilogo.png'
import crown from '../../images/crown1.png'

import React, { useState, useEffect } from "react";
import MyGroup from "../../sevices/MyGroup";

const GroupMember = () => {
    const [groupimage, setGroupimage] = useState(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    );
    const [members, setMembers] = useState([]);
    const [createdBy, setCreatedBy] = useState("");

    useEffect(() => {
        MyGroup()
            .then((data) => {
                setCreatedBy(data.createdBy);
                setMembers(data.members);
                console.log(members)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div className={styles.outer}>
            <Layout />
            <GroupBanner />
            <div className={styles.group_Member_list_body}>
                {members.map((member) => (
                    member.profileUrl ?
                        (member.userId === createdBy ?
                        <div className={styles.group_Member_list_item}>
                                <img
                                    src={member.profileUrl}
                                    alt="groupImage"
                                    className={styles.groupMember_img}
                                />
                            <p className={styles.member_name}>{member.name}<img src={crown} alt='bossImg' className={styles.crown}></img></p>
                                <p className={styles.member_point}><img src={logo} alt="logo"></img>{member.exp_point}</p>
                        </div>
                            :
                            <div className={styles.group_Member_list_item}>
                                <img
                                    src={member.profileUrl}
                                    alt="groupImage"
                                    className={styles.groupMember_img}
                                />
                                <p className={styles.member_name}>{member.name}</p>
                                <p className={styles.member_point}><img src={logo} alt="logo"></img>{member.exp_point}</p>
                            </div>)
                        :
                        (member.userId === createdBy ?
                        <div className={styles.group_Member_list_item}>
                            <img
                                src={person}
                                alt="groupImage"
                                className={styles.groupMember_img}
                            />
                            <p className={styles.member_name}>{member.name}<img src={crown} alt='bossImg' className={styles.crown}></img></p>
                            <p className={styles.member_point}><img src={logo} alt="logo"></img>{member.exp_point}</p>
                        </div>
                            :
                            <div className={styles.group_Member_list_item}>
                                <img
                                    src={person}
                                    alt="groupImage"
                                    className={styles.groupMember_img}
                                />
                                <p className={styles.member_name}>{member.name}</p>
                                <p className={styles.member_point}><img src={logo} alt="logo"></img>{member.exp_point}</p>
                            </div>
                        )
                ))}
            </div>
        </div>
    );
};

export default GroupMember;
