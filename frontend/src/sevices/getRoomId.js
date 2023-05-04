import axios from "axios";
import { BASE_URL } from "../constants/Url";

const getRoomId = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coderooms/review`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = response.data.map((room) => ({ id: room.id }));
    return data;
  } catch (error) {
    console.error(error);
    alert(error.response.data);
    throw new Error(error.response.data.message);
  }
};

export default getRoomId;
