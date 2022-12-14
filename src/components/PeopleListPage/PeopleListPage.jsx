import { Container, Card, Button, Form } from 'react-bootstrap'
import styles from './PeopleListPage.module.css'
import { NavLink as RouterLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import dataSelectors from '../../store/reducers/dataReducer/dataSelectors';
import Person from './Person';
import { useState } from 'react';
import { useEffect } from 'react';


const PeopleListPage = () => {
    const location = useLocation()

    const [searchData, setSearchData] = useState('')
    const celebrities = useSelector(dataSelectors.celebritiesFiltered(searchData))

    const onSearchDataChange = (event) => {
        setSearchData(event.target.value)
    }

    useEffect(() => {
        if (location.state && location.state.searchData)
            setSearchData(location.state.searchData)
    }, [location])

    return <div>
        <Container>
            <h2 className='text-center m-4'>Фотографы</h2>

            <Form className={`d-flex ${styles.searchForm}`}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className='me-3'
                    value={searchData || ''}
                    onChange={onSearchDataChange}
                />
                <Button variant="outline-success">Search</Button>
            </Form>

            <div className="row g-3">
                {celebrities.map((celebrity) => <Person person={celebrity} key={celebrity.name}/>)}
            </div>
        </Container>
    </div>
}

export default PeopleListPage