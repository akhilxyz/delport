import review_data from '@data/review-data';
import Image from 'next/image';
import React from 'react';
import testimonial_bg from '@assets/img/testimonial/testimonial-bg.png';

//swiper style
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Autoplay } from 'swiper';
import { auto } from '@popperjs/core';


const TestimonialArea = () => {
    return (
        <section className="testimonial-area testimonial-space pb-60 pt-30 bg-css"
            style={{ backgroundImage: `url(${testimonial_bg.src})`, position: 'relative'}}>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="col-xl-5" >
                        <div className="section__title text-center mb-35">
                            <span className="sub-title">testimonials</span>
                            <h2 className="title">Customer feedbacks</h2>
                        </div>
                        <div className="col-xl-5 col-lg-4 col-12" style={{ position: 'absolute', right: 300 ,top:150}}>
                            <div className="services-two-nav dp-gallery-nav text-end">
                                <div className="services-button-prev"><i className="fas fa-long-arrow-left"></i></div>
                                <div className="services-button-next"><i className="fas fa-long-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-box wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                    <div className="testimonial-active testimonial-one">
                        <div>
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                slidesPerView={3}
                                spaceBetween={32}
                                centeredSlides={true}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                }}

                                navigation={{
                                    nextEl: ".services-button-next",
                                    prevEl: ".services-button-prev",
                                }}
                                // Responsive breakpoints
                                breakpoints={{
                                    1400: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                        spaceBetween: 15,
                                        centeredSlides: false,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        centeredSlides: false,
                                        spaceBetween: 15,
                                    },
                                    576: {
                                        slidesPerView: 1,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    },
                                }}
                            >
                                {
                                    review_data.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div>
                                                <div className="testimonial-shadow">
                                                    <div className="testimonial-items">
                                                        <div className="testimonial__icon rate">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                        <div className="testimonial__text">
                                                            <p>{item.description}</p>
                                                        </div>
                                                        <div className="testimonial__auth ">
                                                            <div className="testimonial__auth-img f-left mr-20">
                                                                <Image src={item.image} quality={100} width={150} height={auto} style={{ width: '150px', height: 'auto' }} alt='Testimonial' />
                                                            </div>
                                                            {/* <div className="testimonial__auth-text fix">
                                                                <h4>{item.name}</h4>
                                                                <span>{item.desination}</span>
                                                            </div> */}
                                                        </div>
                                                        <div className="testimonial__quote-icon quote">
                                                            <i className="fas fa-quote-left"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default TestimonialArea;