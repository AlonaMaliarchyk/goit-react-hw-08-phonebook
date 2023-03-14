import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "shared/service/apiService";
    
export const signup  = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const { data: result } = await api.registerSingUp(data);
             console.log("sigupData", result)
            return result;
        }
        catch ({ response }) {
            return rejectWithValue;
        }
    }
)

export const logIn = createAsyncThunk(
    "auth/logIn",
    async (data, { rejectWithValue }) => {
        try {
            const { data: result } = await api.logIn(data);
            console.log("logInData", result)
            return result
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)