import React from 'react';
import approch_img from '@assets/img/approach/approch-img.jpg';
import Image from 'next/image';

const ApproachArea = () => {
    return (
        <section className="approach__area fix grey-bg-4">
            <div className="approach__img m-img">
                <Image src={approch_img} style={{ width: "100%", height: "auto" }} alt="approach" />

            </div>
            <div className="container">
                <div className="row g-0 justify-content-end">
                    <div className="col-lg-6">
                        <div className="approach__content  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <div className="section__title mb-35">
                                <span className="sub-title">Journey</span>
                                <h2 className="title">Founding Golden Mile Enterprises

                                </h2>
                            </div>
                            <div className="about__3">
                                <p>Balwinder Chandi came to the U.S. in 2001 with nothing but drive and determination.
                                    Soon after establishing himself in the U.S. Balwinder got a job at a transportation company as an over the road driver. He developed a passion and curiosity for the industry. Balwinder was joined by his wife Rupinder Kaur and Son RJ in 2006. Rupinder found employment in a dispatch office and gained experience in Dispatch, Operations and Warehouse managing-
                                    As the years went by and as responsibilities grew, their son expressed an interest in learning the ropes in Transporation and was compelled to help his family. He soon found his way into a dispatch office and so began his training in the business.
                                    And so came to be the idea of opening their own Transporation company. In 2014 Chandi purchased his own truck and became an owner operator. Within a couple years they had purchased a few additional units and had their very own small fleet and so the name
                                    *Golden Mile Enterprises, Inc was born in 2016.</p>
                                <p> In 2018 Chandi parked his truck and joined his wife and son in the dispatch office to focus on growing the company. Together, they have grown to a fleet of 350+ Trucks, over 700+ trailers and 4 Terminals across the U.S. providing transportation services to many top tier customers with a focus around transparency any service.
                                    The aim is to be one of the most successful Transporation companies in the industry.
                                    Leading their team from a family-oriented management perspective and growing to 1000+ units. If you join the Golden Mile Team, you are not just another employee, you are Family.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproachArea;
