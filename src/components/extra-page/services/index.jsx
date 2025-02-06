import React from 'react';
import ServicesAreaTwo from '@components/home-2/services-area-two';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const index = () => {
    return (
        <main>
            <Breadcrumb title={'Solutions'} subTitle={'Solutions'} />
            <ServicesAreaTwo />
        </main>
    );
};

export default index;