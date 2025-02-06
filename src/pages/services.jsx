import ServicesMainArea from '@components/extra-page/services';
import SEO from '@components/seo';
import companyData from '@data/company-data';
import FooterOne from '@layout/footer/footer-1';
import HeaderOne from '@layout/header/header-one';
import HeaderThere from '@layout/header/header-there';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Services'}  info={companyData.name}/>
            {/* <HeaderOne headerClass={'header__two menu-sticky white-bg'} /> */}
            <HeaderThere />
            <ServicesMainArea />
            <FooterOne />
        </Wrapper>
    );
};

export default index;