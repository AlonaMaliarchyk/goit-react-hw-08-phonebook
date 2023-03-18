import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "shared/service/apiService";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
  try {
    const response = await instance.get(`/contacts`);
    return response.data;
  } catch(e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const addContact = createAsyncThunk("contact/addContact", async (data, thunkAPI) => {
  try {
    const response = await instance.post(`/contacts`, data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)
