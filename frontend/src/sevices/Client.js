import axios from "axios";
import { BASE_URL } from "../constants/Url";

const client = axios.create({baseURL: BASE_URL});

client.interceptors.response.use(
    function(response) {
     return response;   
    },
    function (error){
        window.alert("알수 없는 오류가 발생하였습니다.\n 잠시후 다시 이용해주시기 바랍니다.");

        return Promise.reject(error);
    }
)

export default client;