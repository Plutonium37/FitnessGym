import React from 'react'
import { Container ,Button} from 'react-bootstrap'
import "./Hero.css"
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='bggg d-flex flex-column align-items-center justify-content-center'>
      <section className='bb'>
        <div className='d-flex flex-column'>
          <h1>
            Transform Your Body
          </h1>
          <h5 className='text-start'>
            Your Gym Journey Begins Here
          </h5>
        </div>
        <div className='bbb'>
          <Button className='rounded-pill aa btn-outline-warning' as={Link} to='/login'>Get Started</Button>
        </div>
      </section>
    </div>
  )
}

export default Hero