import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import AppNavbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Books from './pages/books';
import AddBook from './pages/add-book';

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </>
  );
}

export default App;
