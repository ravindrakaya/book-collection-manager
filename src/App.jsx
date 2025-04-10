import { HashRouter, Route, Routes } from "react-router-dom";
import BookList from "./Components/BookList";
import "./App.css";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import Navigation from "./Components/Navigation";

const App = () => {
  return (
    <div className="my-app">
      <HashRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
