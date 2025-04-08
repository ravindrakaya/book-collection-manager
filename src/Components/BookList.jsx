import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import BookItem from "./BookItem";
import AddEditBookForm from "./AddEditBookForm";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const BookList = () => {
  const [booksList, setBooksList] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [shownForm, setShowForm] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setApiStatus(apiStatusConstants.inProgress);
        const response = await fetch(
          "https://www.freetestapi.com/api/v1/books"
        );
        if (response.ok) {
          const jsonData = await response.json();
          // console.log(jsonData);
          const updateData = jsonData.map((each) => ({
            id: each.id,
            title: each.title,
            author: each.author,
            year: each.publication_year,
          }));
          // console.log("updatedData", updateData);
          setBooksList(updateData);
          setApiStatus(apiStatusConstants.success);
        } else {
          setApiStatus(apiStatusConstants.failure);
          throw new Error("Failed to Fetch Books");
        }
      } catch (error) {
        console.log(error);
        setApiStatus(apiStatusConstants.failure);
      }
    };
    fetchData();
  }, []);

  const deleteBook = (id) => {
    const newBooksList = booksList.filter((each) => each.id !== id);
    setBooksList(newBooksList);
  };

  const addBook = (newBook) => {
    setBooksList([
      ...booksList,
      { ...newBook, id: new Date().toLocaleTimeString() },
    ]);
    setShowForm(false);
  };

  const updateBook = (updatedBook) => {
    // console.log(updatedBook);
    setBooksList(
      booksList.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setCurrentBook(null);
    setShowForm(!shownForm);
    setIsEdit(!isEdit);
  };

  const renderLoadingView = () => (
    <div className="loading-view">Loading...</div>
  );

  const renderEmptyView = () => {
    return (
      <div className="books-empty-view">
        {!shownForm && <h1>No Books</h1>}

        {!shownForm && (
          <button onClick={() => setShowForm(!shownForm)}>Add books</button>
        )}
        {shownForm && (
          <AddEditBookForm
            addBook={addBook}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            updateBook={updateBook}
            currentBook={currentBook}
            shownForm={shownForm}
            setShowForm={setShowForm}
          />
        )}
      </div>
    );
  };

  const renderFailureView = () => {
    return (
      <div className="failure-view">
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
    );
  };

  const renderSuccessView = () => {
    const filteredBooks = booksList.filter(
      (each) =>
        each.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        each.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredBooks.length === 0 && searchQuery) {
      return (
        <div className="no-results">
          <p>No Search results Found!</p>
          <button type="button" onClick={() => setSearchQuery("")}>
            Try Again
          </button>
        </div>
      );
    }
    return (
      <>
        <div className="books-list">
          {!shownForm && (
            <div className="title-search-container">
              <h1 className="">My Books Collection</h1>
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          )}
          {!shownForm && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="add-book-form"
                type="text"
                onClick={() => setShowForm(!shownForm)}
              >
                Add Book Form
              </button>
            </div>
          )}

          {shownForm && (
            <AddEditBookForm
              addBook={addBook}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              updateBook={updateBook}
              currentBook={currentBook}
              shownForm={shownForm}
              setShowForm={setShowForm}
            />
          )}
          <ul className="list-container">
            {!shownForm &&
              filteredBooks.map((each) => (
                <BookItem
                  key={each.id}
                  booksDetails={each}
                  deleteBook={deleteBook}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                  shownForm={shownForm}
                  setShowForm={setShowForm}
                  setCurrentBook={setCurrentBook}
                />
              ))}
          </ul>
        </div>
      </>
    );
  };

  const renderBooksView = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.success:
        return booksList.length === 0 ? renderEmptyView() : renderSuccessView();
      default:
        return null;
    }
  };
  return renderBooksView();
};

export default BookList;
