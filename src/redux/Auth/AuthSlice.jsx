import { createSlice } from "@reduxjs/toolkit";
import { signup, logIn } from "./operationAuth";

const InitialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    InitialState,
    extraReducers: builder => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, { payload }) => {
                const {user, token} = payload;
                state.loading = false;
                state.error = null;
                state.user = user;
                state.token = token;
                state.isLogin = true;
            })
            .addCase(signup.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(logIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logIn.fulfilled, (state, { payload }) => {
                const {user, token} = payload;
                state.loading = false;
                state.error = null;
                state.user = user;
                state.token = token;
                state.isLogin = true;
            })
            .addCase(logIn.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = true;
        })
    }
})
export default authSlice;