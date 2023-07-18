import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books.totalBooks);

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
