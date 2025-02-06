import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Application from './application';
import DriverApplicationForm from '@components/forms/driverapplicationform';
import application_img_1 from '@assets/img/red-truck.png';
import application_img_2 from '@assets/img/cascadia-black-1.png';



const ContactFrom = () => {

    const [formInputRef,setFormInputRef] = useState(null);
    const handleFocus = () => {
        console.log('Form Input Ref:', formInputRef);
        if (formInputRef && formInputRef.current) {
            formInputRef.current.scrollIntoView({ behavior: 'smooth',block:'center'});
            formInputRef.current.focus();
        }
    }
    
    return (
        <section style={{marginTop:'-80px'}}>
            <section className="about__3 about__gray-bg p-relative pb-20" id='section-1'>
                <div className="container">
                    <div className="row align-items-center wow fadeInU" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about__3-img-wrapper p-relative mb-60">
                                <div className="about__3-main w-img">
                                    <Image
                                        src={application_img_2}
                                        layout="responsive"
                                        width={500}
                                        height={300}
                                        alt="About Image 3"
                                    />
                                </div>
                                <div className="about__3-text clip-box-sm">
                                    <span><i className="far fa-trophy-alt"></i></span>
                                    <h4 className="about__3-title" onClick={handleFocus} style={{cursor:'pointer'}}>Apply Now</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about__3-content mb-60">
                                <div className="section__title mb-30">
                                    <span className="sub-title">drive with us</span>
                                    <h2 className="title">Competitive Pay</h2>
                                </div>
                                <div className="about__3-content-inner p-relative">
                                    <div className="about__3">
                                        <p>
                                            A higher salary or mileage-based compensation to reflect their dedication and time away from home.
                                            Starting at $0.50 cpm and 15,000 monthly miles guaranteed. $110k annually, not including safety bonuses.
                                        </p>
                                        <p>
                                            Benefits Package: Health, dental, vision, and life insurance, as well as retirement plans like 401(k) or pension plans.
                                        </p>
                                        <p>
                                            Paid Time Off: Generous vacation days, sick leave, and holidays to allow for rest and personal time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about__3 p-relative pb-20" id='section-2'>
                <div className="container">
                    <div className="row align-items-center wow fadeInU" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about__3-content mb-60">
                                <div className="section__title mb-30">
                                    <span className="sub-title">drive with us</span>
                                    <h2 className="title">Incentives and Benefits for Drivers</h2>
                                </div>
                                <div className="about__3-content-inner p-relative">
                                    <div className="about__3">
                                        <p>
                                            Bonuses: Safety bonuses, fuel efficiency bonuses, or referral bonuses to incentivize good performance.
                                        </p>
                                        <p>
                                            Comfortable Equipment: Well-maintained, modern trucks with amenities like comfortable seats, and refrigerators.
                                        </p>
                                        <p>
                                            Flexible Scheduling: Options for flexible scheduling, like choosing routes or having predictable schedules.
                                        </p>
                                        <p>
                                            Recognition and Rewards: Programs to recognize and reward safe driving, years of service, or exceptional performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about__3-img-wrapper p-relative mb-60">
                                <div className="about__3-main w-img">
                                    <Image
                                        src={application_img_1}
                                        layout="responsive"
                                        width={500}
                                        height={300}
                                        alt="About Image 3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-area contact--area pt-20 pb-110 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s" id='section-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-6 col-lg-5">
                            <h2 className='mb-15'>MESSAGE TO DRIVERS</h2>
                            <h5 className='mb-12'>Drivers, You&apos;re the Lifeblood of Our Company!</h5>
                            <p style={{ textAlign: 'justify' }}>At Golden Mile, we understand that our drivers are most valuable asset. Without you, our wheel wouldn&apos;t turn. That&apos;s why we are committed to providing a safe and supportive environment that allow you to thrive.</p>

                            <h6>Join our Team and enjoy:</h6>

                            <ol>
                                <li>- Competitive pay and benefits package</li>
                                <li>- Flexible routes and schedules to fit your lifestyle</li>
                                <li>- A supportive team environment that prioritizes safety above all else</li>
                                <li>- Recognition and rewards for your safe driving habits</li>
                            </ol>
                            <p style={{ textAlign: 'justify' }}>We believe that safety is everyone&apos;s responsibility, and we are committed to providing the lesources and support you need to get home safely to your loved ones after every trip.</p>
                            <p style={{ textAlign: 'justify' }}>Our goal is to create a culture of safety, where every driver feels valued, respected, and empowered to make safety their top priority.</p>
                            <p style={{ textAlign: 'justify' }}>If you are a professional driver who shares our commitment to safety and excellence, we want you on our team! Apply now and let&apos;s drive success together!</p>
                        </div>
                        <div className="col-xxl-7 col-xl-6 col-lg-7">
                            <div className="contact-form mb-60">
                                <DriverApplicationForm iR={setFormInputRef} />
                                <p className="ajax-response"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ContactFrom;
