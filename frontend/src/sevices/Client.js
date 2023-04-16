import axios from "axios";
import { BASE_URL } from "../constants/Url";
import { useCookies } from "react-cookie";

const client = () => {
  axios.create({
    baseURL: BASE_URL,
  });
};
client.interceptors.request.use(
  (config) => {
    const [cookies] = useCookies["token"];
    const token = cookies.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    window.alert(
      "알수 없는 오류가 발생하였습니다.\n 잠시후 다시 이용해주시기 바랍니다."
    );
    console.log(error);
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // const originalRequest= error.config;
    if (error.response && error.response.status === 401) {
      // 401 Unauthorized 오류 처리
      // originalRequest._retry = true;
      // return instance.post('/refresh_token', {
      //     refreshToken: cookies.token('refreshToken'),
      //   })
      window.alert("인증 정보가 만료되었습니다. 다시 로그인해주세요.");
      // 로그인 페이지로 이동하는 코드 작성
      // 예시) history.push("/login");
    } else {
      // 기타 오류 처리
      window.alert(
        "알수 없는 오류가 발생하였습니다.\n 잠시후 다시 이용해주시기 바랍니다."
      );
    }
    return Promise.reject(error);
  }
);

export default client;
