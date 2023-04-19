import axios from "axios";
import { BASE_URL } from "../constants/Url";

const SaveRoomList = async (title, url, language, tool, password ) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/coderooms/review`,
            { title, url, language, tool, password },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        alert(error.response.data);
        // 회원가입에 실패한 경우, API에서 반환한 에러 메시지를 출력합니다.
        throw new Error(error.response.data.message);
    }
};

export default SaveRoomList;