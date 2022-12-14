import Carousel from 'react-bootstrap/Carousel';
import Klinov2 from '../assets/Klinov2.jpeg';
import Klinov3 from '../assets/Klinov3.jpeg';
import Klinov4 from '../assets/Klinov4.jpeg';
import Klinov5 from '../assets/Klinov5.jpeg';
import Klinov6 from '../assets/Klinov6.jpeg';
import Klinov7 from '../assets/Klinov7.png';

const Slider = () => {
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
                    Арт-вёска Каптаруны
                    </h3>
                    <p></p>
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
                    Проект «Кодекс»
                    </h3>
                    <p> </p>
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
                    Это наш Минск, его послевоенная сталинская архитектура.
                    </h3>
                    <p></p>
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

export default Slider