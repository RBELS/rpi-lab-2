import { Alert, Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Slider from '../Slider'
import styles from './PersonPage.module.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import YoutubePlayer from 'react-youtube';
import { useSelector } from 'react-redux';
import dataSelectors from '../../store/reducers/dataReducer/dataSelectors';

const PersonPage = () => {
    const params = useParams()
    const celebrity = useSelector(dataSelectors.celebrityByIdSC(params.id))

    return celebrity && <div>
        <Slider />
        <br></br>
        <h1 className={`${styles.mainTitle}`}>Биография</h1>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Юношество</h3>
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
                <h3 className="vertical-timeline-element-title">Взрослость</h3>
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
                <h3 className="vertical-timeline-element-title">Старость</h3>
                <p>
                    {celebrity.text[2]}
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <Alert variant='primary'>
            <Alert.Heading>Подвал с детьми</Alert.Heading>
            <p className={`${styles.info}`}>
                <YoutubePlayer
                    id="Yt"
                    videoId="_EF4ezvNJXE"
                    playbackState="unstarted"
                    configuration={{
                        showinfo: 0,
                        controls: 0,
                        loop: 1,
                        rel: 0
                    }}
                />
            </p>
        </Alert>
    </div>
}


export default PersonPage