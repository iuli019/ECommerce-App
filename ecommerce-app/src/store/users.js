import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        isAdmin: action.payload.isAdmin,
      });
    },
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
