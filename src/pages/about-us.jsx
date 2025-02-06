
import AboutUsArea from '@components/extra-page/about-us';
import SEO from '@components/seo';
import companyData from '@data/company-data';
import FooterOne from '@layout/footer/footer-1';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import HeaderThere from '@layout/header/header-there';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'About'} info={companyData.name}/>
                {/* <HeaderOne headerClass={'header__two menu-sticky white-bg'} /> */}
                <HeaderThere/>
                <AboutUsArea />
                <FooterOne />
            </Wrapper>
        </>
    );
};

export default index;