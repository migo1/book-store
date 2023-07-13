import React from 'react';
import PropTypes from 'prop-types';
import './books.css';

function Book({ book, handleDelete }) {
  return (
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
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Book;
