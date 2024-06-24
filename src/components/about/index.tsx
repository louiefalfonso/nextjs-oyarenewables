import React from "react";
import FooterOne from "@/layouts/Footer";
import HeaderOne from "@/layouts/Header";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import AboutArea from "../home/AboutArea";
import ServiceArea from "../home/ServiceArea";
import CtaArea from "../home/CtaArea";
import TeamArea from "../home/TeamArea";
import SubscribeArea from "../home/SubscribeArea";


const AboutPage = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="About Us" title="About Us" />
        <AboutArea/>
        <ServiceArea/>
        <CtaArea/>
        <TeamArea/>
        <SubscribeArea/>
      </main>
      <FooterOne />
    </>
  );
};

export default AboutPage;
