import Link from 'next/link';
import React from 'react';

const Contact = () => {
    const contactData = [
        {
            id: 1,
            icon: 'flaticon-telephone-call',
            contact: 'tel:+16262163227',
            infoText: 'Call us now',
            other: '+1 (626) 216-3227'
        },
        {
            id: 2,
            icon: 'flaticon-envelope',
            contact: 'mailto:info@goldenmileinc.com',
            infoText: 'send email',
            other: 'info@goldenmileinc.com'
        },
        {
            id: 3,
            icon: 'flaticon-pin',
            contact: 'https://maps.app.goo.gl/cDGPFewwQJsBYRYh6',
            infoText: 'visit office',
            other: '1702 S Belmont Ave, Indianapolis, IN 46221, USA'
        },
    ]
    return (
        <div className="contact--wrapper mb-60">
            <div className="section__title mb-45">
                <span className="sub-title">contact with us</span>
                <h2 className="title">Need to ask us a question? </h2>
                <p className='mt-10'>Fill out the form and we&apos;ll get back to you within 24-48 hours.</p>
            </div>
            <div className="contact-info mr-20">
                {
                    contactData.map((item) => (
                        <div className="single-contact-info d-flex align-items-center" key={item.id}>
                            <div className="contact-info-icon">
                                <Link href="#"><i className={item.icon}></i></Link>
                            </div>
                            <div className="contact-info-text">
                                <span>{item.infoText}</span>
                                <h5><Link href={item.contact}>{item.other}</Link></h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Contact;