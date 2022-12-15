import { useTranslation } from 'react-i18next'
import styles from './LanguageSelect.module.css'

const LanguageSelect = () => {
    const { t, i18n } = useTranslation()

    const onLanguageSelect = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return <select className={styles.lngSelect} onChange={onLanguageSelect}>
        <option selected value='by'>BY</option>
        <option value='en'>EN</option>
    </select>
}

export default LanguageSelect