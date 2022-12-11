import styles from './Developers.module.css'
import { Alert, Image } from 'react-bootstrap'

const Developers = () => {
    return (
        <Alert variant='primary'>
            <Alert.Heading>Разработчики</Alert.Heading>
            <p className={`${styles.developersList}`}>
                <p className={styles.developerInfo}>
                    <a href='https://github.com/Nikstanov'>
                        <Image className={styles.personImage} fluid src='https://m.media-amazon.com/images/I/41R7eDvFFZL._AC_SY580_.jpg'/>
                    </a>
                    <div className={styles.textInfo}>Nikstanov</div>
                </p>
                <p className={styles.developerInfo}>
                    <a href='github.com'>
                        <Image className={styles.personImage} fluid src='https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg' />
                    </a>
                    <div className={styles.textInfo}>
                        <div className={styles.name}>SUS</div>
                    </div>
                </p>
                <p className={styles.developerInfo}>
                    <a href='github.com'>
                        <Image className={styles.personImage} fluid src='https://m.media-amazon.com/images/I/41R7eDvFFZL._AC_SY580_.jpg' />
                    </a>
                    <div className={styles.textInfo}>
                        <div className={styles.name}>Еще никнейм</div>
                    </div>
                </p>
            </p>
        </Alert>
    )
}

export default Developers;