import axios from "axios";
import { BASE_URL } from "../constants/Url";

const Modify = async (title,content,id) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/posts/${id}`,
            { title, content },
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
        throw new Error(error.response.data.message);
    }
};

export default Modify;