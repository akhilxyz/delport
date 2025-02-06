// import Link from 'next/link';
// import React from 'react';
// import bannerData from '@data/banner-data';

// //swiper style
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
// import 'swiper/css/bundle';

// const BannerArea = () => {
//     return (
//         <section className="banner-area banner-area1 pos-rel">
//             <div className="slider__active">
//                 <div>
//                     <Swiper
//                         modules={[Autoplay, Navigation, EffectFade, Pagination]}
//                         slidesPerView={1}
//                         slidespercolumn={1}
//                         pagination={{
//                             clickable: true,
//                         }}
//                         loop={true}
//                         effect={"fade"}
//                         autoplay={{
//                             delay: 5000,
//                         }}
//                         // Navigation arrows
//                         navigation={{
//                             nextEl: ".slider-button-next",
//                             prevEl: ".slider-button-prev",
//                         }}
//                         a11y={false}
//                     >
//                         {
//                             bannerData.slice(3, 6).map((item) => (
//                                 <SwiperSlide key={item.id}>
//                                     <div>
//                                         <div className="single-banner banner-overlay single-banner-1 banner-830">
//                                             <div className="banner-bg banner-bg1 banner-bg1-1" >
//                                                 <video
//                                                     src="/assets/videos/video-lite.mp4"
//                                                     style={{
//                                                         width: "100%",
//                                                         height: "100%",
//                                                         position: "absolute",
//                                                         top: 0,
//                                                         left: 0,
//                                                         objectFit: "cover",
//                                                         zIndex: -1
//                                                     }}
//                                                     autoPlay
//                                                     muted
//                                                     loop
//                                                     playsInline
//                                                 />
//                                             </div>
//                                             <div className="container pos-rel">
//                                                 <div className="row align-items-center">
//                                                     <div className="col-lg-8">
//                                                         <div className="banner-content banner-content1 banner-content1-1">
//                                                             <div className="banner-meta-text">
//                                                                 <span> Welcome to <span style={{ color: '#e1aa4c' }}>Golden Mile</span> </span>
//                                                             </div>
//                                                             <h1 className="banner-title">
//                                                                 {item.banner_title} <br /> {item.title_two}
//                                                             </h1>
//                                                             <div className="banner-btn">
//                                                                 <Link href="/contact" className="fill-btn clip-btn">Get Pricing</Link>
//                                                                 <Link className="fill-btn clip-btn" href="/services">our services</Link>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             ))
//                         }
//                     </Swiper>
//                 </div>
//             </div>
//             {/* Navigation buttons */}
//             <div className="slider-nav d-none d-md-block">
//                 <div className="dp-nav-btn slider-button-prev"><i className="far fa-angle-left"></i></div>
//                 <div className="dp-nav-btn slider-button-next"><i className="far fa-angle-right"></i></div>
//             </div>
//             {/* Pagination */}
//             <div className="slider-pagination slider1-pagination"></div>
//         </section>
//     );
// };

// export default BannerArea;
