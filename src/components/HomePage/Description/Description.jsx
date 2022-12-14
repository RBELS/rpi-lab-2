import { Alert, Button, Image } from 'react-bootstrap'
import { NavLink as RouterLink } from 'react-router-dom'
import styles from './Description.module.css'

const Description = ({ person }) => {

    return <>
        <Alert variant='primary'>
            <Alert.Heading>Фотографы Беларуси</Alert.Heading>
            <p>
                Добро пожаловать на этот интернет-портал! 
                Тут вы можете найти информацию о наиболее знаменитых белорусских фотографах. 
                Читайте и наслаждайтесь!
            </p>
        </Alert>
        <Alert variant='primary'>
            <Alert.Heading>Деятель дня</Alert.Heading>
            <p className={`${styles.info}`}>
                <Image className={styles.personImage} src={person.photo} />
                <div className={styles.textInfo}>
                    <div className={styles.name}>{person.name}</div>
                    <p className={styles.smallTextDescription}>
                        {person.shortBio}
                    </p>
                    <RouterLink to={`/people/${person.id}`}>
                        <Button variant='primary'>Персональная страница</Button>
                    </RouterLink>
                </div>
            </p>
        </Alert>
    </>
}

export default Description