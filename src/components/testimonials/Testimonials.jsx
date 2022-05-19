import React from 'react'


import './testimonials.css'
import AVIR1 from '../../assets/ma.jpg'
import AVIR2 from '../../assets/e.jpg'
import AVIR3 from '../../assets/k.jpg'
import AVIR4 from '../../assets/m.jpg'


// import Swiper core and required module
//import {Navigation, Pagination, Scrollbar, Ally} from 'swiper';
//import {Swiper, SwiperSide } from 'swiper/react';

// Import Swiper Style
//import 'swiper/css'
//import 'swiper/css/pagination';
/* <Swiper className='container testimonials_container'>
            {
                   data.map(({avatar, name, review},index) =>{
                       return (
                        <SwiperSlide key={index} className='testimonial'>
                            <div className='client__avatar'>
                                <img src={avatar} alt="" />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client_review'>
                                {review}
                            </small>
                        </SwiperSlide>

                       )
                   })
               }
            </Swiper>  */


const data = [
    {
        avatar: AVIR1,
        name: 'Matiayas Mengistie',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis laboriosam doloremque labore accusantium consequatur facilis voluptatibus architecto officiis eligendi excepturi minus, vero eius culpa nesciunt corporis? Atque, deserunt repellendus!'
    },
    {
        avatar: AVIR2,
        name: 'Ehtaferahu Ssisay',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis laboriosam doloremque labore accusantium consequatur facilis voluptatibus architecto officiis eligendi excepturi minus, vero eius culpa nesciunt corporis? Atque, deserunt repellendus!'
    },
    {
        avatar: AVIR3,
        name: 'Kibiru Tilahun',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis laboriosam doloremque labore accusantium consequatur facilis voluptatibus architecto officiis eligendi excepturi minus, vero eius culpa nesciunt corporis? Atque, deserunt repellendus!'
    },
    {
        avatar: AVIR4,
        name: 'Meseret Amare',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis laboriosam doloremque labore accusantium consequatur facilis voluptatibus architecto officiis eligendi excepturi minus, vero eius culpa nesciunt corporis? Atque, deserunt repellendus!'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5> Review from clients </h5>
            <h2>Testimonials</h2>
            <div className='container testimonials_container'>
            {
                   data.map(({avatar, name, review},index) =>{
                       return (
                        <article key={index} className='testimonial'>
                            <div className='client__avatar'>
                                <img src={avatar} alt="" />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client_review'>
                                {review}
                            </small>
                        </article>

                       )
                   })
               }
            </div>
        </section>
    )
}

export default Testimonials