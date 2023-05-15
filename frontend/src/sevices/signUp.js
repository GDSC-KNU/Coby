import axios from "axios";
import { BASE_URL } from "../constants/Url";

const signUp = async (userId, password, name) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/signup`,
            { userId, password, name }
        );

        return response.data;
    } catch (error) {
        console.error(error);
        alert(error.response.data);
        // 회원가입에 실패한 경우, API에서 반환한 에러 메시지를 출력합니다.
        throw new Error(error.response.data.message);
    }
};

export default signUp;