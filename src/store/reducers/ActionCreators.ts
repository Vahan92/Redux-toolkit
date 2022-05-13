import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from 'src/modules/request';

export const fetchUsers = createAsyncThunk(
  'user/login',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await client.post<any>('login', payload);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Something went wrong, can not login');
    }
  }
);
