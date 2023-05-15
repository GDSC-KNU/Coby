import axios from "axios";
import { BASE_URL } from "../constants/Url";

const SearchRoomList = async (word) => {
    try {
        const encodedWord = encodeURIComponent(word);
        const params = { s:encodedWord };
        const response = await axios.get(
            `${BASE_URL}/coderooms/review`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                params: params
            }
        );
        return response.data;
    } catch (error) {
        alert("존재하지 않는 방입니다.")
        console.error(error);
        
        throw new Error(error.response.data.message);
    }
};

export default SearchRoomList;