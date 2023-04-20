import axios from "axios";
import { BASE_URL } from "../constants/Url";
import Logout from "./Logout";

const Login = async (userId, password)=> {
    try {
        const response = await axios.post(
            `${BASE_URL}/login`,
            { userId, password },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        return response.data;

    } catch(error){
        console.error(error);
        alert(error.response.data);
        if (error.response && error.response.status === 401) {
            alert("로그인을 다시 해주시기 바랍니다.")
            localStorage.removeItem("token"); // 토큰 만료시 로그아웃 처리
          }
        throw new Error(error.response.data.message);
    }
};

export default Login;