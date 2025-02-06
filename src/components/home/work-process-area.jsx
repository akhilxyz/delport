import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import work_img from '@assets/img/work/truck with trailers.png';
import trailerImg from '@assets/img/work/trailer.jpg';
import security_icon from '@assets/img/work/Chat with us.png'; // Small security-related image
import 'react-modal-video/css/modal-video.min.css';
import VideoModal from '@components/common/modals/modal-video';
import useModal from '@hooks/use-modal';

const WorkProcessArea = () => {
    const work_data = [
        {
            id: 1,
            sub_title: 'Freight Security is our top priority',
            description: 'We prioritize the safety of your cargo with advanced security measures and robust protocols.'
        },
        {
            id: 2,
            sub_title: 'Transportation with safely and efficiently',
            description: 'Delivering your goods safely and efficiently by utilizing our trained professionals.'
        },
        {
            id: 3,
            sub_title: '24/7 access to tracking and customer service',
            description: 'Enjoy round-the-clock tracking and customer service for a seamless shipping experience.'
        },
        {
            id: 4,
            sub_title: 'Competitive pricing in an ever-changing market',
            description: "Offering flexible, transparent pricing to provide the best value in a dynamic market."
        },
    ];

    const { isVideoOpen, setIsVideoOpen } = useModal();

    return (
        <>
            <section className="work grey-bg">
                <div className="container">
                    <div className="work__wrapper p-relative wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6">
                                <div className="work__content">
                                    <div className="section__title mb-45">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                            <Image 
                                                src={security_icon} 
                                                width={80} 
                                                height={70} 
                                                alt="Security Icon" 
                                                style={{ marginRight: '599px', marginBottom: '-40px' }} // Move the icon up a bit
                                            />
                                            <h4 className="title">How we protect your freight from theft</h4>
                                        </div>
                                    </div>
                                    <div className="work__content-list pr-60">
                                        {work_data.map((item) => (
                                            <div className="work__item" key={item.id}>
                                                <div className="work__item-text">
                                                    <h4>{item.sub_title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image src={work_img} width={800} height={460} quality={100} alt="Work" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkProcessArea;
