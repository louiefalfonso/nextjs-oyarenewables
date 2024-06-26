import React from "react";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import AboutArea from "../../home/AboutArea";
import ServiceArea from "../../home/ServiceArea";
import CtaArea from "../../home/CtaArea";
import TeamArea from "../../home/TeamArea";
import SubscribeArea from "../../home/SubscribeArea";


const AboutPage = () => {
  return (
    <>
      <Header />
        <main>
          <Breadcrumb top_title="About Us" title="About Us" />
          <AboutArea/>
          <ServiceArea/>
          <CtaArea/>
          <TeamArea/>
          <SubscribeArea/>
        </main>
      <Footer />
    </>
  );
};

export default AboutPage;
