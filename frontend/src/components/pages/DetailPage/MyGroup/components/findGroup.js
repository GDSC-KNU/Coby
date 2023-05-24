import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Groups from '../../../../../sevices/Groups';
import JoinGroups from '../../../../../sevices/JoinGroups';

import './css/findGroupModal.css';

function FindGroupModal(props) {
    const navigate = useNavigate();
    const [group, setGroup] = useState([]);
    const [enteredSearch, setEnteredSearch] = useState('');
    const [searchResult, setSearchResult] = useState('name');

    const searchChangeHandler = (event) => {
        setEnteredSearch(event.target.value);
    };

    const groupClickHandler = async(e,groupId) => {
        try {
            JoinGroups(groupId).then((data) => {
                alert("가입 완료!");
                props.setModalOpen(false);
                navigate('/GroupInfo');
            });
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    };

    const hadleSelect = (event) => {
        setSearchResult(event.target.value);
    };

    useEffect(() => {
        Groups().then((data) => {
            setGroup(data);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (
        <div className="outerFind">
            <p className='findFont'>그룹 찾기</p>
            <div className="upper_bar">
                <select className='selectbox' onChange={hadleSelect} defaultValue='name'>
                    <option value='name'>그룹명</option>
                    <option value='createdBy'>그룹장</option>
                </select>
                <input className='search_input'type='text' placeholder='검색어 입력' value={enteredSearch} onChange={searchChangeHandler}></input>
                <button className='search_btn'>찾기</button>
            </div>
            <div className='bottom_bar'>
                <table className='table'>
                    <thead>
                    <tr className='table_title'>
                        <th className='first_th'>그룹명</th>
                        <th className='second_th'>그룹장</th>
                        <th className='third_th'>그룹 기여도</th>
                        <th className='fourth_th'>그룹 소개</th>
                        <th className='fifth_th'>가입하기</th>
                    </tr>
                    </thead>
                    <tbody>
                    {searchResult === 'name' ? (
                        group
                            .filter((item) => item.name.includes(enteredSearch))
                            .map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='table_td'>{item.name}</td>
                                        <td className='table_td'>{item.createdBy}</td>
                                        <td className='table_td'>{item.exp_point}</td>
                                        <td className='table_td'>{item.description}</td>
                                        <td className='table_td'>
                                            <button className='join_btn' onClick={(e) => {groupClickHandler(e,item.id)}}>신청</button>
                                        </td>
                                    </tr>
                                );
                            })
                    ) : searchResult === 'createdBy' ? (
                        group
                            .filter((item) => item.createdBy.includes(enteredSearch))
                            .map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='table_td'>{item.name}</td>
                                        <td className='table_td'>{item.createdBy}</td>
                                        <td className='table_td'>{item.exp_point}</td>
                                        <td className='table_td'>{item.description}</td>
                                        <td className='table_td'>
                                            <button className='join_btn' onClick={(e) => {groupClickHandler(e,item.id)}}>신청</button>
                                        </td>
                                    </tr>
                                );
                            })
                    ) : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default FindGroupModal;