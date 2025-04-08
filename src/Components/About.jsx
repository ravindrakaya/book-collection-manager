import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Books Collection Manager</h1>
      <div>
        <h2 style={{ marginTop: "20px" }}>Features</h2>
        <ul style={{ marginLeft: "30px" }}>
          <li style={{ fontSize: "18px", margin: "8px" }}>
            <span style={{ fontWeight: 600, marginRight: "10px" }}>
              CRUD Operations:
            </span>
            Add, edit, or delete books with form validation.
          </li>
          <li style={{ fontSize: "18px", margin: "8px" }}>
            <span style={{ fontWeight: 600, marginRight: "10px" }}>
              Real-time Search:
            </span>
            Filter books by title or author as we type.
          </li>
          <li style={{ fontSize: "18px", margin: "8px" }}>
            <span style={{ fontWeight: 600, marginRight: "10px" }}>
              Edit Mode:
            </span>
            Pre-fill forms to update book details seamlessly.
          </li>
          <li style={{ fontSize: "18px", margin: "8px" }}>
            <span style={{ fontWeight: 600, marginRight: "10px" }}>
              Routing:
            </span>
            Switch between Home (books list) and About pages.
          </li>
          <li style={{ fontSize: "18px", margin: "8px" }}>
            <span style={{ fontWeight: 600, marginRight: "10px" }}>
              Components:
            </span>
            BookList, BookItem, AddEditBookForm, SearchBar, Navigation.
          </li>
          <li style={{ fontSize: "18px", margin: "8px" }}>
            <span style={{ fontWeight: 600, marginRight: "10px" }}>
              State Management:
            </span>
            useState for books list, search queries, and form inputs., useEffect
            to fetch data.
          </li>
        </ul>
      </div>
      <p style={{fontWeight: 600, marginTop: "20px", color: "blue"}}>
        Built with React, Hooks, and CSS. Happy reading! 
      </p>
    </div>
  );
};

export default About;
