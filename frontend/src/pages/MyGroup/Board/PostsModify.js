import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Modify from '../../../sevices/Modify';
import Detailget from '../../../sevices/Detailget';

function PostsModify() {
    const navigate = useNavigate();
    let {id} = useParams();

    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        Detailget(id).then((data) => {
            setPosts(data);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    const update = () => {
        try {
            Modify(title,content,id).then((data) => {
                alert("수정 완료!");
                navigate(`/posts/${id}`);
            });
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    }

    const getValue = e => {
        setTitle(e.target.value);
    }


    return(
        <div className='total-write'>
            <div className='form-wrapper'>
                <input className="title-input" type='text' name = 'title' placeholder='제목을 입력해 주세요.' defaultValue={title ? title : null} onChange={getValue} />
                <CKEditor
                    editor={ClassicEditor}
                    data={content ? content : ''}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setContent(
                          data
                        )
                      }}
                />
            </div>
            <button className='enterBtn' onClick={update}>수정</button>
        </div>
    )
}

export default PostsModify;