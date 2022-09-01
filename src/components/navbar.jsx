import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

const AppNavbar = () => {
    let location = useLocation().pathname.toString();
    location = location.split('/');
    location = location[location.length - 1]
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/"><img src="/images/logo.png" alt="LOGO_IMAGE" width="80" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className={(location.toLowerCase() === 'books' ? 'text-indigo-600' : 'text-black') + " px-3"} to="/books">Books</Link>
                        <Link className={(location.toLowerCase() === 'add-book' ? 'text-indigo-600' : 'text-black') + " px-3"} to="/add-book">Add Book</Link>
                        <Link className={(location.toLowerCase() === 'authors' ? 'text-indigo-600' : 'text-black') + " px-3"} to="/authors">Authors</Link>
                        <Link className={(location.toLowerCase() === 'add-author' ? 'text-indigo-600' : 'text-black') + " px-3"} to="/add-author">Add Author</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;