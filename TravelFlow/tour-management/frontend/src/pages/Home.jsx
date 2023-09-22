import React from 'react'
import '../styles/home.css'
import {Container , Row , Col } from 'reactstrap'
import heroImage from '../assets/images/hero-img01.jpg'
import heroImage02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from './../shared/Subtitle'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png';

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'


const Home = () => {
    return (
        <>
         <section>
          <Container>
            <Row>
              <Col lg='6'>
               <div className="hero__content">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt=''/>
                <h1>
                  Traveling Creates door to creating
                  <span className='highlight'> memories
                   
                  </span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe, consequuntur,
                   non vero cumque ipsam dignissimos tenetur, quaerat cupiditate est vel distinctio 
                   ut veniam illo repellendus nemo a illum? Sit!</p>
               </div>
              </Col>

              <Col lg='2'>
                <div className="hero__img-box">
                  <img src={heroImage} alt=''/>
                </div>
              </Col>

              <Col lg='2'>
                <div className="hero__img-box mt-4">
                  <video src={heroVideo} alt='' controls/>
                </div>
              </Col>

              <Col lg='2'>
                <div className="hero__img-box mt-5">
                  <img src={heroImage02} alt=''/>
                </div>
              </Col>

              <SearchBar/>
            </Row>
          </Container>
         </section>

         <section>
          <Container>
            <Row>
              <Col lg='3'>
                <h5 className='services__subtitle'>What we serve</h5>
                <h5 className='services__subtitle'>We offer our best services</h5>
              </Col>
              <ServiceList/>
            </Row>
          </Container>
         </section>
         <section>
<Container>
  <Row>
    <Col lg='12' className='mb-5'>
      <Subtitle subtitle={'Explore'}/>
      <h2 className='featured__tour-title'>
       Our featured tour  
      </h2>   
    </Col>
    <FeaturedTourList />

  </Row>
</Container>
</section>
         {/* ======feature tour section end */}

         {/* ======experience section start */}
         <section>
          <Row>
            <Col lg='6'></Col>
            <div className='experience__content'>
              <Subtitle subtitle={"experience"}/>
              <h2>With our experience <br /> We will serve you </h2>
              <p>
              "With our extensive experience in curating bespoke travel experiences, <br/>we understand the importance of personalized adventures tailored to your preferences.
               <br/>Let us guide you to extraordinary destinations and create memories that will last a lifetime."
              </p>

              <div className="counter__wrapper d-flex align-item-center gap-5">
                <div className='counter__box'>
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>

                <div className='counter__box'>
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>

                <div className='counter__box'>
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>

              </div>
          
            </div>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
         </section>
         {/* ======gallery section end */}
         <section>
          <Container>
            <Row>
              <Col lg='12'>
                <Subtitle subtitle={'Gallery'}/>
                <h2 className="gallery__title">Visti our customer tour gallery</h2>
              </Col>
              <Col lg='12'>
                <MasonryImagesGallery/>
              </Col>
            </Row>
          </Container>
         </section>
         {/* ======gallary section end*/}

         {/* ======testimony section start */}
          <section>
            <Row>
              <Col lg='12'>
                <h2 className='testimonial__title'>What our customers say about us</h2>

              </Col>
              <Col lg='12'>
                <Testimonials/>
              </Col>
            </Row>
          </section>
         {/* ======testimony section start */}
         <Newsletter/>
        </>
    )
}

export default Home
