import Layout from "../../../../../components/common/Layout/Layout";
import GroupBanner from "../../../../../components/pages/DetailPage/MyGroup/containers/GroupBanner";
import styles from "../css/GroupMember.module.css";
import person from '../../../../../assets/person.png';
import logo from '../../../../../assets/minilogo.png'
import medal from '../../../../../assets/medal.png'
import crown from '../../../../../assets/crown2.png'

import React, { useState, useEffect } from "react";
import MyGroup from "../../../../../sevices/MyGroup";

const GroupMember = () => {
    const [members, setMembers] = useState([]);
    const [createdBy, setCreatedBy] = useState("");

    function checkGrade(exp) {
        if (exp < 1000) {
            return 'Bronze';
        } else if (exp<2000) {
            return 'Silver';
        } else if (exp<3000) {
            return 'Gold';
        }
        else{
            return 'Platinum';
        }
    }

    const leaders = members.filter((member) => member.userId === createdBy);
    const others = members.filter((member) => member.userId !== createdBy);
    
    return (
        <div className={styles.outer}>
            <Layout />
            <GroupBanner />
            <div className={styles.group_Member_list_body}>
                {leaders.map((leader) => (
                    leader.profileUrl ?
                        <div className={styles.group_Member_list_item}>
                            <div className={styles.member_first}>
                                <img src={leader.profileUrl} alt="groupImage" className={styles.groupLeader_img} />
                            </div>
                            <div className={styles.member_second}>
                                <p className={styles.member_name}>{leader.name} <img src={crown} alt="crown"></img></p>
                            </div>
                            <div className={styles.member_third}>
                                <p className={styles.member_grade}><img src={medal} alt="medal"></img>{checkGrade(leader.exp_point)}</p>
                            </div>
                            <div className={styles.member_fourth}>
                                <p className={styles.member_point}><img src={logo} alt="logo"></img>{leader.exp_point}</p>
                            </div>
                        </div>
                        :
                        <div className={styles.group_Member_list_item}>
                            <div className={styles.member_first}>
                                <img src={person} alt="groupImage" className={styles.groupLeader_img} />
                            </div>
                            <div className={styles.member_second}>
                                <p className={styles.member_name}>{leader.name} <img src={crown} alt="crown"></img></p>
                            </div>
                            <div className={styles.member_third}>
                                <p className={styles.member_grade}><img src={medal} alt="medal"></img>{checkGrade(leader.exp_point)}</p>
                            </div>
                            <div className={styles.member_fourth}>
                                <p className={styles.member_point}><img src={logo} alt="logo"></img>{leader.exp_point}</p>
                            </div>
                        </div>
                ))}
                {others.map((member) => (
                    member.profileUrl ?
                         <div className={styles.group_Member_list_item}>
                            <div className={styles.member_first}>
                                <img src={member.profileUrl} alt="groupImage" className={styles.groupMember_img} />
                            </div>
                            <div className={styles.member_second}>
                                <p className={styles.member_name}>{member.name}</p>
                            </div>
                            <div className={styles.member_third}>
                                <p className={styles.member_grade}><img src={medal} alt="medal"></img>{checkGrade(member.exp_point)}</p>
                            </div>
                            <div className={styles.member_fourth}>
                                <p className={styles.member_point}><img src={logo} alt="logo"></img>{member.exp_point}</p>
                            </div>
                        </div>
                        :
                        <div className={styles.group_Member_list_item}>
                            <div className={styles.member_first}>
                                <img src={person} alt="groupImage" className={styles.groupMember_img} />
                            </div>
                            <div className={styles.member_second}>
                                <p className={styles.member_name}>{member.name}</p>
                            </div>
                            <div className={styles.member_third}>
                                <p className={styles.member_grade}><img src={medal} alt="medal"></img>{checkGrade(member.exp_point)}</p>
                            </div>
                            <div className={styles.member_fourth}>
                                <p className={styles.member_point}><img src={logo} alt="logo"></img>{member.exp_point}</p>
                            </div>
                        </div>
                ))}
                {/*
                <div className={styles.group_Member_list_item}>
                    <div className={styles.member_first}>
                        <img src={person} alt="groupImage" className={styles.groupLeader_img} />
                    </div>
                    <div className={styles.member_second}>
                        <p className={styles.member_name}>김민수 <img src={crown} alt="crown"></img></p>
                    </div>
                    <div className={styles.member_third}>
                        <p className={styles.member_grade}><img src={medal} alt="medal"></img>Gold</p>
                    </div>
                    <div className={styles.member_fourth}>
                        <p className={styles.member_point}><img src={logo} alt="logo"></img>2000</p>
                    </div>
                </div>
                <div className={styles.group_Member_list_item}>
                    <div className={styles.member_first}>
                        <img src={person} alt="groupImage" className={styles.groupLeader_img} />
                    </div>
                    <div className={styles.member_second}>
                        <p className={styles.member_name}>김민수 <img src={crown} alt="crown"></img></p>
                    </div>
                    <div className={styles.member_third}>
                        <p className={styles.member_grade}><img src={medal} alt="medal"></img></p>
                    </div>
                    <div className={styles.member_fourth}>
                        <p className={styles.member_point}><img src={logo} alt="logo"></img>0</p>
                    </div>
                </div>
                <div className={styles.group_Member_list_item}>
                    <div className={styles.member_first}>
                        <img src={person} alt="groupImage" className={styles.groupLeader_img} />
                    </div>
                    <div className={styles.member_second}>
                        <p className={styles.member_name}>김민수 <img src={crown} alt="crown"></img></p>
                    </div>
                    <div className={styles.member_third}>
                        <p className={styles.member_grade}><img src={medal} alt="medal"></img>Platinum</p>
                    </div>
                    <div className={styles.member_fourth}>
                        <p className={styles.member_point}><img src={logo} alt="logo"></img>4520</p>
                    </div>  
                </div>
                */}
            </div>
        </div>
    );
};

export default GroupMember;