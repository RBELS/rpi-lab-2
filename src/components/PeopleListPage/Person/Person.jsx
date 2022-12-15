import styles from './Person.module.css'
import { NavLink as RouterLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { t } from 'i18next'

const Person = ({ person: { name, photo, id, shortBio} }) => {
    return <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
            <img src={photo}
            alt={name}
            className="card-img-top"></img>
            <div className = "card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{shortBio}</p>
                <RouterLink to={`/people/${id}`}>
                    <Button variant='primary'>{t('personalPageText')}</Button>
                </RouterLink>
            </div>
        </div>
    </div>
}

export default Person