import React from "react";
import FooterBottom from "../common/footer/FooterBottom";
import MainFooter from "../common/footer/MainFooter";
import HeaderLower from "../common/header/HeaderLower";
import HeaderSearch from "../common/header/HeaderSearch";
import Headertop from "../common/header/Headertop";
import MobileHeader from "../common/header/MobileHeader";
import MobileNav from "../common/header/MobileNav";
import StickyHeader from "../common/header/StickyHeader";
import MainSlider from "./MainSlider";

const Index = () => {
  return (
    <React.Fragment>
      <div className="page-wrapper">

        <div className="preloader"></div>
      
        <header className="main-header header-style-one">
          <Headertop/>
          <HeaderLower/>
          <StickyHeader/>
          <MobileHeader/>
          <MobileNav/>
          <HeaderSearch/>
        </header>

        <MainSlider/>


        {/* FOOTER */}
        <footer class="main-footer">
          <MainFooter/>
          <FooterBottom/>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Index;
