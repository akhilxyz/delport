import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';
import LocationArea from '@components/extra-page/location'
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import FooterOne from '@layout/footer/footer-1';
import HeaderThere from '@layout/header/header-there';
import companyData from '@data/company-data';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Location'} info={companyData.name} />
                {/* <HeaderOne headerClass={'header__two menu-sticky white-bg'} /> */}
                <HeaderThere />
                <LocationArea />
                <FooterOne />
            </Wrapper>
        </>
    );
};

export default index;