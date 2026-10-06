import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getEventsService,
  getSingleEventService,
} from "../../Services/eventsServices";

export const getEvents = createAsyncThunk("events/data", async () => {
  const response = await getEventsService();

  return response.data.data;
});
export const getSingleEvent = createAsyncThunk(
  "events/getSingleEvent",
  async (eventId) => {
    const response = await getSingleEventService(eventId);
    return response.data; // Adjust based on your API response structure
  },
);

const initialState = {
  events: [],
  specificEvent: {},
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get events//
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = [...action.payload];
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message.includes("Network Error")
          ? "Unreachable to the server."
          : "This Email is Already exist.";
      })
      //get single event//
      .addCase(getSingleEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
        if (Object.keys(state.specificEvent).length) {
          state.specificEvent = {};
        }
      })
      .addCase(getSingleEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.specificEvent = action.payload;
      })
      .addCase(getSingleEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const {} = eventsSlice.actions;
export default eventsSlice.reducer;
