import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import LocationMap from './location-map';
import LocationArea from './location-area';
import OfficeArea from './office-area';
import Terminals from './terminals';

const index = () => {
    return (
        <main>
            <Breadcrumb title="Locations" subTitle="Locations" />
            <Terminals />
            <OfficeArea />
        </main>
    );
};

export default index;