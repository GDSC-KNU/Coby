import React from 'react';
import { useState, useEffect } from 'react';
import MyGroup from '../../../sevices/MyGroup';

import './findGroupModal.css';

function FindGroupModal(props) {
    const [group, setGroup] = useState([]);
    const [enteredSearch, setEnteredSearch] = useState('');

    const searchChangeHandler = (event) => {
        setEnteredSearch(event.target.value);
    };

    useEffect(() => {
        MyGroup().then((data) => {
            setGroup(data);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (
        <div className="outerFind">
            <p className='findFont'>그룹 찾기</p>
            <div className="upper_bar">
                <select className='selectbox'>
                    <option>그룹명</option>
                    <option>그룹장</option>
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
                        </tr>
                    </thead>
                    <tbody className='grouplist'>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        <tr>
                            <td className='table_td'><p>그룹이름입니다</p></td>
                            <td className='table_td'><p>남성훈</p></td>
                            <td className='table_td'><p>2450</p></td>
                            <td className='table_td'><p>그룹소개입니다 안녕하세요</p></td>
                        </tr>
                        {/*}
                        group.items.length === 0 
                        ? {group.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className='table_td'>{item.name}</td>
                                    <td className='table_td'>{item.createdBy}</td>
                                    <td className='table_td'>{item.exp_point}</td>
                                    <td className='table_td'>{item.description}</td>
                                </tr>
                            );
                        })}
                        : enterdSearch
                        ? {group.items.filter((item) => { return item.name.includes(enteredSearch) }).map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className='table_td'>{item.name}</td>
                                    <td className='table_td'>{item.createdBy}</td>
                                    <td className='table_td'>{item.exp_point}</td>
                                    <td className='table_td'>{item.description}</td>
                                </tr>
                            );
                        })}
                        : {group.items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className='table_td'>{item.name}</td>
                                    <td className='table_td'>{item.createdBy}</td>
                                    <td className='table_td'>{item.exp_point}</td>
                                    <td className='table_td'>{item.description}</td>
                                </tr>
                            );
                        })}*/}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default FindGroupModal;