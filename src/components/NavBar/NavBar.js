import styles from './NavBar.module.css'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container fluid>
                <Navbar.Brand href='#'>Photographers</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Celebrities</Nav.Link>
                    </Nav>
                    <Form className='d-flex'>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            className='me-2'
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}

export default NavBar