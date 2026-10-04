import axios from "axios";

export function getEventsService() {
  const responese = axios.get("http://localhost:5000/api/v1/events");
  console.log(responese);
  return responese;
}
