import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AddBook from './AddBook';
import Book from './Book';
import { fetchBooks } from '../../redux/books/booksSlice';

function BookList() {
  const books = useSelector((state) => state.books.totalBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      {books.map((book) => (
        <Book book={book} key={book.item_id} />
      ))}
      <hr />
      <AddBook />
    </>
  );
}

export default BookList;
