// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import logo from "@assets/img/logo/logo.png";
// import OffCanvasMain from "@components/common/off-canvas";
// import Menus from "./menus";
// import useCartInfo from "@hooks/use-cart-info";
// import SidebarCart from "@components/common/sidebar-cart";

// const HeaderFour = ({ headerClass }) => {
//   const [openCart, setOpenCart] = useState(false);
//   const { quantity } = useCartInfo();
//   const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

//   // Sticky Menu functionality
//   useEffect(() => {
//     const sticky = () => {
//       const header = document.querySelector(".menu-sticky");
//       const scrollTop = window.scrollY;
//       if (header) {
//         scrollTop >= 40
//           ? header.classList.add("sticky")
//           : header.classList.remove("sticky");
//       }
//     };

//     window.addEventListener("scroll", sticky);
//     return () => {
//       window.removeEventListener("scroll", sticky);
//     };
//   }, []);

//   return (
//     <>
//       <header>
//         <div id="header-sticky" className={`menu-sticky ${headerClass}`}>
//           <div className="container">
//             <div className="row align-items-center">
//               {/* Logo Section */}
//               <div className="col-xl-2 col-6">
//                 <div className="logo">
//                   <Link href="/">
//                     <Image
//                       src={logo}
//                       style={{ width: "auto", height: "auto" }}
//                       alt="Logo"
//                     />
//                   </Link>
//                 </div>
//               </div>

//               {/* Main Menu Section */}
//               <div className="col-xl-7 d-none d-xl-block">
//                 <div className="main-menu main-menu-2 text-center">
//                   <nav id="mobile-menu">
//                     <Menus />
//                   </nav>
//                 </div>
//                 <div className="header__two-btn t-right d-block d-lg-none text-end">
//                   <Link href="/contact" className="fill-btn clip-btn">
//                     Get Estimation
//                   </Link>
//                 </div>
//               </div>

//               {/* Action Buttons Section */}
//               <div className="col-xl-3 col-6">
//                 <div className="d-flex align-items-center justify-content-end">
//                   <div className="header__two-btn lh-1 t-right d-none d-xl-block">
//                     <Link href="/contact" className="fill-btn clip-btn">
//                       Get Estimation
//                     </Link>
//                   </div>
//                   <span
//                     onClick={() => setOpenCart(true)}
//                     className="action-btn cart-btn action-item-cart dp-cart-border ml-10"
//                   >
//                     <i className="fas fa-shopping-basket"></i>
//                     <span className="product-quantity-circle-cart">
//                       {quantity}
//                     </span>
//                   </span>

//                   <div className="text-end d-xl-none d-block ml-30">
//                     <div className="header__toggle-btn sidebar-toggle-btn">
//                       <div
//                         className="header__bar"
//                         onClick={() => setIsOffCanvasOpen(true)}
//                       >
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <OffCanvasMain
//           isOffCanvasOpen={isOffCanvasOpen}
//           setIsOffCanvasOpen={setIsOffCanvasOpen}
//         />
//       </header>

//       {/* Sidebar Cart */}
//       <SidebarCart openCart={openCart} setOpenCart={setOpenCart} />
//     </>
//   );
// };

// export default HeaderFour;
