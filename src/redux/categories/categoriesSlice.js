import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCategories: [],
  data: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,

  reducers: {
    status: (state) => {
      if (state.data === '') return 'Under construction';
      return null;
    },
  },
});

export const { status } = categoriesSlice.actions;

export default categoriesSlice.reducer;
