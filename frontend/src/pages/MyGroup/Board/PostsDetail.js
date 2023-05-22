import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';


import Detailget from "../../../sevices/Detailget";
import DeleteWrite from "../../../sevices/DeleteWrite";
import PostsModify from "./PostsModify";

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
        <div>
            <div className="detail-post">
              <h2 className="in">{posts.title?posts.title:null}</h2>
              <p className="in">{posts.content?ReactHtmlParser(posts.content):null} {posts.createdAt}</p>
            </div>
            <div className="detail-btn">
                <button className="detail-btn1" onClick={modify}>수정</button>
                <button className="detail-btn2" onClick={remove}>삭제</button>
            </div>
        </div>
        
    );
};

export default PostDetail;