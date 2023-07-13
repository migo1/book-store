import React, { useState } from 'react';
import AddBook from './AddBook';
import Book from './Book';

function BookList() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzzane Collins',
      category: 'Action',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
    },
    {
      id: 3,
      title: 'The 48 Laws of Power',
      author: 'Robert Greene',
      category: 'Self-help',
    },
  ]);

  const handleDelete = (id) => {
    const updatedBooks = [...books].filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <>
      {books.map((book) => (
        <Book book={book} handleDelete={handleDelete} key={book.id} />
      ))}
      <hr />
      <AddBook />
    </>
  );
}

export default BookList;
