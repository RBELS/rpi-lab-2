import { useTranslation } from 'react-i18next'
import styles from './LanguageSelect.module.css'

const LanguageSelect = () => {
    const { t, i18n } = useTranslation()

    const onLanguageSelect = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return <select onChange={onLanguageSelect} className={`${styles.select} form-select form-select-sm me-4`} aria-label=".form-select-sm example">
        <option value="en">EN</option>
        <option selected value="by">BY</option>
    </select>
}

export default LanguageSelect