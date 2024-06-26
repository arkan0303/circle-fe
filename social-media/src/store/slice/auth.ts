import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {  IUserData, IUserLogin } from "../../types/login";

interface IAuthState {
  user: IUserData | null | undefined;
  token: string;
}

const initialState: IAuthState = {
  token: "",
  user: undefined,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    SET_LOGIN: (
      state,
      action: PayloadAction<{ user: IUserData; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    SET_LOGOUT: (state) => {
      localStorage.removeItem("token");
      state.user = undefined;
      state.token = "";
    },
  },
});

export const { SET_LOGIN, SET_LOGOUT } = counterSlice.actions;
export default counterSlice.reducer;
