import { createSlice } from "@reduxjs/toolkit";
import { signup, login, current, logout } from "./operationAuth";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    isLoading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(signup.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, { payload }) => {
              const {user, token} = payload;
                state.isLoading = false;
                state.error = null;
                state.user = user;
                state.token = token;
                state.isLogin = true;
            })
            .addCase(signup.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
              const {user, token} = payload;
                state.isLoading = false;
                state.error = null;
                state.user = user;
                state.token = token;
                state.isLogin = true;
            })
            .addCase(login.rejected, (state, { payload }) => {
              state.isLoading = false;
              state.error = true;
            })
             .addCase(current.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(current.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.user = payload;
                state.isLogin = true;
            })
            .addCase(current.rejected, (state, { payload }) => {
              state.isLoading = false;
              state.token = "";
              state.error = true;
            })
             .addCase(logout.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
                state.user = {};
                state.token = "";
                state.isLogin = false;
            })
            .addCase(logout.rejected, (state, { payload }) => {
              state.isLoading = false;
              state.error = payload;
            })
    }
})
export default authSlice.reducer;
