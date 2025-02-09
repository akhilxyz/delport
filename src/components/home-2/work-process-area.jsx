import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import work_img from '@assets/img/work/gurantee.png';
import 'react-modal-video/css/modal-video.min.css';
import VideoModal from '@components/common/modals/modal-video';
import useModal from '@hooks/use-modal';
import { auto } from '@popperjs/core';
import serviceImg from '@assets/img/services-section.png'; // Ensure the path is correct

const WorkProcessArea = () => {
    const work_data = [
        {
            id: 1,
            sub_title: 'Guaranteed Shipping',
            // number: '01',
            // description: 'Fill out the form with shipment size, value, locations, and timeline.'
        },
        {
            id: 2,
            sub_title: 'Asset-Backed Capacity',
            // number: '02',
            // description: 'Discover our easy-to-use technology: just select your shipment with a click.'
        },
        {
            id: 3,
            sub_title: 'Competitive Rates',
            // number: '03',
            // description: 'Book your truck with us at the last minute and enjoy competitive rates that fit your budget.'
        },
        {
            id: 4,
            sub_title: '24/7 Customer Service',
            // number: '04',
            // description: "Easily monitor the status of your shipment with our tracking feature, ensuring you're always updated"
        },
        {
            id: 5,
            sub_title: 'EDI Enabled for automatic updates',
            // number: '04',
            // description: "Easily monitor the status of your shipment with our tracking feature, ensuring you're always updated"
        },
        {
            id: 6,
            sub_title: 'Use best TMS and ELD in the Market',
            // number: '04',
            // description: "Easily monitor the status of your shipment with our tracking feature, ensuring you're always updated"
        },
        {
            id: 7,
            sub_title: 'Dedicated Account Coordinator for customer',
            // number: '04',
            // description: "Easily monitor the status of your shipment with our tracking feature, ensuring you're always updated"
        },
        {
            id: 8,
            sub_title: 'Adaptable Modes',
            // number: '04',
            // description: "Easily monitor the status of your shipment with our tracking feature, ensuring you're always updated"
        },
    ]
    const { isVideoOpen, setIsVideoOpen } = useModal();

    return (
        <>
            <section className="work grey-bg ">
                <div className="container">
                    <div className="work__wrapper p-relative wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="row align-items-center align-items-xxl-end">
                            <div className="col-xl-5 col-lg-5">
                                <div className="work__content">
                                    <div className="section__title mb-45">
                                        <span className="sub-title">process</span>
                                        <h2 className="title">{`Setting The Gold Standards `} in Transportation</h2>
                                    </div>
                                    <div className="work__content-list pr-60">
                                        {
                                            work_data.map((item) => (
                                                <div className="work__item" key={item.id}>
                                                    <div className="work__item-num">
                                                        <h5>{item.number}</h5>
                                                    </div>
                                                    <div className="work__item-text">
                                                        <h4>{item.sub_title}</h4>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                    <Image src={serviceImg} width={400} height={400} quality={100} alt='Work' style={{ width: '100%', height: 'auto', marginLeft: '150px', marginBottom: '150px'}} />
                                {/* <div className="work__img white-bg p-relative ml-30">
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
};

export default WorkProcessArea;