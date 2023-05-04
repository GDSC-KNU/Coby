import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/reuseUI/Layout';
import "./BoardWrite.css"
import Axios from "axios";

function Write(props) {
    const navigate = useNavigate();
    const [content, setContent] = useState({
        title: '',
        content: ''
    })
    const getValue = e => {
        const {name, value} = e.target;
        setContent({
            ...content,
            [name]: value
        })
    }
    /*
    const submitReview = ()=>{
      Axios.post('http://localhost:8000/insert', {
        title: content.title,
        body: content.content,
      }).then(()=>{
        alert('등록 완료!');
        navigate('/');
      })
    };
    */

    return(
        <div>
            <Layout/>
            <div className='outer'>
                <input className="title-input" type='text' name = 'title' placeholder=' 제목을 입력해 주세요.' onChange={getValue} />
                <CKEditor
                    editor={ClassicEditor}
                    data="<p></p>"
                    onReady={editor => {
                    console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setContent({
                          ...content,
                          content: data
                        })
                      }}
                    onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                     }}
                />
            </div>
            <button className='enterBtn'>입력</button>
        </div>
    )
}

export default Write;