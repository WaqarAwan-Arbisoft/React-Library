import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import AppNavbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Books from './pages/books';
import AddBook from './pages/add-book';
import Author from './pages/author';
import AddAuthor from './pages/add-author';

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/add-author" element={<AddAuthor />} />
      </Routes>
    </>
  );
}

export default App;
