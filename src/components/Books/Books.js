import React, { useState } from 'react';
import AddBook from './AddBook';
import './books.css';

function Books() {
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
        <div className="book-card" key={book.id}>
          <div className="left-detail">
            <p>{book.category}</p>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <div className="book-card-buttons">
              <button type="button" onClick={() => handleDelete(book.id)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <hr />
      <AddBook />
    </>
  );
}

export default Books;
