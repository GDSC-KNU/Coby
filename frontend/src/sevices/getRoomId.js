import axios from "axios";
import { BASE_URL } from "../constants/Url";
import MyPage from "./MyPage";

const getRoomId = async () => {
  try {
    const currentUser = await MyPage();
    const currentUserId = currentUser.id;

    const response = await axios.get(`${BASE_URL}/coderooms/review`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    
    const data = response.data
      .filter((room) => room.createdBy === currentUserId)
      .map((room) => room.id);

    return data;
  } catch (error) {
    console.error(error);
    alert(error.response.data);
    throw new Error(error.response.data.message);
  }
};

export default getRoomId;
