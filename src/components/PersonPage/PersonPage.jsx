import { Alert, Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Slider from './Slider'
import styles from './PersonPage.module.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import YoutubePlayer from 'react-youtube';
import { useSelector } from 'react-redux';
import dataSelectors from '../../store/reducers/dataReducer/dataSelectors';
import { useTranslation } from 'react-i18next';

const PersonPage = () => {
    const params = useParams()
    const { t } = useTranslation()
    const celebrity = useSelector(dataSelectors.celebrityByIdSC(params.id))

    return celebrity && <div>
        <Slider celebrity={celebrity}/>
        <br></br>
        <h1 className={`${styles.mainTitle}`}>{t('biographyText')}</h1>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">{t('youthText')}</h3>
                <p>
                    {celebrity.text[0]}
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">{t('adulthoodText')}</h3>
                <p>
                    {celebrity.text[1]}
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">{t('oldageText')}</h3>
                <p>
                    {celebrity.text[2]}
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <Alert variant='light'>
            <Alert.Heading>{t('additionalInfoText')}</Alert.Heading>
            <p className={`${styles.info}`}>
                <YoutubePlayer
                    id="Yt"
                    videoId={celebrity.youtubeVideoUrl}
                    playbackState="unstarted"
                    className={styles.Content}
                    configuration={{
                        showinfo: 0,
                        controls: 0,
                        loop: 1,
                        rel: 0
                    }}
                />
                
                <div className={styles.mapWrapper}>
                    <iframe width='100%' height='100%' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={celebrity.olEmbedUrl}></iframe><br/>
                </div>
            </p>
        </Alert>
    </div>
}

export default PersonPage