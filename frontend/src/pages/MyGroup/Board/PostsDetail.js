import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ReactHtmlParser from 'html-react-parser';
import Detailget from "../../../sevices/Detailget";

const PostDetail = () => {
    let {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Detailget(id).then((data) => {
            setPosts(data);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);


    /*
        useEffect(() => {
            Writeget().then((data) => {
                setPosts(data);
            }).catch((err) => {
                console.log(err.message);
            });
        }, []);*/

    const modify = () => {
        alert("수정");
    }

    const remove = () => {
        alert("삭제");
    }

    return(
        <div>
            <div className="detail-post">
                <h2 className="in">{posts.title?posts.title:null}</h2>
                <p className="in">{posts.content?posts.content:null} {posts.createdAt}</p>
            </div>
            <div className="detail-btn">
                <button className="detail-btn1" onClick={modify}>수정</button>
                <button className="detail-btn2" onClick={remove}>삭제</button>
            </div>
        </div>

    );
};

export default PostDetail;