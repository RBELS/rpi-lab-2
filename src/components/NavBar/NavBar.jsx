import styles from './NavBar.module.css'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { NavLink as RouterLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container fluid>
                <Navbar.Brand as={RouterLink} to='/'>Photographers</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link as={RouterLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={RouterLink} to='/people'>Celebrities</Nav.Link>
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