//home img
// import slider_img_1 from "@assets/img/slider/slider-5.jpg";
// import slider_img_2 from "@assets/img/slider/slider.png";
// import slider_img_3 from "@assets/img/slider/slider-4.jpg";
//home-two img
// import slider_one from "@assets/img/slider/slider.png";
// import slider_two from "@assets/img/slider/slider-3.png";
// import slider_there from "@assets/img/slider/slider-5.jpg";
// import { color } from "framer-motion";
// import { wishlistItems } from "src/redux/features/wishlist-slice";

const bannerData = [
  //home-two data
  {
    id: 4,
    image: '',
    text: "welcome to Golden Mile",
    banner_title: (
      <span style={{color: "white"}}>
        Setting the <span style={{ color: "#d8a956" }}>Gold</span>
      </span>
    ),
    title_two: <span style={{color:"white"}}>Standard In Transportation</span>
  },
  {
    id: 5,
    image: '',
    text: "welcome to golden mile",
    banner_title: <span style={{color: "white"}}>Customer Satisfaction</span>,
    title_two: <span style={{color: "white"}}>Is Our Mission.</span>,
  },
  {
    id: 6,
    image: '',
    text: "welcome to Golden Mile",
    banner_title: (
      <span style={{color: "white"}}>
        Breaking The <span style={{ color: "white" }}>Mold and Shattering </span>
      </span>
    ),
    title_two: <span style={{color: "white"}}>Expectations.</span>,
  },
];

export default bannerData;
