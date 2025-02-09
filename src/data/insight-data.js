import blog_img from "@assets/img/insights/tm-1.png";
import blog_img_2 from "@assets/img/insights/ecofriendly.jpg";
import blog_img_3 from "@assets/img/blog/blog-page-img-2.jpg";
import imgOne from "@assets/img/insights/CARB.png";
import imgTwo from "@assets/img/insights/NMFTA.png";
import imgThere from "@assets/img/insights/SMARTWAY.png";
import imgFour from "@assets/img/insights/vc.png";
import imgFive from "@assets/img/insights/nmsdc.png";


const insight_data = [
  //home-2 data
  {
    id: 1,
    author: "Ramazzotti",
    image: blog_img_2,
    date: "20",
    month: "JUN",
    comments: 12,
    commentIcon: "fas fa-comments",
    userIcon: "fas fa-user",
    title: <>Golden Mile is setting the standard for <span style={{color: "green"}}>eco-friendly</span> logistics.</>,
    description:
      "Golden Mile is dedicated to environmental responsibility with our fleet of modern trucks that have low emissions. By regularly maintaining them carefully, we ensure efficient operation, reducing our environmental impact and promoting cleaner air for everyone. In addition to our advanced fleet, we have integrated cutting-edge technology to optimize our routes and minimize fuel consumption. This not only enhances our operational efficiency but also significantly lowers our carbon footprint. Our commitment to sustainability extends beyond our fleet. We actively participate in and support initiatives aimed at conserving natural resources and reducing waste throughout our supply chain. By implementing innovative practices such as energy-efficient warehousing and packaging solutions, we are continuously striving to improve our environmental stewardship.",
  },
  // {
  //   id: 2,
  //   author: "Hunhu La.",
  //   image: blog_img,
  //   date: "12",
  //   month: "mar",
  //   comments: 5,
  //   commentIcon: "fas fa-comments",
  //   userIcon: "fas fa-user",
  //   title: "This schematic approach was later adopted",
  //   description:
  //     "From finance, retail, and travel, to social media, cyber security, adtech, and more, market leaders.",
  // },
  // {
  //   id: 3,
  //   author: "Shanky",
  //   image: blog_img_3,
  //   date: "22",
  //   month: "mar",
  //   comments: 16,
  //   commentIcon: "fas fa-comments",
  //   userIcon: "fas fa-user",
  //   title: "Improving Your Team Members Communication In",
  //   description:
  //     "From finance, retail, and travel, to social media, cyber security, adtech, and more, market leaders.",
  // },

];

const insight_data_logos = [
  {
    id: 1,
    image: imgOne,
    alt: "insight logo"
  },
  {
    id: 2,
    image: imgTwo,
    alt: "insight logo"
  },
  {
    id: 3,
    image: imgThere,
    alt: "insight logo"
  },
  {
    id: 4,
    image: imgFour,
    alt: "verified carrier logo"
  },
  {
    id: 5,
    image: imgFive,
    alt: "nmsdc logo"
  }
]

export {insight_data, insight_data_logos};
