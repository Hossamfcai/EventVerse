import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService } from "../Services/authServices";

export const loginUser = createAsyncThunk("auth/login", async (body) => {
  console.log(body);
  const data = await loginService(body);
  console.log(data);
  return data;
});

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("state from auth slice:", action.payload);
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("action error from slice", action.error);
        state.loading = false;
        state.error = action.error.message.includes("Network Error")
          ? "Unreachable to to the server."
          : "Invalid email or password"; // the string from rejectWithValue
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
