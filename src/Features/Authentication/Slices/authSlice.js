import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService, registerService } from "../Services/authServices";

export const loginUser = createAsyncThunk("auth/login", async (body) => {
  const data = await loginService(body);
  return data;
});

export const registerUser = createAsyncThunk("auth/register", async (body) => {
  const data = await registerService(body);
  return data;
});
const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  error: null,
  //register
  registerLoading: false,
  registerError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  // login //
  extraReducers: (builder) => {
    // login //
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message.includes("Network Error")
          ? "Unreachable to to the server."
          : "Invalid email or password";
      })

      // register //
      .addCase(registerUser.pending, (state) => {
        state.registerLoading = true;
        state.registerError = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerLoading = false;
        state.registerError = action.error.message.includes("Network Error")
          ? "Unreachable to the server."
          : "This Email is Already exist.";
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
