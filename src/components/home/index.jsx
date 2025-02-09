import React from 'react';
import BannerArea from './banner-area';
// import ServicesArea from './services-area';
import AboutUs from './about-us';
import WorkProcessArea from './work-process-area';
import BrandAreaSection from './brand-area-section';
import TestimonialArea from '@components/home/testimonial-area';
import FunfactArea from './funfact-area';
import InsightSection from './insight-section';
import AccordionArea from './accordion-area';
import HeaderThere from '@layout/header/header-there';
import Banner from './bannerNew';

const Index = () => {
    return (
        <main>
              <div className="video-background-container">
                {/* Video Element */}
                <video style={{ filter: 'brightness(70%)'}} className="background-video" autoPlay loop muted playsInline>
                    <source src="/assets/videos/video-lite.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <HeaderThere />

                {/* Content Over the Video */}
                <div className="content-overlay">
                    {/* <BannerArea /> */}

                    <Banner/>
                </div>
            </div>

            {/* Other sections */}
            <AboutUs />
            <FunfactArea />

            {/* <ServicesArea /> */}
            <WorkProcessArea />
            <BrandAreaSection />
            <TestimonialArea />
            <InsightSection />
            <AccordionArea />
        </main>
    );
};

export default Index;
