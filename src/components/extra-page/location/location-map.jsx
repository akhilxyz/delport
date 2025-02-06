import locationOne from '@assets/img/map/loaction-1.png';
// import usaFlag from '@assets/img/contact/usa-flag.jpg';
import canadaFlag from '@assets/img/contact/canada-flag.png';
import locationTwo from '@assets/img/map/loaction-2.png';
import greenland from '@assets/img/contact/greenland-flag.jpg';
import locationThere from '@assets/img/map/loaction-3.png';
import russiaFlag from '@assets/img/contact/russia-flag.png';
import locationFour from '@assets/img/map/loaction-4.png';
import country from '@assets/img/map/country-1.png';
import africaFlag from '@assets/img/contact/south-africa-flag.jpg';
import indiaFlag from '@assets/img/contact/india-flag.jpg';
import australiaFlag from '@assets/img/contact/australia-flag.png';
import Image from 'next/image';
import React, { useState } from 'react';
import MapBg from '@assets/img/map/map.png'


const LocationMap = () => {

    const locationData = [
        {
            id: 1,
            image: locationOne,
            flag: usaFlag,
            locationText: 'California',
            locationStyle: 'location-item location-1'
        },
        {
            id: 2,
            image: locationTwo,
            flag: greenland,
            locationText: 'Oklahoma',
            locationStyle: 'location-item location-2'
        },
        {
            id: 3,
            image: locationThere,
            flag: russiaFlag,
            locationText: 'Indianapolis',
            locationStyle: 'location-item location-3'
        },
        {
            id: 4,
            image: locationFour,
            flag: country,
            locationText: 'New Jersey',
            locationStyle: 'location-item location-4'
        }, {
            id: 5,
            image: locationTwo,
            flag: greenland,
            locationText: 'Oklahoma',
            locationStyle: 'location-item location-2'
        },
        {
            id: 6,
            image: locationThere,
            flag: russiaFlag,
            locationText: 'Indianapolis',
            locationStyle: 'location-item location-3'
        },
        {
            id: 7,
            image: locationFour,
            flag: country,
            locationText: 'New Jersey',
            locationStyle: 'location-item location-4'
        },

    ]
    // const [emailData, setEmailData] = useState({
    //     to: 'meenucargaison@gmail.com',
    //     subject: 'testmail23e',
    //     text: 'asdfasdfasdfasfdaf',
    // });

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await fetch('/api/send-email', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(emailData),
    //         });

    //         const result = await res.json();
    //         if (res.status === 200) {
    //             alert('Email sent successfully!');
    //         } else {
    //             alert(result.error);
    //         }
    //     } catch (error) {
    //         console.error('Error sending email:', error);
    //     }
    // };


    return (
        <div className="location-map-area pt-120 wow fadeInUp" data-wow-delay=".3s">
            <div className="container">


                {/* <iframe allowFullScreen={false} src="https://www.google.com/maps/d/embed?mid=1uHf-5sHgC-8w9bku2eaFVZNJK6hLog0&hl=en&ehbc=2E312F" width="640" height="480"></iframe> */}
                {/* <div className="location-map-bg" style={{ backgroundImage: `url(${MapBg.src})` }}>
                    {
                        locationData.map((item) => (
                            <div className={item.locationStyle} key={item.id}>
                                <div className='location-icon'>
                                    <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="location" />
                                </div>
                                <div className="location-content">
                                    <div className="location-counrty">
                                        <Image src={item.flag} style={{ width: "100%", height: "100%" }} alt="location" />
                                    </div>
                                    <div className="location-text">
                                        <span>{item.locationText}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div> */}
            </div>
        </div>

    );
};



export default LocationMap;