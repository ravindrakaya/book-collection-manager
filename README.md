### *Task: Build a "Book Collection Manager" Application*  
*Objective*: Create an app to manage a collection of books with CRUD operations, search, and routing.  

---

### *Requirements*  
#### 1. *Component Structure*  
- Create reusable functional components:  
  - BookList (displays all books)  
  - BookItem (renders individual book details + actions)  
  - AddEditBookForm (form for adding/editing books)  
  - SearchBar (search/filter functionality)  
  - Navigation (header with links to Home/About pages).  

#### 2. *State Management*  
- Use useState to manage:  
  - List of books.  
  - Search query (for filtering books).  
  - Form input states (title, author, publication year).  
  - Edit mode (to toggle between adding/editing a book).  
- Use useEffect to load initial data from a mock API (e.g., JSON Server, a static JSON file, or a placeholder API).  

#### 3. *Core Functionality*  
- *Add a Book*:  
  - Form with validation (no empty fields, valid publication year).  
  - Display error messages for invalid inputs.  
- *Edit/Delete a Book*:  
  - Clicking "Edit" on a BookItem prefills the form with the book’s data.  
  - Clicking "Delete" removes the book from the list.  
- *Search*: Filter books by title/author as the user types.  

#### 4. *React Router*  
- Set up two routes:  
  - /: Home page (displays books, search bar, and form).  
  - /about: About page (simple description of the app).  
- Add navigation links in the header.  

#### 5. *Styling*  
- Apply basic CSS (e.g., Flexbox/Grid for layouts, hover effects for buttons).  




### *Mock Data Example*  
javascript
// Initial books data (can be fetched from an API)
const mockBooks = [
  { id: 1, title: "React Basics", author: "John Doe", year: 2022 },
  { id: 2, title: "JavaScript Advanced", author: "Jane Smith", year: 2021 },
];

