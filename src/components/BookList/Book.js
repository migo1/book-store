import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/booksSlice';
import './books.css';

function Book({ book }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook({ item_id: id }));
  };
  return (
    <div className="book-card" key={book.item_id}>
      <div className="left-detail">
        <p>{book.category}</p>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <div className="book-card-buttons">
          <button
            type="button"
            key={book.item_id}
            onClick={(e) => {
              e.preventDefault();
              handleDelete(book.item_id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
