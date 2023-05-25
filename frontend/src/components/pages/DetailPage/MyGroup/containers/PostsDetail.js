import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';

import person from '../../../images/person.png';

import MyGroup from "../../../sevices/MyGroup";
import MyPage from "../../../sevices/MyPage";
import Detailget from "../../../sevices/Detailget";
import DeleteWrite from "../../../sevices/DeleteWrite";
import Layout from '../../../components/reuseUI/Layout'
import moment from 'moment'

import styles from './PostsDetail.module.css'

const PostDetail = () => {
    const navigate = useNavigate();
    let {id} = useParams();
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState('');
    const [members, setMembers] = useState([]);
    const [profileImg, setProfileImg] = useState(person);

    useEffect(() => {
        Detailget(id).then((data) => {
            setPosts(data);
        }).catch((err) => {
            console.log(err.message);
        });
        MyGroup()
        .then((data) => {
            setMembers(data.members);
        })
        .catch((err) => {
            console.log(err.message);
        });
        MyPage().then((data) => {
            setUserId(data.userId)
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

  

    const modify = () => {
        navigate(`/posts/${id}/modify`);
    }

    const listClickHandler = () => {
        navigate('/groupBoard')
    }

    const remove = () => {
        try {
            DeleteWrite(id).then((data) => {
                alert("삭제 완료!");
                navigate(`/groupboard`);
            });
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    }

    members.map((member) => (
        member.userId === posts.createdBy ?
            member.profileUrl ?
                setProfileImg(member.profileUrl) :
                setProfileImg(person)
            : null
    ))


    return(
        <div className={styles.outer}>
            <Layout/>
            <div className={styles.upper}>
                <p className={styles.post_title}>{posts.title}</p>
                <div className={styles.writeInfo}>
                    <img src={profileImg} alt="profileImg" className={styles.profileImg}></img>
                    <p className={styles.post_writer}>{posts.createdBy}</p>
                    <p className={styles.post_time}>{moment(posts.createdAt).format('MMMM Do YYYY')}</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>{posts.content?ReactHtmlParser(posts.content):null}</p>
            </div>
            {userId === posts.createdBy ?
            <div className={styles.btn}>
                <button onClick={listClickHandler} className={styles.list_btn}>목록</button>
                <button className={styles.btn1} onClick={modify}>수정</button>
                <button className={styles.btn1} onClick={remove}>삭제</button>
            </div>
            :
            <div className={styles.btn}>
                <button onClick={listClickHandler} className={styles.list_btn}>목록</button>
            </div>
            }   
        </div>

    );
};

export default PostDetail;