import { Carousel } from 'react-bootstrap';
import './Items.css'
import Hero2 from '../assets/Hero2.jpg'
import Hero4 from '../assets/Hero4.jpeg'
import Hero5 from '../assets/Hero5.jpeg'


function Items() {
    return (
        <Carousel className='bbg' slide={false}>
            <Carousel.Item className='im1 mx-auto' interval={1500}>
                <img className='im' src={Hero4}></img>
                <Carousel.Caption>
                    <h3>Cardio Exercises</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, animi?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='im1 mx-auto' interval={1000}>
                <img className='im' src={Hero2}></img>
                <Carousel.Caption>
                    <h3>Explosive Workouts</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='im1 mx-auto' interval={1000}>
                <img className='im' src={Hero5}></img>
                <Carousel.Caption>
                    <h3>Machine Exercises</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Items;