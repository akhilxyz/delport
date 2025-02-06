import TeamAreaMain from '@components/extra-page/team';
import SEO from '@components/seo';
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
                <SEO pageTitle={'Teams'} info={companyData.name} />
                {/* <HeaderOne headerClass={'header__two menu-sticky white-bg'} /> */}
                <HeaderThere />
                <TeamAreaMain />
                <FooterOne />
            </Wrapper>
        </>
    );
};

export default index;