import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';

function AddBook() {
  const [bookTitle, setTitle] = useState('');
  const [bookAuthor, setAuthor] = useState('');
  const [bookCategory, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    if (bookTitle && bookAuthor) {
      const newItemId = `item${Date.now()}`;
      const newBook = {
        item_id: newItemId,
        title: bookTitle,
        author: bookAuthor,
        category: bookCategory,
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <div className="form-container">
      <h3>ADD NEW BOOK</h3>
      <form className="book-form" onSubmit={handleAddBook}>
        <input
          placeholder="Book title"
          value={bookTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name="author"
          value={bookAuthor}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">-- Select Author --</option>
          <option value="Suzzane Collins">Suzzane Collins</option>
          <option value="Frank Hebert">Frank Hebert</option>
          <option value="Robert Greene">Robert Greene</option>
        </select>
        <select
          name="category"
          value={bookCategory}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">-- Select Category --</option>
          <option value="Fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
