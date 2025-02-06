import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';
import ContactArea from '@components/extra-page/contact';
import FooterOne from '@layout/footer/footer-1';
import HeaderOne from '@layout/header/header-one';
import HeaderThere from '@layout/header/header-there';
import companyData from '@data/company-data';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Contact'} info={companyData.name} />
                {/* <HeaderOne headerClass={'header__two menu-sticky white-bg'} /> */}
                <HeaderThere />
                <ContactArea />
                <FooterOne />
            </Wrapper>
        </>
    );
};

export default index;