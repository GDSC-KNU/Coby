import { useState, useEffect } from 'react';


import './FindGroupModal.css';

function FindGroupModal(props) {
   
    return (
        <div className="outerFind">
            <p className='findFont'>그룹 찾기</p>
            <div className="upper_bar">
                <p>찾기 옵션</p>
            </div>
            <div className='bottom_bar'>
                <p>정보</p>
            </div>
        </div>
    );
}
export default FindGroupModal;