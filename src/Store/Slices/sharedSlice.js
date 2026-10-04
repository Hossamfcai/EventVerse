import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEventsService } from "../../Services/sharedServices";

export const getEvents = createAsyncThunk("events/data", async () => {
  const response = await getEventsService();
  console.log(response.data.data);
  return response.data.data;
});

const initialState = {
  events: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

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
      });
  },
});

// export const {} = eventsSlice.actions;
export default eventsSlice.reducer;
