import axios from "axios";

export function getEventsService() {
  const responese = axios.get("http://localhost:5000/api/v1/events");
  return responese;
}

export async function getSingleEventService(eventId) {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/events/${eventId}`,
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching single event:", error);
    throw error;
  }
}
