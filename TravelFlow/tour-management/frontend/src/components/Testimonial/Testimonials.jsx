import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slideToShow:3,
        
        responsive:[
            {
                breakpoint:992,
                setting:{
                    slideToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
                {
                    breakpoint:576,
                    setting:{
                        slideToShow:1,
                        slideToScroll:1,
                        
                    },
                }
            
        ]
    }

    return (


        <Slider {...settings}>
            <div className='testimonial py-4 px-3'>
                <p>
                "I can't believe how seamless and enjoyable my recent trip was with this travel app.
                 The personalized recommendations were spot on, and I got to explore hidden gems I 
                 would have never discovered on my own. The app's attention to detail and user-friendly
                 interface truly sets it apart!"
                </p>
                    
                <div className='d-flex align-items-center gap-4 mt-3'>
    <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
    <h5 className='mb-0 mt -1'>Jade Smith</h5>
    <p>
        Explorer
    </p>
</div>

                
            </div>

            <div className='testimonial py-4 px-3'>
                <p>
                I've used several travel apps before, but this one exceeded all my expectations. The curated experiences were so well thought out, and I felt like every moment of my trip was maximized. From local insights to convenient booking options, this app made my travel experience stress-free and unforgettable!"
                </p>
                    
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                        <h5 className='mb-0 mt -3'>Tresa</h5>
                        <p>
                            Customer
                        </p>
                    </div>
                    

                    
                
            </div>

            <div className='testimonial py-4 px-3'>
                <p>
                I've used several travel apps before, but this one exceeded all my expectations. The curated experiences were so well thought out, and I felt like every moment of my trip was maximized. From local insights to convenient booking options, this app made my travel experience stress-free and unforgettable!"
                </p>
                    
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                        <h5 className='mb-0 mt -3'>Alex</h5>
                        <p>
                            Customer
                        </p>
                    </div>
                    

                    
                
            </div>

        </Slider>
    )
}

export default Testimonials
