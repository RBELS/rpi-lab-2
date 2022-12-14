import { Container, Card, Button, Form } from 'react-bootstrap'
import styles from './PeopleListPage.module.css'
import { NavLink as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import dataSelectors from '../../store/reducers/dataReducer/dataSelectors';
import Person from './Person';


const PeopleListPage = () => {
    const celebrities = useSelector(dataSelectors.celebrities)
    return <div>
        <Container>
            <h2 className='text-center m-4'>Фотографы</h2>

            <Form className='d-flex'>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className='me-3'
                />
                <Button variant="outline-success">Search</Button>
            </Form>

            <div class="row g-3">
                {celebrities.map((celebrity) => <Person person={celebrity}/>)}
            </div>
        </Container>
    </div>
}

export default PeopleListPage