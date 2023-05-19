import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/reuseUI/Layout';
import "./BoardWrite.css"
import WriteGroup from '../../sevices/GroupWrite';

function Write(props) {
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
    const onClickWrite = (e) => {
        e.preventDefault();
        try {
            WriteGroup(content.title,content.content).then((data) => {
                alert("작성 완료!");
            });
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    };

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
                />
            </div>
            <button className='enterBtn' onClick={onClickWrite}>입력</button>
        </div>
    )
}

export default Write;