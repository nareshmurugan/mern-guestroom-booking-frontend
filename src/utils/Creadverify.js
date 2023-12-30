import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import axios from "axios";
import Cookies from "js-cookies";

const Createverify = async () => {
    const navigate=useNavigate();
    try {
        const token = `Bearer ${Cookies.getItem("Credentials")}`;
        console.log(token);
        const data = (await axios.post("/api/user/verify", { token: token }))
          .data;
        console.log(data);
        if (data.result === "Success") {
          navigate("/home");
        }
      } catch (error) {
        console.log("No Token");
      }
}

export default Createverify;