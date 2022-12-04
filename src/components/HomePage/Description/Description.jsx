import { Alert, Button, Image } from 'react-bootstrap'
import { NavLink as RouterLink } from 'react-router-dom'
import styles from './Description.module.css'

const Description = () => {

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
                <Image className={styles.personImage} fluid src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Artur_Klinau_-_Minsk_-_2014_AD.JPG/440px-Artur_Klinau_-_Minsk_-_2014_AD.JPG' />
                <div className={styles.textInfo}>
                    <div className={styles.name}>Артур Аляксандравіч Клінаў</div>
                    <div className={styles.yearsOfLife}>Годы жизни: 1965 - н.в.</div>
                    <p className={styles.smallTextDescription}>
                        &emsp;Артур Аляксандравіч Клінаў (нар. 5 верасня 1965, Мінск) — беларускі мастак, 
                        акцыяніст, дызайнер, фатограф, літаратар, сцэнарыст, галоўны рэдактар часопіса «pARTisan» (2002).

                        <br />&emsp;Яркі прадстаўнік неафіцыйнага, нефармальнага мастацтва, авангардыст, канцэптуальны мастак, які 
                        ўпершыню заявіў пра сябе ў канцы 1980-х у Беларусі. Аўтар урбаністычна-культурнай канцэпцыі 
                        «Горад Сонца» — захавання архітэктурнай унікальнасці цэнтральнай часткі Мінска (Беларусь).
                    </p>
                    <RouterLink to='/people/0'>
                        <Button variant='primary'>Персональная страница</Button>
                    </RouterLink>
                </div>
            </p>
        </Alert>
    </>
}

export default Description