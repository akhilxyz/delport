import React from 'react';
import default_bg from '@assets/img/breadcrumb/breadcrumb-bg.png'; // Default background
import title1_bg from '@assets/img/breadcrumb/Breadcrumb-bg1.png'; // Background for Title 5
import solutions from '@assets/img/breadcrumb/solutions.jpg'; // Background for Title 2
import locations from '@assets/img/locations.jpg'; // Background for Title 2
// import title3_bg from '@assets/img/breadcrumb/title3-bg.png'; // Background for Title 3
// import title4_bg from '@assets/img/breadcrumb/title4-bg.png'; // Background for Title 4
// import title5_bg from '@assets/img/breadcrumb/title1-bg.png'; // Background for Title 1
import Link from 'next/link';

const Breadcrumb = ({ title, subTitle }) => {
    // Define different background images based on the title
    const getBackgroundImage = () => {
        switch (title) {
            case 'Contact':
                return title1_bg.src;  // Use image for Title 1
            case 'Solutions':
                return solutions.src;  // Use image for Title 2
            case 'Locations':
                return locations.src;  // Use image for Title 3
            // case 'Title 4':
            //     return title4_bg.src;  // Use image for Title 4
            // case 'Title 5':
            //     return title5_bg.src;  // Use image for Title 5
            default:
                return default_bg.src;  // Default background
        }
    };

    return (
        <div>
            {
                title !== 'Locations' ?
                    <section className="page-title-area breadcrumb-spacing" style={{
                        height: '100vh', display: 'flex', alignItems: 'center',
                        backgroundImage: `url(${getBackgroundImage()})`, marginTop: '-120px'
                    }}>
                        <div className="container">
                            <div className="row justify-content-center mb-120">
                                <div className="col-xxl-9">
                                    <div className="page-title-wrapper text-center mt-100">
                                        <h3 className="page-title mb-30">{title}</h3>
                                        <div className="breadcrumb-menu">
                                            <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                                <ul className="trail-items">
                                                    <li className="trail-item trail-begin"><Link href="/"><span>Home</span></Link></li>
                                                    <li className="trail-item trail-end"><span>{subTitle}</span></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> :
                    <section
                        style={{
                            height: '200vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundImage: `url(${getBackgroundImage()})`,
                            backgroundSize: window.innerWidth < 768 ? 'contain' : 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: '100vw',
                            marginTop: '-120px',
                        }}
                    >
                    </section>
            }
        </div>
    );
};

export default Breadcrumb;
