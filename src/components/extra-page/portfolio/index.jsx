import React from 'react';
import PortfolioSection from './portfolio-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const index = () => {
    return (
        <main>
            <Breadcrumb title={'Gallery'} subTitle={'Gallery'} />
            <PortfolioSection />
        </main>
    );
};

export default index;