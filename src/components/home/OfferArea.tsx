"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import offer_icon_1 from "@/assets/images/resource/offer-icon1.png";
import offer_icon_2 from "@/assets/images/resource/offer-icon2.png";
import offer_icon_3 from "@/assets/images/resource/offer-icon3.png";
import offer_icon_4 from "@/assets/images/resource/offer-icon4.png";
import offer_icon_5 from "@/assets/images/resource/offer-icon5.png";
import offer_icon_6 from "@/assets/images/resource/offer-icon6.png";
import offer_thumb from "@/assets/images/resource/offer-thumb.png";


interface DataType {
  subtitle: string;
  title_1: string;
  title_2: string;
  feature: {
    icon: StaticImageData;
    title: string;
    sm_des: string;
  }[];
}

const offer_content: DataType = {
  subtitle: "What We Offer",
  title_1: "Taking The Effort Out Of",
  title_2: "Business Energy",
  feature: [
    {
      icon: offer_icon_1,
      title: "Battery Storage",
      sm_des: "Solar PV, Battery Storage Heat Recovery",
    },
    {
      icon: offer_icon_2,
      title: "Energy Around",
      sm_des: "Solar PV, Battery Storage Heat Recovery",
    },
    {
      icon: offer_icon_3,
      title: "Solar Solutions",
      sm_des: "Solar PV, Battery Storage Heat Recovery",
    },
    {
      icon: offer_icon_4,
      title: "Solar PV Systems",
      sm_des: "Solar PV, Battery Storage Heat Recovery",
    },
    {
      icon: offer_icon_5,
      title: "Solar Projects",
      sm_des: "Hosting Community Solar Farms Projects",
    },
    {
      icon: offer_icon_6,
      title: "Solar PV Systems",
      sm_des: "Solar PV, Battery Storage Heat Recovery",
    }
  ],
};

const { subtitle, title_1, title_2, feature } = offer_content;

const OfferArea = () => {
  return (
    <>
      <div className="offer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="section-title wow animate__slideInUp">
                <div className="section-sub-title offer">
                  <h4>{subtitle}</h4>
                </div>
                <div className="section-main-title offer">
                  <h2>{title_1}</h2>
                  <h2>{title_2}</h2>
                </div>
              </div>
              <div className="row">
                {feature.map((item, i) => (
                  <div key={i} className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="offer-items-box wow animate__slideInDown">
                      <div className="offer-icon-thumb">
                        <Image src={item.icon} alt="image-title" />
                      </div>
                      <div className="offer-content">
                        <h4>{item.title}</h4>
                        <p>{item.sm_des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="offer-thumb wow animate__slideInRight">
                <Image
                  src={offer_thumb}
                  style={{ height: "auto" }}
                  alt="image-title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferArea;
