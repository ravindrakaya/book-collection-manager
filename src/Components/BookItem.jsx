const BookItem = (props) => {
  const {
    booksDetails,
    deleteBook,
    isEdit,
    setIsEdit,
    shownForm,
    setShowForm,
    setCurrentBook,
  } = props;
  const { id, title, author, year } = booksDetails;

  const handleDelete = () => {
    deleteBook(id);
  };

  const handleEdit = () => {
    setCurrentBook(booksDetails);
    setIsEdit(!isEdit);
    setShowForm(!shownForm);
  };

  return (
    <li className="list-item-container">
      <h2 className="list-item-heading">{title}</h2>
      <p className="list-item-des">
        <span className="p-span">author:</span>
        {author}
      </p>
      <p className="list-item-des">
        <span className="p-span">year:</span>
        {year}
      </p>
      <div className="button-container">
        <button type="button" className="button" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" className="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default BookItem;
