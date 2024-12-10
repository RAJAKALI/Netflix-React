import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, acion) => {
      return acion.payload;
    },
    removeUser: (state, acion) => {
      return null;
    },
  },
});

export const {addUser,removeUser} = userSlice.actions;

export default userSlice.reducer;