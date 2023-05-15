import axios from "axios";
import { BASE_URL } from "../constants/Url";

const SaveRoomListPair = async (title, url, language, tool, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/coderooms/pair`,
      { title, url, language, tool, password },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    alert("방생성 완료");
    return response.data;
  } catch (error) {
    console.error(error);
    alert(error.response.data);

    throw new Error(error.response.data.message);
  }
};

export default SaveRoomListPair;
