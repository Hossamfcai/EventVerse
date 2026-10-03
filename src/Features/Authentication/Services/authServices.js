import axios from "axios";
import { setLocalStorageItem } from "../../../utils/localStorage";

export async function loginService(body) {
  console.log(body);

  const response = await axios.post(
    `http://localhost:5000/api/v1/auth/login`,
    body,
  );
  console.log(response);
  if (response.status == 200) {
    console.log(response.data.data.token);
    console.log(response.data.data.user.role);
    setLocalStorageItem("token", response.data.data.token);
    setLocalStorageItem("role", response.data.data.user.role.toLowerCase());
  }
  console.log(response.data.data);
  return response.data.data.user; // e.g. { token, user }
}
