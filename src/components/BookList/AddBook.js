function AddBook() {
  return (
    <div className="form-container">
      <h3>ADD NEW BOOK</h3>
      <form className="book-form">
        <input placeholder="Book title" />
        <select name="author">
          <option value="">-- Select Author --</option>
          <option value="Suzzane Collins">Suzzane Collins</option>
          <option value="Frank Hebert">Frank Hebert</option>
          <option value="Robert Greene">Robert Greene</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
