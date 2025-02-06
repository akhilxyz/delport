import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import 'react-modal-video/css/modal-video.min.css';
import { getPaddingAndBorder } from 'react-range/lib/utils';

const AboutUs = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const images = sliderRef.current.querySelectorAll('.slide-image');
        let currentIndex = 0;

        const slideShow = () => {
            images.forEach((img, index) => {
                img.style.opacity = index === currentIndex ? '1' : '0';
                img.style.transition = 'opacity 1s ease-in-out';
            });
            currentIndex = (currentIndex + 1) % images.length;
        };

        const interval = setInterval(slideShow, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="about__area-2 pt-30 pb-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <div className="container">
                    <div className="row align-items-center">
                        {/* About Us Content */}
                        <div className="col-lg-5 col-xl-5">
                            <div className="about__content-2 mb-60 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <div className="section__title mb-50">
                                    <span className="sub-title">about us</span>
                                    <h2 className="title">Our Approach, <br />Goal, and Mission</h2>
                                </div>
                                <div className="about__content-tab-2 mt-40">
                                    <ul className="nav mb-5" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active clip-lg-btn" id="approch-tab" data-bs-toggle="tab"
                                                data-bs-target="#approch" type="button" role="tab" aria-controls="approch"
                                                aria-selected="true">our approch</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link clip-lg-btn" id="goal-tab" data-bs-toggle="tab"
                                                data-bs-target="#goal" type="button" role="tab" aria-controls="goal"
                                                aria-selected="false">our goal</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link clip-lg-btn" id="mision-tab" data-bs-toggle="tab"
                                                data-bs-target="#mision" type="button" role="tab" aria-controls="mision"
                                                aria-selected="false">our mision</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent" >
                                        <div className="tab-pane fade show active" id="approch" role="tabpanel" aria-labelledby="approch-tab">
                                            <p>We are an asset-based carrier offers EDI capabilities and a 4:1 trailer ratio for drop solutions. With our 4 terminals strategically placed in San Bernardino CA, Oklahoma City OK, Indianapolis IN, and Trenton NJ, we are able to serve the West, Mid-West, and East Coast Markets.</p>
                                            <div className="about__content-tab-btn mt-35">
                                                <Link className="fill-btn clip-md-btn" href="/about-us">learn more</Link>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="goal" role="tabpanel" aria-labelledby="goal-tab">
                                            <p>Our goal is to drive success for our customers, employees, and communities by delivering goods safely and efficiently. Promoting a culture of positivity and respect where we honor accomplishments that contribute to mutual growth. We want to be the preferred transportation provider, known for our commitment to quality, integrity and customer satisfaction.</p>
                                            <div className="about__content-tab-btn mt-35">
                                                <Link className="fill-btn clip-md-btn" href="/about-us">learn more</Link>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="mision" role="tabpanel" aria-labelledby="mision-tab">
                                            <p>Our Mission is to deliver exceptional transportation services through safety and dedication, providing cost-effective logistics solutions. Creating long-term relationships with our Customers and Partners.</p>
                                            <div className="about__content-tab-btn mt-35">
                                                <Link className="fill-btn clip-md-btn" href="/about-us">learn more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Slider */}
                        <div className="col-lg-7 col-xl-7">
                            <div className="about__img-2 mb-30 ml-0 w-img p-relative wow fadeInLeft" data-wow-duration="1.5s"
                                data-wow-delay=".3s">
                                <div className="image-slider" ref={sliderRef} style={{ position: 'relative', overflow: 'hidden', height: '400px' }}>
                                    <img src="assets\img\slider\slider -org.png" alt="About Us 1" className="img-fluid slide-image" style={{ position: 'absolute', top: '0px', left: '0px', width: '750px', height: '350px', opacity: '1' }} />
                                    <img src="assets\img\slider\slider-3 - org.png" alt="About Us 2" className="img-fluid slide-image" style={{ position: 'absolute', top: '0px', left: '0px', width: '750px', height: '350px', opacity: '0' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
