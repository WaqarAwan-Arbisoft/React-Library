import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
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
                <Navbar.Brand>
                    <Link to="/"><img src="/images/logo.png" alt="LOGO_IMAGE" width="80" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link className={location.toLowerCase() === 'books' ? 'text-success' : ''} to="/books">Books</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className={location.toLowerCase() === 'add-book' ? 'text-success' : ''} to="/add-book">Add Book</Link>
                        </Nav.Link>
                        <Nav.Link>Author</Nav.Link>
                        <Nav.Link>Add Author</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;