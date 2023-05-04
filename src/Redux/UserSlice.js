import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "User/getUsers",
  async (_, thunkAPI) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res;
  }
);

const UserSlice = createSlice({
  name: "User",
  initialState: { users: [], isLoading: false },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default UserSlice.reducer;
