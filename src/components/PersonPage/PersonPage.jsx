import { useParams } from 'react-router-dom'
import styles from './PersonPage.module.css'

const PersonPage = () => {
    const params = useParams()

    return <div>
        Person page. Person Id: {params.id}
    </div>
}

export default PersonPage