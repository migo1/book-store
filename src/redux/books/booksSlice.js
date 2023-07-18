import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalBooks: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.totalBooks.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.totalBooks = state.totalBooks.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
