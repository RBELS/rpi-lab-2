import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Slider from '../Slider'
import styles from './PersonPage.module.css'

const PersonPage = () => {
    const params = useParams()

    return <div>
        <Slider/>

        <Container>
            <Tab.Container id = "left-tabs" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className='flex-column mt-5'>
                            <Nav.Item>
                                <Nav.Link eventKey="first"> Youth</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"> Adult</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"> Old Age</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h3><br></br>Юношество</h3>
                                <p>
                                Маці была інжынерам-праграмістам і членам камуністычнай партыі[6]. Пра сваю маці Артур у інтэрв’ю сказаў: «Працаголік. Усё жыццё аддала працы і мне»[6]. Бацька Артура быў спартсменам і мастаком: у маладосці займаўся боксам, стаў майстрам спорту, а пасля займаўся мастацтвам прыкладнога характару — рабіў замовы для калгасаў, саўгасаў, розных інстытутаў[6]. У бацькі Артура былі антысавецкія настроі[7].
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h3><br></br>Взрослость</h3>
                                <p>
                                Пасля заканчэння інстытута ўцягнуўся ў сваю спецыяльнасць «горадабудаўніцтва». Яшчэ ў студэнцкія гады Артур Клінаў займаўся навуковым даследаваннем беларускай архітэктуры савецкага перыяду (асабліва т.зв. мінскага «сталінскага ампіру» — 1930—1950-я гады), што пазней рэалізуецца ў значныя праекты: студэнцкае даследаванне стала канцэптуальным падмуркам для стварэння фотаальбома «Горад Сонца» (2005), аўтабіяграфічнага рамана «Мінск. Горад Сонца» (2006) і ўрбаністычна-культурнай канцэпцыі «Горад Сонца-2».
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <h3><br></br>Старость</h3>
                                <p>
                                   1986: персанальная кватэрная выстаўка (г. Мінск, кватэра Артура Клінава) <br></br>
                                    1987: «Вясновыя песні звышчалавека» (г. Мінск, кватэрная выстаўка) <br></br>
                                    1994: галерея «Vita Nova» (г. Мінск, Беларусь)<br></br>
                                    1995: праект «Смерць Піянера» — галерэя незалежнага мастацтва «Шостая лінія» (г. Мінск, Беларусь)<br></br>
                                    1996: праект «Смерць Піянера-2» — галерэя незалежнага мастацтва «Шостая лінія» (г. Мінск, Беларусь)<br></br>
                                    1998: праект «Калумбарый сусветнай літаратуры» — Цэнтр сучаснага мастацтва «Уяздоўскі палац» (г. Варшава, Польшча)<br></br>
                                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                                    trtertretertertertert

                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    </div>
}

export default PersonPage