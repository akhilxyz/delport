import Link from 'next/link';
import React from 'react';
import mission_img from '@assets/img/mission/mission-img.jpg';
import mission_contact from '@assets/img/mission/mission-contact-img-1.jpg';
import Image from 'next/image';
import companyData from '@data/company-data';


const MissionSection = () => {
   return (
      <section className="mission__area p-relative fix grey-bg-4 mb-120">
         <div className="mission__img m-img">
            <Image src={mission_img} style={{ width: "100%", height: "auto" }} alt="mission" />
         </div>
         <div className="container">
            <div className="row g-0">
               <div className="col-lg-6">
                  <div className="mission__content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                     <div className="section__title mb-35">
                        <span className="sub-title">Our Mission</span>
                        <h2 className="title">Our global logistics
                           expertise supply
                        </h2>
                     </div>
                     <div className="about__3">
                        <p> Our Philosophy is that Service and transparency is key in forging long lasting relationships With our customers. We understand that there are several options when it comes to selecting a carrier. What sets us apart is our willingness to go above and beyond, exceeding our customer&apos;s expectations.
We are committed to providing top-tier service, communication and reliability. Wewant our customers to rest assured that their freight is safe in our hands, and they trust that we will honor our commitments to them.
 </p>
                        
                        <p>Our Mission is to deliver exceptional transportation services through safety and dedication, providing cost effective logistics solutions. Creating long term relationships with our Customers and Partners.</p>
                        <p>Our goal is to drive success for our customers, employees, and communities by delivering, goods safely and efficiently. Promoting a culture of positivity and respect where we honor accomplishments that contribute to mutual growth.
We want to be the preferred transportation provider, known for our commitment to quality, integrity and customer satisfaction.
</p>
                        <p><strong>We are Golden Mile Enterprises, and we are Delivering the Gold Standard in Service.</strong></p>
                        <div className="mission__text-inner">
                          
                           <div className="mission__text-contact">
                              <div className="single-contact-info d-flex align-items-center">
                                 <div className="contact-info-icon">
                                    <Link href="#"><i className="flaticon-envelope"></i></Link>
                                 </div>
                                 <div className="contact-info-text">
                                    <span>send email</span>
                                    <h5><Link style={{ textTransform: "lowercase" }} href={`mailto:${companyData.contact.email}`}>{companyData.contact.email}</Link> </h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MissionSection;