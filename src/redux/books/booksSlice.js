import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kS2b64RQn1uA7iG8cjEM/books';

const initialState = {
  totalBooks: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', () => axios.get(url).then((resp) => resp.data));

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  const resp = await axios.post(url, newBook);
  return { newBook, resp };
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  const response = await axios.delete(`${url}/${bookId.item_id}`, bookId);
  return { bookId, response: response.data };
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const allBooks = Object.keys(action.payload).map((item) => {
          const book = {};
          book.author = action.payload[item][0].author;
          book.category = action.payload[item][0].category;
          book.title = action.payload[item][0].title;
          book.item_id = item;
          return book;
        });
        state.totalBooks = allBooks;
        state.error = '';
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.totalBooks.push(action.payload.newBook);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.totalBooks = state.totalBooks.filter(
          (book) => book.item_id !== action.payload.bookId.item_id,
        );
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export const { deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
