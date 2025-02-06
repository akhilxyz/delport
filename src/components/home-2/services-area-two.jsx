import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import servicesData from '@data/services-data';
import { useSearchParams } from 'next/navigation';
import WorkProcessArea from './work-process-area';
import Image from 'next/image';
import exampleImage from '@assets/img/example-image.jpg'; // Ensure the path is correct
import serviceImg from '@assets/img/services-section.png'; // Ensure the path is correct

const ServicesAreaTwo = () => {
    const param = useSearchParams();
    const focusFragment = param.get('focus');
    const serviceRefs = useRef([]);

    useEffect(() => {
        if (focusFragment) {
            const focusedElement = serviceRefs.current.find(ref => ref?.id === focusFragment);
            if (focusedElement) {
                focusedElement.scrollIntoView({ behavior: 'smooth' });
                focusedElement.classList.add('highlight'); // Optional: add a class to highlight the element
            }
        }
    }, [focusFragment]);

    return (
        <section className="services__3 grey-bg-4 pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="col-md-8">
                        <div className="section__title mb-55 text-center">
                            <span className="sub-title">Solutions</span>
                            <h2 className="title">what we do</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                    {servicesData.map((item, index) => (
                        <div
                            className="col-xl-4 col-md-6"
                            key={item.fragment}
                            id={item.fragment}
                            ref={el => (serviceRefs.current[index] = el)}
                        >
                            <div className="services__3-item mb-50">
                                <div className="services__3-item-num">
                                    <h3>{(index + 1).toString().padStart(2, "0")}</h3>
                                </div>
                                <div className="services__3-item-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <h3 className="services__3-item-title">
                                    <span>{item.title}</span>
                                </h3>
                                <p className="services__3-item-text">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <WorkProcessArea />
        </section>
    );
};

export default ServicesAreaTwo;
