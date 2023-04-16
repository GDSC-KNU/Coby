import axios from "axios";
import { BASE_URL } from "../constants/Url";
import { useNavigate } from "react-router-dom";

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

        throw new Error(error.response.data.message);
    }
};

export default Login;