import axios from "axios";
import { BASE_URL } from "../constants/Url";

const MyGroupInfoEdit = async (formData) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/groups/{groupId}`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'multipart/form-data'
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

export default MyGroupInfoEdit;