import { useState, useEffect } from 'react';
import MyGroup from '../../../../../sevices/MyGroup';
import MyGroupInfoEdit from '../../../../../sevices/MyGroupInfoEdit';

import './css/myGroupEdit.css';

function MyGroupEdit(props) {
    const [groupImg, setGroupImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const [name,setName] = useState('');
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [groupId, setGroupId] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        setFile(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setGroupImg(reader.result);
                resolve();
            };
        });
    };

    useEffect(() => {
        MyGroup().then((data) => {
            setGroupImg(data.profileUrl);
            setName(data.name);
            setDescription(data.description);
            setGroupId(data.id);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    const onClickChange = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("profileImage", file);
            formData.append('name', name);
            formData.append('description', description);

            MyGroupInfoEdit(formData,groupId).then((data) => {
                alert("수정 완료!");
                window.location.reload();
            });
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    };

    return (
        <div className="outerEdit">
            <div className='uploader'>
                <p className='editFont'>그룹정보 수정</p>
                <div className="preview">
                    <input className="fileinput" type="file" accept="image/jpg,image/png,image/jpeg,image/gif" name="file" onChange={(e) => {encodeFileToBase64(e.target.files[0])}}/>
                    {groupImg && <img src={groupImg} alt="preview-img" className='profileImg'/>}
                    <input type='text' className='editName' placeholder='그룹이름을 입력해 주세요.' onChange={handleName} value={name}/>
                </div>
            </div>
            <button className='editBtn' onClick={onClickChange}>수정</button>
        </div>
    );
}
export default MyGroupEdit;