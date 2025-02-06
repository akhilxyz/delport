import Link from 'next/link';
import React from 'react';
import about_img_2 from '@assets/img/about/about-3-1.png';
import about_img_3 from '@assets/img/about/about-page-1.jpg';
import Image from 'next/image';

const AboutUsTwo = () => {
    return (
        <section className="about__3 about__gray-bg p-relative pt-120 pb-60">
            <div className="container">
                <div className="row align-items-center wow fadeInU" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__3-img-wrapper p-relative mb-60">
                            <div className="about__3-top w-img">
                                <Image
                                    src={about_img_2}
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                    alt="About Image 2"
                                />
                            </div>
                            <div className="about__3-main w-img">
                                <Image
                                    src={about_img_3}
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                    alt="About Image 3"
                                />
                            </div>
                            <div className="about__3-text clip-box-sm">
                                <span><i className="far fa-trophy-alt"></i></span>
                                <h4 className="about__3-title">8 Years of experience</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__3-content mb-60">
                            <div className="section__title mb-30">
                                <span className="sub-title">about us</span>
                                <h2 className="title">Reliable Nationwide Freight Delivery Services</h2>
                            </div>
                            <div className="about__3-content-inner p-relative">
                                <div className="about__3">
                                    <p>Golden Mile Enterprises is a leading example of what a Carrier should embody. With over 350+ power units and over 700+ trailers we are delivering consumer goods safely and efficiently across the nation.
                                        With four Terminals strategically placed in Indianapolis IN, San Bernardino CA, Trenton NJ and Oklahoma City OK to ensure we are able to provide our customers with reliable service options in and out of the hottest markets.
                                    </p>
                                    <p>We are proud to offer dedicated TL, LTL, Solo and Team Capacity in an ever-changing market. We offer our customers transparency via our GPS tracking service as well as EDI capabilities.
                                        Our support team is available 24/7 and offers pur customers the unique ability to track their shipments with ease whenever they require. With experience in handling high value. high profile freight and meeting strict customer parameters in OTD and Safety, we understand how important it is for a customer to have-24/7 access to a team of professionals that are willing and capable of assisting them in tracking their shipments.
                                        At Golden Mile, Customer Service is one of our top priorities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsTwo;