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
        <p className="book-category">{book.category}</p>
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <div className="book-card-buttons">
          <button type="button">Comments</button>
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
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="right-detail">
        <div className="book-progress">
          <div className="circle" />
          <div className="circleDetails">
            <p className="percent">64%</p>
            <p className="status">Completed</p>
          </div>
        </div>
        <div className="vertical-border" />
        <div className="chapter-details">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 17</p>
          <button type="button" className="update">UPDATE PROGRESS</button>
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
