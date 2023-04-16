import axios from "axios";
import { BASE_URL } from "../constants/Url";

const Logout = async () => {
    try {
        const response = await axios.post(
            `${BASE_URL}/logout`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        // 로그아웃에 성공한 경우, 로컬 스토리지에서 토큰을 삭제합니다.
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        return response.data.message;

    } catch (error) {
        console.error(error);
        throw new Error(error.response.data.message);
    }
};

export default Logout;