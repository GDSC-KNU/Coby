import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';
import Detailget from "../../../sevices/Detailget";
import PostsModify from "./PostsModify";
import DeleteWrite from "../../../sevices/DeleteWrite";
import Layout from '../../../components/reuseUI/Layout'
import moment from 'moment'

import styles from './PostsDetail.module.css'

const PostDetail = () => {
    const navigate = useNavigate();
    let {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Detailget(id).then((data) => {
            setPosts(data);
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

    return(
        <div className={styles.outer}>
            <Layout/>
            <div className={styles.upper}>
                <p className={styles.post_title}>{posts.title?posts.title:null}</p>
                <p className={styles.post_writer}>{posts.createdBy}</p>
                <p className={styles.post_time}>{moment(posts.createdAt).format('MMMM Do YYYY')}</p>
            </div>
            <div className={styles.bottom}>
                <p>{posts.content?ReactHtmlParser(posts.content):null}</p>
            </div>
            <div className={styles.btn}>
                <button onClick={listClickHandler} className={styles.list_btn}>목록</button>
                <button className={styles.btn1} onClick={modify}>수정</button>
                <button className={styles.btn1} onClick={remove}>삭제</button>
            </div>
        </div>

    );
};

export default PostDetail;