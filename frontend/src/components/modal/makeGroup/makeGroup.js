import { useState, useEffect } from 'react';
import MyGroup from '../../../sevices/MyPage';
import MakeGroup from '../../../sevices/MakeGroup';

import './makeGroup.css';

function MyGroupMake(props) {
    const [profileImg, setProfileImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const [name,setName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
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
        MyGroup().then((data) => {
            setProfileImg(data.groupUrl);
            setName(data.groupName);
            setDescription(data.description);
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

            MakeGroup(formData).then((data) => {
                alert("생성 완료!");
                props.setModalOpen(false);
            });
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    };

    return (
        <div className="outerMake">
            <div className='uploader1'>
                <p className='makeFont'>그룹 만들기</p>
                <div className="preview">
                    {profileImg && <img src={profileImg} alt="preview-img" className='profileImg1'/>}
                    <p>그룹이미지</p>
                    <input className="makefileinput" type="file" accept="image/jpg,image/png,image/jpeg,image/gif" name="file" onChange={(e) => {encodeFileToBase64(e.target.files[0])}}/>
                    <p>그룹이름</p>
                    <input type='text' className='makeName' placeholder='그룹이름을 입력해 주세요.' onChange={handleName} value={name}/>
                    <p>그룹소개</p>
                    <input type='text' className='makeDescription' placeholder='그룹소개를 입력해 주세요.' onChange={handleDescription} value={description}/>
                </div>
            </div>
            <button className='editBtn' onClick={onClickChange}>완료</button>
        </div>
    );
}
export default MyGroupMake;