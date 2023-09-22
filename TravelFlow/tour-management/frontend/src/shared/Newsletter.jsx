import React from 'react'
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'



const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe for travel insights.</h2>
                            <div className="newsletter__input">
                                <input type="email" placeholder='Enter your email'/>
                                <button className='btn newsletter__btn'>SUBSCRIBE</button>
                            </div>

                            <p>"Subscribe to our exclusive newsletter and unlock a world of travel inspiration, insider tips, and unbeatable deals! Stay updated with the latest destinations, trending experiences, and curated itineraries tailored just for you. Join our community of wanderers and embark on unforgettable journeys with us. Don't miss out – subscribe now and let the adventure begin!"</p>
                        </div>

                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter
