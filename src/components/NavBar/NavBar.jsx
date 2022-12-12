import styles from './NavBar.module.css'
import { Button, Container, Form, Image, Nav, Navbar } from 'react-bootstrap'
import { NavLink as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import dataSelectors from '../../store/reducers/dataReducer/dataSelectors'
import DeveloperItem from './DeveloperItem'

const NavBar = () => {
    // debugger
    const developers = useSelector(dataSelectors.developers)

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

                    <div className={`${styles.profileLinksWrapper} me-2`}>
                        {developers.map(({ imageSrc, githubSrc }) => <DeveloperItem imageSrc={imageSrc} githubSrc={githubSrc} key={githubSrc}/>)}
                    </div>
                    

                    <Form className='d-flex'>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            className='me-3'
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}

export default NavBar