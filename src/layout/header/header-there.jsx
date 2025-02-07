import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@assets/img/logo/logo.png';
import imgFive from "@assets/img/insights/mbe-certification.png";
import OffCanvasMain from '@components/common/off-canvas';
import Menus from './menus';
import companyData from '@data/company-data';
// import './header.css'

const HeaderThere = () => {
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

    return (
        <header>
            <div 
                className="header__bottom-wrapper  header-transparent  pb-15"
                style={{ background: 'transparent', position: 'relative', zIndex:'1000' }} // Inline style for transparency
            >
                <div className="container">
                    <div className="header__bottom p-relative">
                        <div className="header__bottom-info">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2 col-md-2 col-9">
                                    <div className="logo logo-transform">
                                        <Link href="/">
                                            <Image priority src={Logo} style={{ width: "auto", height: "auto" }} alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-3">
                                    <div className="text-end d-xl-none">
                                        <div className="header__toggle-btn sidebar-toggle-btn">
                                            <div className="header__bar" onClick={() => setIsOffCanvasOpen(true)}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-none d-xl-block">
                                        <div className="header__info">
                                            <div className="header__info-item">
                                                <div className="header__info-icon">
                                                    <i className="flaticon-telephone-call"></i>
                                                </div>
                                                <div className="header__info-text">
                                                    <span>Call us now</span>
                                                    <h5><Link href={`tel:${companyData.contact.phone.link}`}>{companyData.contact.phone.text}</Link></h5>
                                                </div>
                                            </div>
                                            <div className="header__info-item">
                                                <div className="header__info-icon">
                                                    <i className="flaticon-envelope"></i>
                                                </div>
                                                <div className="header__info-text">
                                                    <span>Email now</span>
                                                    <h5><Link href={`mailto:${companyData.contact.email}`}>{companyData.contact.email}</Link></h5>
                                                </div>
                                            </div>
                                            <div className="header__info-item">
                                                <div className="header__info-icon">
                                                    <i className="flaticon-pin"></i>
                                                </div>
                                                <div className="header__info-text">
                                                    <span>{companyData.office[0].status.split(',')[0]}</span>
                                                    <h5><Link href={companyData.office[0].link}>{companyData.office[0].status.split(',').slice(1).join(',')}</Link></h5>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', position: "relative", justifyContent: "center", alignItems: "center" }}>
                                                <Image src={imgFive} width={125} height={100} alt="Insight Logo" style={{ position: 'absolute', left: '10px', top: '-9px' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-area position d-none d-xl-block p-absolute">
                            <div className="row d-flex justify-content-end align-items-center">
                                <div className="col-xl-10 col-lg-10">
                                    <div className="menu-wrapper menu-bg d-flex justify-content-between">
                                        <div className="main-menu main-menu-1">
                                            <nav id="mobile-menu">
                                                <Menus />
                                            </nav>
                                        </div>
                                        <div className="menu-btn">
                                            <Link href="/driver-application">drive with us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <OffCanvasMain isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />
        </header>
    );
};

export default HeaderThere;
