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
                <Navbar.Brand>
                    <Link to="/"><img src="/images/logo.png" alt="LOGO_IMAGE" width="80" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link className={location.toLowerCase() === 'books' ? 'text-indigo-600' : 'text-black'} to="/books">Books</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className={location.toLowerCase() === 'add-book' ? 'text-indigo-600' : 'text-black'} to="/add-book">Add Book</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className={location.toLowerCase() === 'authors' ? 'text-indigo-600' : 'text-black'} to="/authors">Authors</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className={location.toLowerCase() === 'add-author' ? 'text-indigo-600' : 'text-black'} to="/add-author">Add Author</Link>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;