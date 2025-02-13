import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import LocationMap from './location-map';
import LocationArea from './location-area';
import OfficeArea from './office-area';
import Terminals from './terminals';
import Image from 'next/image';

const index = () => {
    return (
        <main >
            <Breadcrumb title="Locations" subTitle="Locations" />
            {/* <Terminals /> */}
            {/* <OfficeArea /> */}

            {/* <Image src="/assets/img/locations.jpg" style={{marginTop:'-120px'}} alt="Locations" layout='fill'  objectFit='cover' /> */}
        </main>
    );
};

export default index;