import axios from "axios";
import { BASE_URL } from "../constants/Url";

const ShowRoomListPair = async () => {
    try{
        const response = await axios.get(
            `${BASE_URL}/coderooms/pair`,
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        return response.data;
    } catch(error){
        console.error(error);
        alert(error.response.data);
        throw new Error(error.response.data.message);
    }
}

export default ShowRoomListPair;