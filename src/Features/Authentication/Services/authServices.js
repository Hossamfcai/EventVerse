import axios from "axios";
import { setLocalStorageItem } from "../../../utils/localStorage";

export async function loginService(body) {
  const response = await axios.post(
    `http://localhost:5000/api/v1/auth/login`,
    body,
  );
  if (response.status == 200) {
    setLocalStorageItem("token", response.data.data.token);
    setLocalStorageItem("role", response.data.data.user.role.toLowerCase());
  }
  return response.data.data.user;
}

export async function registerService(body) {
  const response = await axios.post(
    `http://localhost:5000/api/v1/auth/register`,
    body,
  );
  return response.data.data.user;
}
