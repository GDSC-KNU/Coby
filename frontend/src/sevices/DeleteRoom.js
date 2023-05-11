import axios from "axios";
import { BASE_URL } from "../constants/Url";

const DeleteRoom = async (roomId, userList) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/coderooms/${roomId}/exit`,
            {
                users: userList
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }
        );
        // alert("방 삭제 완료");

        return response.data;
    } catch (error) {
        console.error(error);
        alert(error.response.data);

        throw new Error(error.response.data.message);
    }
};

export default DeleteRoom;