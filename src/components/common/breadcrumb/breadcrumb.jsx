import React from 'react';
import default_bg from '@assets/img/breadcrumb/breadcrumb-bg.png'; // Default background
import title1_bg from '@assets/img/breadcrumb/Breadcrumb-bg1.png'; // Background for Title 5
// import title2_bg from '@assets/img/breadcrumb/title2-bg.png'; // Background for Title 2
// import title3_bg from '@assets/img/breadcrumb/title3-bg.png'; // Background for Title 3
// import title4_bg from '@assets/img/breadcrumb/title4-bg.png'; // Background for Title 4
// import title5_bg from '@assets/img/breadcrumb/title1-bg.png'; // Background for Title 1
import Link from 'next/link';

const Breadcrumb = ({ title, subTitle }) => {
    // Define different background images based on the title
    const getBackgroundImage = () => {
        switch(title) {
            case 'Contact':
                return title1_bg.src;  // Use image for Title 1
            // case 'Title 2':
            //     return title2_bg.src;  // Use image for Title 2
            // case 'Title 3':
            //     return title3_bg.src;  // Use image for Title 3
            // case 'Title 4':
            //     return title4_bg.src;  // Use image for Title 4
            // case 'Title 5':
            //     return title5_bg.src;  // Use image for Title 5
            default:
                return default_bg.src;  // Default background
        }
    };

    return (
        <section className="page-title-area breadcrumb-spacing" style={{ backgroundImage: `url(${getBackgroundImage()})`, marginTop:'-120px' }}>
            <div className="container">
                <div className="row justify-content-center mb-50">
                    <div className="col-xxl-9">
                        <div className="page-title-wrapper text-center mt-50">
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
        </section>
    );
};

export default Breadcrumb;
