import React, { Component} from "react";
import Carousel from 'react-bootstrap/Carousel';
import Klinov1 from '../assets/Klinov1.png';
import Klinov2 from '../assets/Klinov2.jpeg';
import Klinov3 from '../assets/Klinov3.jpeg';
import Klinov4 from '../assets/Klinov4.jpeg';
import Klinov5 from '../assets/Klinov5.jpeg';
import Klinov6 from '../assets/Klinov6.jpeg';

export default class Slider extends Component {
    render() {
        return(
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = {Klinov2}
                        alt = "Klinov"
                    />
                    <Carousel.Caption>
                        <h3>
                            Klinov
                        </h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = {Klinov3}
                        alt = "Klinov"
                    />
                    <Carousel.Caption>
                        <h3>
                        
                        </h3>
                        <p> Арт-вёска Каптаруны</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = {Klinov4}
                        alt = "Klinov"
                    />
                    <Carousel.Caption>
                        <h3>
                        
                        </h3>
                        <p> Проект белорусского павильона назывался «Кодекс»</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = {Klinov5}
                        alt = "Klinov"
                    />
                    <Carousel.Caption>
                        <h3>
                        
                        </h3>
                        <p>благодаря Артуру Клинову мы увидели в новом свете другое привычное явление — это наш Минск, его послевоенная сталинская архитектура.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = {Klinov6}
                        alt = "Klinov"
                    />
                    <Carousel.Caption>
                        <h3>
                        
                        </h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}