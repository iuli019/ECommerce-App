import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";


const slice = createSlice({
  name: "users",
  initialState: { list: [], loading: false, lastFetch: null },
  reducers: {
    userAdded: (users, action) => {
      users.push({
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        isAdmin: action.payload.isAdmin,
      });
    },

    usersRequestFailed: (users, action) => {
      users.loading = false;
    },
    usersRequested: (users, action) => {
      users.loading = true;
    },
    usersReceived: (users, action) => {
      users.list = action.payload;
      users.loading = false;
      users.lastFetch = Date.now();
    },

  },
});

export const { userAdded, usersReceived, usersRequested, usersRequestFailed } = slice.actions;
export default slice.reducer;

const url = "/users";

export const loadUsers = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url,
      onStart: usersRequested.type,
      onSuccess: usersReceived.type,
      onError: usersRequestFailed.type,
    })
  );
};

export const getUsers = createSelector((state => state.entities.users.list), (list) => list);