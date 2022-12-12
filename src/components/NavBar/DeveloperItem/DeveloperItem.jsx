import { Image } from 'react-bootstrap'
import styles from './DeveloperItem.module.css'

const DeveloperItem = ({ imageSrc, githubSrc }) => {
    return <a className={`${styles.profileLink}`} href={githubSrc}>
        <Image className={styles.profileImg} src={imageSrc}/>
    </a>
}

export default DeveloperItem