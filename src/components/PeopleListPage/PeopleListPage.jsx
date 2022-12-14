import { Container, Card, Button } from 'react-bootstrap'
import styles from './PeopleListPage.module.css'
import Klinov1 from '../../assets/Klinov1.JPG';
import Barazna1 from '../../assets/Barazna1.jpg';
import Alexeev1 from '../../assets/Alexeev1.jpg';
import { NavLink as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import dataSelectors from '../../store/reducers/dataReducer/dataSelectors';
import Person from './Person';


const PeopleListPage = () => {
    const celebrities = useSelector(dataSelectors.celebrities)
    return <div>
        <Container>
            <h2 className='text-center m-4'>Фотографы</h2>
            <div class="row g-3">
                {celebrities.map((celebrity) => <Person person={celebrity}/>)}
            </div>

        </Container>
    </div>
}

export default PeopleListPage