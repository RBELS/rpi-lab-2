import { Button } from 'react-bootstrap'
import HomePage from './HomePage'
import NotFoundPage from './NotFoundPage'
import NavBar from './NavBar'
import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import PeopleListPage from './PeopleListPage'
import PersonPage from './PersonPage'
import Developers from './Developers'

const App = () => {
    return (
        <>
            <NavBar />
            <div className={styles.pageWrapper}>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/people/' element={<PeopleListPage />}/>
                    <Route path='/people/:id' element={<PersonPage />}/>
                    <Route path='*' element={<NotFoundPage />}/>
                </Routes>
            </div>
        </>
    )
}

export default App
