import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchUsers } from './ActionCreators';

const initialState:any = {
  error: '',
  isLoading: false,
  data: {}
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<any>) => {
      debugger;
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;
