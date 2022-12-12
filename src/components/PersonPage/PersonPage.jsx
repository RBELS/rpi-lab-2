import { Alert, Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Slider from '../Slider'
import styles from './PersonPage.module.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import YoutubePlayer from 'react-youtube';

const PersonPage = () => {
    const params = useParams()

    return <div>
        Person page. Person Id: {params.id}
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
                    Маці была інжынерам-праграмістам і членам камуністычнай партыі. Пра сваю маці Артур у інтэрв’ю сказаў: «Працаголік. Усё жыццё аддала працы і мне». Бацька Артура быў спартсменам і мастаком: у маладосці займаўся боксам, стаў майстрам спорту, а пасля займаўся мастацтвам прыкладнога характару — рабіў замовы для калгасаў, саўгасаў, розных інстытутаў. У бацькі Артура былі антысавецкія настроі.
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
                    Пасля заканчэння інстытута ўцягнуўся ў сваю спецыяльнасць «горадабудаўніцтва». Яшчэ ў студэнцкія гады Артур Клінаў займаўся навуковым даследаваннем беларускай архітэктуры савецкага перыяду (асабліва т.зв. мінскага «сталінскага ампіру» — 1930—1950-я гады), што пазней рэалізуецца ў значныя праекты: студэнцкае даследаванне стала канцэптуальным падмуркам для стварэння фотаальбома «Горад Сонца» (2005), аўтабіяграфічнага рамана «Мінск. Горад Сонца» (2006) і ўрбаністычна-культурнай канцэпцыі «Горад Сонца-2».
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
                    1986: персанальная кватэрная выстаўка (г. Мінск, кватэра Артура Клінава) <br></br>
                    1987: «Вясновыя песні звышчалавека» (г. Мінск, кватэрная выстаўка) <br></br>
                    1994: галерея «Vita Nova» (г. Мінск, Беларусь)<br></br>
                    1995: праект «Смерць Піянера» — галерэя незалежнага мастацтва «Шостая лінія» (г. Мінск, Беларусь)<br></br>
                    1996: праект «Смерць Піянера-2» — галерэя незалежнага мастацтва «Шостая лінія» (г. Мінск, Беларусь)<br></br>
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