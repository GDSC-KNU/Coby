import axios from "axios";
import { BASE_URL } from "../constants/Url";

const leaveGroup = async (groupId) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/groups/leave/${groupId}`,
            {},
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

export default leaveGroup;
