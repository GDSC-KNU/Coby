import axios from "axios";
import { BASE_URL } from "../constants/Url";

const ShowRoomList = async ( ) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/coderooms/review`,
<<<<<<< HEAD
            {},
=======
>>>>>>> #29-Room
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
<<<<<<< HEAD
        alert("방 생성 완료");
=======
        //alert("방 생성 완료");
>>>>>>> #29-Room
        return response.data;
    } catch (error) {
        console.error(error);
        alert(error.response.data);
<<<<<<< HEAD
        
=======

>>>>>>> #29-Room
        throw new Error(error.response.data.message);
    }
};

export default ShowRoomList;