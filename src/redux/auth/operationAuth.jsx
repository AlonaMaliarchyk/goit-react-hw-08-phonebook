import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "shared/service/apiService";

export const signup  = createAsyncThunk(
    "auth/signup",
    async (credentials,
        { rejectWithValue }) => {
        try {
            const data = await api.registerSignUp(credentials);
            return data;
        }
        catch ({ response }) {
            return rejectWithValue;
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            //const { data: result } = await api.logIn(data1);
          const data = await api.logIn(credentials);
          return data;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            //const { data: result } = await api.getCurrent(data1);
            const {auth}= getState()
            const data = await api.getCurrentUser(auth.token);
          return data;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue}) => {
        try {
          const data = await api.logOut();
          return data;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        }
    }
)
