import { Button } from 'react-bootstrap'
import HomePage from './HomePage'
import NavBar from './NavBar'
import styles from './App.module.css'

const App = () => {
    return (
        <>
            <NavBar />
            <div className={styles.pageWrapper}>
                <HomePage />
            </div>
        </>
    )
}

export default App
