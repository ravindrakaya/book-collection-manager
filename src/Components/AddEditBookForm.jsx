import { useEffect, useState } from "react";

const AddEditBookForm = ({
  isEdit,
  addBook,
  setIsEdit,
  currentBook,
  shownForm,
  setShowForm,
  updateBook,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
  });

  useEffect(() => {
    if (isEdit && currentBook) {
      setFormData({
        title: currentBook.title,
        author: currentBook.author,
        year: currentBook.year,
      });
    }
  }, [currentBook, isEdit]);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErorrs = {};
    if (!formData.title.trim()) {
      newErorrs.title = "Title is Required*";
    }
    if (!formData.author.trim()) {
      newErorrs.author = "Author is Required*";
    }
    if (!formData.year) {
      newErorrs.year = "Year is Required*";
    } else if (isNaN(formData.year)) {
      newErorrs.year = "Year must be a number!";
    } else if (parseInt(formData.year) > new Date().getFullYear()) {
      newErorrs.year = "Year should be below the current Year!";
    }
    setErrors(newErorrs);
    return Object.keys(newErorrs).length === 0;
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      author: "",
      year: "",
    });
    setIsEdit(!isEdit);
    setShowForm(!shownForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const booksData = {
        title: formData.title.trim(),
        author: formData.author.trim(),
        year: parseInt(formData.year),
      };
      if (isEdit) {
        updateBook({ ...booksData, id: currentBook.id });
      } else {
        addBook(booksData);
        setFormData({ title: "", author: "", year: "" });
      }
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>{isEdit ? "Edit Book" : "Add Book"}</h3>
      <div className="form-box-container">
        <div className="form-input">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-search-input"
            placeholder="Enter Valid Title*"
          />
        </div>
        {errors.title && <p className="err-msg">{errors.title}</p>}
        <div className="form-input">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="form-search-input"
            placeholder="Enter Valid Author*"
          />
        </div>
        {errors.author && <p className="err-msg">{errors.author}</p>}
        <div className="form-input">
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="form-search-input"
            placeholder="Enter Valid Year*"
          />
        </div>
        {errors.year && <p className="err-msg">{errors.year}</p>}
        <div>
          {isEdit && (
            <button type="button" className="form-btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
          <button
            type="submit"
            className={isEdit ? "form-btn-add" : "form-btn"}
          >
            {isEdit ? "Update Book" : "Add Book"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddEditBookForm;
