import { Alert, Button, Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { NavLink as RouterLink } from 'react-router-dom'
import styles from './Description.module.css'

const Description = ({ person }) => {
    const { t } = useTranslation()

    return <>
        <Alert variant='primary'>
            <Alert.Heading>{t('welcomeHeaderText')}</Alert.Heading>
            <p>
                {t('welcomeText')}
            </p>
        </Alert>
        <Alert variant='primary'>
            <Alert.Heading>{t('artistOfTheDayText')}</Alert.Heading>
            <p className={`${styles.info}`}>
                <Image className={styles.personImage} src={person.photo} />
                <div className={styles.textInfo}>
                    <div className={styles.name}>{person.name}</div>
                    <p className={styles.smallTextDescription}>
                        {person.shortBio}
                    </p>
                    
                    <RouterLink to={`/people/${person.id}`}>
                        <Button variant='primary'>{t('personalPageText')}</Button>
                    </RouterLink>
                </div>
            </p>
        </Alert>
    </>
}

export default Description