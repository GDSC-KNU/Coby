import axios from "axios";
import { BASE_URL } from "../constants/Url";
import qs from "qs";

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { arrayFormat: "repeat" });
};

const SearchRoomList = async (tool, language) => {
  try {
    const params = { tool: tool, language: language };
    const response = await axios.get(`${BASE_URL}/coderooms/pair`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: params,
    });
    return response.data;
  } catch (error) {
    alert("존재하지 않는 방입니다.");
    console.error(error);

    throw new Error(error.response.data.message);
  }
};

export default SearchRoomList;
