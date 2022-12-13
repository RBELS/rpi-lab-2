import { useSelector } from 'react-redux'
import dataSelectors from '../../store/reducers/dataReducer/dataSelectors'
import Description from './Description/Description'
import styles from './HomePage.module.css'

const HomePage = () => {    
    const celebrity = useSelector(dataSelectors.celOfTheDay)

    return (
        <div className={styles.wrapper}>
            <Description person={celebrity}/>
        </div>
    )
}

export default HomePage