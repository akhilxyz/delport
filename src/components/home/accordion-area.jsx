import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import review_data from '@data/review-data';
import { color } from 'framer-motion';




const AccordionArea = () => {
    const accordion_data = [
        {
            id: 1,
            id_2: 'headingOne',
            btn: 'accordion-button',
            aria_expanded: true,
            style: 'accordion-collapse collapse show',
            data_base_target: '#collapseOne',
            aria_controls: 'collapseOne',
            btn_name: 'Terms and Conditions',
            link:{
                Text: 'Read More',
                url: '#',
            },
            description: 'This Privacy Policy explains how Golden Mile Enterprises Inc. We collects, uses, and shares your personal information when you visit on our website.'
        },
        {
            id: 2,
            id_2: 'headingTwo',
            btn: 'accordion-button collapsed',
            aria_expanded: false,
            style: 'accordion-collapse collapse',
            aria_controls: 'collapseTwo',
            data_base_target: '#collapseTwo',
            btn_name: 'Privacy Policy',
            link:{
                Text: 'Read More',
                url: '#',
            },
            description: 'From finance, retail, and travel, to social media, cybersecurity, adtech,and more, market leaders are leveraging web data to maintain their transtadvantage. Discover how it can work for you.'
        }
    ]





    return (
        <section className="acc-testi grey-bg-3 pt-120 pb-35 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="accordion__wrapper accordion__wrapper-1 mb-85 mr-40">
                            <div className="accordion" id="accordionExample">
                                {
                                    accordion_data.map((item) => (
                                        <div className="accordion-item" key={item.id}>
                                            <h2 className="accordion-header">
                                                <button className={item.btn} type="button" data-bs-toggle="collapse"
                                                    data-bs-target={item.data_base_target} aria-expanded={item.aria_expanded} aria-controls={item.aria_controls}>
                                                    {item.btn_name}
                                                </button>
                                            </h2>
                                            <div id={item.aria_controls} className={item.style} aria-labelledby={item.id_2}
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        {item.description}

                                                        {
                                                            item.link &&
                                                            <Link style={{marginLeft: '3px' ,fontWeight: 'bold', color: 'black'}} href={`/${item.link.url}`}>
                                                                {item.link.Text}
                                                            </Link>
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial-two mb-85">
                            <h2 className='mb-15'>
                                Your business deserves
                            </h2>
                            <h2 className='mb-12'>
                                reliable and guaranteed
                            </h2>
                            <h2 className='mb-18'>shipping services</h2>
                            <p>GM understands that small and medium-sized businesses like yours are vital to the U.S. economy. That&apos;s why it&apos;s crucial for you to have dependable and cost-effective shipping solutions.</p>

                            <Link className="fill-btn clip-md-btn" href="/contact" onClick={() => document.getElementById('name').focus()}>Request a Quote</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccordionArea;