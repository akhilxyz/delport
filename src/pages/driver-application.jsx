import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';
import DriverApplicationForm from '@components/extra-page/driver-application/index';
import FooterOne from '@layout/footer/footer-1';
import HeaderThere from '@layout/header/header-there';
import companyData from '@data/company-data';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Driver Application'} info={companyData.name} />
                {/* <HeaderOne headerClass={'header__two menu-sticky white-bg'} /> */}
                <HeaderThere />
                <DriverApplicationForm />
                <FooterOne />
            </Wrapper>
        </>
    );
};

export default index;