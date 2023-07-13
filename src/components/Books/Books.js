import './books.css';

function Books() {
  return (
    <div className="book-card">
      <div className="left-detail">
        <p>category</p>
        <h3>title</h3>
        <p>author</p>
        <div className="book-card-buttons">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      {/* <div className="middle-detail"></div>
      <div className="right-detail"></div> */}
    </div>
  );
}

export default Books;
