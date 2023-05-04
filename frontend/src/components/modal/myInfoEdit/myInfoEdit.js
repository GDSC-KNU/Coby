import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

import './myInfoEdit.css';

function MyInfoEdit(props) {
    const [imageSrc, setImageSrc] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const editClick = () => {
        props.setModalOpen(false);
        alert('프로필 사진이 변경되었습니다.');
    };
    const handleFileOnChange = (e) => {
      const formData = new FormData();
      formData.append('profile_img', e.target.files[0]);
      Axios.post('/api/users/myinfo', formData, {
        header: { 'content-type': 'multipart/form-data' },
      }).then((response) => {
        console.log({ response });
        props.fileToParents(response.data.image);
      }).catch((error) => {
        console.log(error.response)
      }
      )
      setImageSrc(URL.createObjectURL(e.target.files[0]));
    };
    
    return (
        <div className="outerEdit">
            <div className='uploader'>
                <p className='editFont'>프로필 수정</p>
                <div className="preview">
                <input type="file" accept="image/jpg,image/png,image/jpeg,image/gif" name="profile_img" onChange={handleFileOnChange}/>
                {imageSrc && <img src={imageSrc} alt="preview-img" className='profileImg'/>}
                </div>
            </div>
            <button className='editBtn' onClick={editClick}>수정</button>
        </div>
    );
}
export default MyInfoEdit;


