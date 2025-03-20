import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Gold from '../assets/Gold.jpg'
import Standard from '../assets/Standard.jpg'
import Premium from '../assets/Premium.jpeg'
import { Link } from 'react-router-dom';
import './Products.css'

function BasicExample() {
    return (
        <div className='pro pt-4 pb-2 d-flex justify-content-center gap-5 pt-5'>
            <Card className='ca'>
                <Card.Img className='mi' variant="top" src={Standard} alt='Standard'/>
                <Card.Body>
                    <Card.Title>Standard Plan</Card.Title>
                    <Card.Text>
                        Access to Gym equipments
                    </Card.Text>
                    <Button variant="primary" as={Link} to="/login">Subscribe</Button>
                </Card.Body>
            </Card>
            <Card className='ca'>
                <Card.Img className='mi' variant="top" src={Premium} alt='Premium'/>
                <Card.Body>
                    <Card.Title>Premium</Card.Title>
                    <Card.Text>
                        Access to Gym equipments, 15-day free Trainer sessions
                    </Card.Text>
                    <Button variant="primary" as={Link} to="/login">Subscribe</Button>
                </Card.Body>
            </Card>
            <Card className='ca'>
                <Card.Img className='mi' variant="top" src={Gold} alt='Gold'/>
                <Card.Body>
                    <Card.Title>Gold</Card.Title>
                    <Card.Text>
                        Gym is Yours for the month
                    </Card.Text>
                    <Button variant="primary" as={Link} to="/login">Subscribe</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BasicExample;