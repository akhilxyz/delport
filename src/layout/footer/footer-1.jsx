import Link from 'next/link';
import React from 'react';
import bg_1 from '@assets/img/cta/call-cat-bg-1.png';
import bg_2 from '@assets/img/cta/call-cta-bg-2.png';
import companyData from '@data/company-data';
import servicesData from '@data/services-data';

const FooterOne = () => {

    const footer_data = [
        {
            id: 1,
            title: 'Call us now',
            img: bg_1,
            contact: companyData.contact.phone.link,
            call_num: companyData.contact.phone.text,
            icon: 'flaticon-telephone-call',
        },
        {
            id: 2,
            title: 'Email us',
            img: bg_2,
            contact: companyData.office[0].mailAddress,
            call_num: companyData.contact.email,
            icon: 'flaticon-envelope',
        },
    ]

    const handleSubmit = (e) => {
        e.prevenDefault()
    }
    return (
        <footer>
            <div className="footer-area footer__padd-1 p-relative footer-area1-bg pt-150 pb-50">
                <div className="call__cta position p-absolute">
                    <div className="container">
                        <div className="row">
                            {
                                footer_data.map((item) => (
                                    <div className="col-lg-6" key={item.id}>
                                        <div className="call__cta-wrapper call__cta-padd overlay overlay-red clip-box bg-css"
                                            style={{ backgroundImage: `url(${item.img.src})` }}>
                                            <div className="call__cta-content">
                                                <h6 className="call__cta-content-small-title">{item.title}</h6>
                                                <h3 className="call__cta-content-title"><Link href={item.contact}>{item.call_num}</Link></h3>
                                            </div>
                                            <div className="call__cta-icon">
                                                <i className={item.icon}></i>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget1 mb-50 pr-20">
                                <div className="footer-widget-title">
                                    <h4>about us</h4>
                                </div>
                                <p>Golden Mile Enterprises is a leading example of what a Carrier should embody. We are proud to offer dedicated TL, LTL, Solo and Team Capacity in an ever-changing market.
                                </p>
                                <div className="footer-social-link mt-40">
                                    <ul>
                                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-behance"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget2 mb-50 pl-30">
                                <div className="footer-widget-title">
                                    <h4>other pages</h4>
                                </div>
                                <div className="footer-widget-link">
                                    <ul>
                                        <li><Link href="/about-us">About Us</Link></li>
                                        <li><Link href="/services">Services</Link></li>                                        
                                        <li><Link href="/location">Locations</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>

                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget3 mb-50 pl-55">
                                <div className="footer-widget-title">
                                    <h4>our services</h4>
                                </div>
                                <ul className="footer-widget-link-2">
                                    {servicesData.slice(0,6).map((item) => (
                                        <li key={item.id}><i className={`fas ${item.icon}`}></i><Link href={`/services?focus=${item.fragment}`}>{item.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-widget footer2-widget footer2-widget3 mb-50 pl-55 pt-55">
                                <ul className="footer-widget-link-2">
                                    {servicesData.slice(6,servicesData.length).map((item) => (
                                        <li key={item.id}><i className={`fas ${item.icon}`}></i><Link href={`/services?focus=${item.fragment}`}>{item.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-menu-area black-bg">
                <div className="container">
                    <div className="footer-menu-box two">
                        <div className="row align-items-center">
                            <div className="col-xxl-7 col-lg-5 ">
                                <div className="footer-menu mb-15">
                                    <nav>
                                        <ul>
                                            <li><Link href="/terms-and-conditions">terms & conditions</Link></li>
                                            <li><Link href="/privacy-policy">Privacy Policy</Link></li> 
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-lg-7">
                                <div className="copy-right-text-2 mb-15">
                                    <p>Copyright by <Link href="">@goldenmileinc</Link> - {new Date().getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;