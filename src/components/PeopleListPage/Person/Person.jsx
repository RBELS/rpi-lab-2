import styles from './Person.module.css'
import { NavLink as RouterLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Person = ({ person: { name, photo, id } }) => {
    return <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <img src={photo}
            alt={name}
            class="card-img-top"></img>
            <div class = "card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Какой-то укуренный чел</p>
                <RouterLink to={`/people/${id}`}>
                    <Button variant='primary'>Персональная страница</Button>
                </RouterLink>
            </div>
        </div>
    </div>
}

export default Person