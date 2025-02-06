
import SEO from "@components/seo";
import Wrapper from "../layout/wrapper";
import HomeMain from "@components/home";
import HeaderOne from "@layout/header/header-one";
import FooterOne from "@layout/footer/footer-1";
import companyData from "@data/company-data";
import HeaderThere from "@layout/header/header-there";


export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={companyData.name} info={companyData.description} />
      {/* <HeaderOne headerClass="header__two header__two-space header__transparent menu-sticky" /> */}
      {/* <HeaderThere /> */}
      <HomeMain />
      <FooterOne />
    </Wrapper>
  )
}
