import companyData from '@data/company-data';
import Link from 'next/link';
import React from 'react';

const OfficeArea = () => {
    return (
        <section className="office-location-area pt-190 pb-180 p-relative">
            <div className="office-map">
                <iframe width={250} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12271.270827425493!2d-86.1967989!3d39.7437455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b59c2c2c3cdfb%3A0x76a8b6666d7a75e!2s1702%20S%20Belmont%20Ave%2C%20Indianapolis%2C%20IN%2046221%2C%20USA!5e0!3m2!1sen!2sin!4v1719257945744!5m2!1sen!2sin" loading='lazy'>
                </iframe>
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-xxl-4 col-xl-7">
                            <div className="office-wrapper">
                                {
                                    companyData.office.map((item) => (
                                        <div className="office-item" key={item.id}>
                                            <h4>{item.officeName}</h4>
                                            <div className="office-content">
                                                <div className="singel-addresss">
                                                    <Link href={item.link}><span><i className="far fa-map-marker-alt"></i></span><span>{item.status}</span></Link>
                                                </div>
                                                <div className="singel-addresss">
                                                    <Link href={item.mailAddress}><span><i className="far fa-envelope"></i></span><span>{item.email}</span></Link>
                                                </div>
                                                <div className="singel-addresss">
                                                    <Link href={item.tel}><span><i className="far fa-phone-alt"></i></span><span>{item.number}</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeArea;