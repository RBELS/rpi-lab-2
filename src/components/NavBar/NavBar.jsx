import styles from './NavBar.module.css'
import { Button, Container, Form, Image, Nav, Navbar } from 'react-bootstrap'
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

                    <div className={`${styles.profileLinksWrapper} me-2`}>
                        <a className={`${styles.profileLink}`} href='https://github.com/RBELS'>
                            <Image className={styles.profileImg} src='https://avatars.githubusercontent.com/u/50217581?v=4'/>
                        </a>

                        <a className={`${styles.profileLink}`} href='https://github.com/Nikstanov'>
                            <Image className={styles.profileImg} src='https://m.media-amazon.com/images/I/41R7eDvFFZL._AC_SY580_.jpg'/>
                        </a>

                        <a className={`${styles.profileLink}`} href='https://github.com/IntensioT'>
                            <Image className={styles.profileImg} src='https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg'/>
                        </a>
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