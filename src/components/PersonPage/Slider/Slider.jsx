import Carousel from 'react-bootstrap/Carousel'
import styles from './Slider.module.css'

const Slider = ({ celebrity }) => {

    return (
        <Carousel>
            {celebrity.carouselImages.map(imageSrc => <Carousel.Item>
                <img
                    className={`d-block w-100`}
                    src =  {imageSrc}
                    alt = {celebrity.name}
                />
                <Carousel.Caption>
                    <h3>
                        {celebrity.name}
                    </h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            )}
            
        </Carousel>
    )
}

export default Slider