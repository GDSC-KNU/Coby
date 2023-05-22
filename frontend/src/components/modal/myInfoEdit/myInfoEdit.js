import { useState, useEffect } from 'react';
import MyPage from '../../../sevices/MyPage';
import MyprofileEdit from '../../../sevices/MyprofileEdit';

import './myInfoEdit.css';

function MyInfoEdit(props) {
    const [profileImg, setProfileImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const [name,setName] = useState('');
    const [file, setFile] = useState(null);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        setFile(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setProfileImg(reader.result);
                resolve();
            };
        });
    };

    useEffect(() => {
        if(props.isLogin){
            MyPage().then((data) => {
                setProfileImg(data.profileUrl);
                setName(data.name);
            }).catch((err) => {
                console.log('마이페이지 수정 모달 불러오기 실패');
            });
        }
    }, [props.isLogin]);

    const onClickChange = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("profileImage", file);
            formData.append('name', name);

            MyprofileEdit(formData).then((data) => {
                alert("수정 완료!");
                props.setModalOpen(false);
                window.location.reload();
            });
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    };

    return (
        <div className="infoOuterEdit">
            <div className='infoUploader'>
                <p className='editFont'>프로필 수정</p>
                <div className="preview">
                    <input className="fileinput" type="file" accept="image/jpg,image/png,image/jpeg,image/gif" name="file" onChange={(e) => {encodeFileToBase64(e.target.files[0])}}/>
                    {profileImg && <img src={profileImg} alt="preview-img" className='profileImg'/>}
                    <input type='text' className='editName' placeholder='이름을 입력해 주세요.' onChange={handleName} value={name}/>
                </div>
            </div>
            <button className='editBtn' onClick={onClickChange}>수정</button>
        </div>
    );
}
export default MyInfoEdit;