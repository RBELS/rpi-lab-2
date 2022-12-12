import { Container, Card, Button } from 'react-bootstrap'
import styles from './PeopleListPage.module.css'
import Klinov1 from '../../assets/Klinov1.JPG';
import Barazna1 from '../../assets/Barazna1.jpg';
import Alexeev1 from '../../assets/Alexeev1.jpg';
import { NavLink as RouterLink } from 'react-router-dom'


const PeopleListPage = () => {
    return <div>
        <Container>
            <h2 className='text-center m-4'>Фотографы</h2>
            <div class="row g-3">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <img src={Klinov1}
                        alt="Клинов"
                        class="card-img-top"></img>
                        <div class = "card-body">
                            <h5 class="card-title"> Клинов </h5>
                            <p class="card-text">Очень крутой тип</p>
                            <RouterLink to='/people/0'>
                                 <Button variant='primary'>Персональная страница</Button>
                             </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                        <img src={Alexeev1}
                        alt="Алексеев"
                        class="card-img-top"></img>
                        <div class = "card-body">
                            <h5 class="card-title"> Алексеев </h5>
                            <p class="card-text">Мега сексуальный парень</p>
                            <RouterLink to='/people/1'>
                                 <Button variant='primary'>Персональная страница</Button>
                             </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                        <img src={Barazna1}
                        alt="Баразна"
                        class="card-img-top"></img>
                        <div class = "card-body">
                            <h5 class="card-title"> Баразна </h5>
                            <p class="card-text">Какой-то укуренный чел</p>
                            <RouterLink to='/people/2'>
                                 <Button variant='primary'>Персональная страница</Button>
                             </RouterLink>
                        </div>
                    </div>
                </div>
                
            </div>

        </Container>
    </div>
}

export default PeopleListPage