import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import ApplicationForm from './driver-application-form';

const index = () => {
    return (
        <main>
            <Breadcrumb title="Drive With Us" subTitle="Driver Application" />
            <ApplicationForm />
        </main>
    );
};

export default index;