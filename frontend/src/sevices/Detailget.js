import axios from "axios";
import { BASE_URL } from "../constants/Url";

const Detailget = async (id) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/posts/${id}`,
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

export default Detailget;